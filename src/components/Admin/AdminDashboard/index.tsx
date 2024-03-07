import { useEffect, useState } from 'react';
import { adminDashboardMock } from './mockup';
import { chartMockData } from './mockup';
import { Box, Typography } from '@mui/material';
import './index.css';
import { BasicLineChart } from './Graph';
import { getAdminData } from '../../../store/actions/adminDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerLoader } from '../../Common';
import SnackBarComponent from '../../Common/SnackBar';

const AdminDashboard = () => {
  const calculateTotalRevenue = () => {
    return chartMockData.map((data) => data.revenue).reduce((total, revenue) => total + revenue, 0);
  };

  const totalRevenue = calculateTotalRevenue();
  const revenuePercent = ((totalRevenue / adminDashboardMock.total_revenue) * 100).toFixed(2);

  const dispatch = useDispatch();
  const adminDataSelector = useSelector((state: any) => state?.adminDashboard);
  const { loading, adminData = {}, error } = adminDataSelector;
  const { results = {} } = adminData;
  useEffect(() => {
    if (adminData && Object.keys(results)?.length === 0) {
      dispatch(getAdminData({}));
    }
  }, []);

  return loading ? (
    <SpinnerLoader />
  ) : (
    <Box className="admin-dashboard--main-container">
      <Box display={'flex'} columnGap={'24px'}>
        <Box className="admin-dashboard--top-boxes">
          <Typography variant="h1">{results?.total_jobs || 0}</Typography>
          <Typography variant="body1" color={'rgba(0, 0, 0, 0.60)'}>
            Jobs
          </Typography>
        </Box>
        <Box className="admin-dashboard--top-boxes">
          <Typography variant="h1">{results?.total_coders || 0}</Typography>
          <Typography variant="body1" color={'rgba(0, 0, 0, 0.60)'}>
            {' '}
            Coders
          </Typography>
        </Box>
        <Box className="admin-dashboard--top-boxes">
          <Typography variant="h1">{results?.total_clients || 0}</Typography>
          <Typography variant="body1" color={'rgba(0, 0, 0, 0.60)'}>
            {' '}
            Clients
          </Typography>
        </Box>
      </Box>
      <Box className="admin-dashboard--graph-container">
        <Box display={'flex'} justifyContent={'space-between'}>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            marginBottom={'22px'}>
            <Typography variant="subtitle1">Total Revenue</Typography>
            <Typography marginLeft={'16px'} variant="subtitle2" color={'#14A800'}>
              {`+ ${results?.total_revenue || 0}`}
            </Typography>
            <Typography marginLeft={'8px'} variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
              {`(${revenuePercent} %)`}
            </Typography>
          </Box>
        </Box>
        <Box>
          <BasicLineChart />
        </Box>
      </Box>
      {error && <SnackBarComponent isOpen={error} message={error} messageType="error" />}
    </Box>
  );
};

export default AdminDashboard;
