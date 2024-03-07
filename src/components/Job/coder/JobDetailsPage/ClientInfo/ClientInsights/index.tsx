import { Box, Typography } from '@mui/material';
import React from 'react';
import { formatDate } from '../../../../../../helper/utils';

interface ClientInsightsProps {
  clientInfo: {
    noOfJobs: number;
    moneySpent: number;
    noOfHires: number;
    activeHires: number;
    avgHourlyPaidRate: number;
    totalHours: number;
    sizeOfCompany: string;
    employeesRange: string;
    memberSince: string;
  };
}

const ClientInsights: React.FC<ClientInsightsProps> = ({ clientInfo }: any) => {
  const newDate = new Date(clientInfo?.date_joined);
  const formattedDate = formatDate(newDate);
  return (
    <React.Fragment>
      {clientInfo && (
        <>
          <Box mt={'12px'}>
            <Typography variant="body1">{`${clientInfo.job_posted ?? 0} job posted`}</Typography>
            <Box mt={'12px'}>
              <Typography variant="subtitle1">{`$ ${
                clientInfo.total_spent ?? 0
              } total spent`}</Typography>
              <Typography color={'rgba(0, 0, 0, 0.6)'} variant="body2" position={'relative'}>
                {`${clientInfo.count_of_hired_coders ?? 0} hires `}
                {`${clientInfo.count_of_active_projects ?? 1} active`}
              </Typography>
            </Box>
            <Box mt={'12px'}>
              <Typography variant="subtitle1" fontSize={'16px'} fontWeight={500}>
                {`$ ${clientInfo.average_hourly_rate ?? 0} /hr avg hourly rate paid`}
              </Typography>
              <Typography variant="body2" className="rating-desc">
                {`$ ${clientInfo.totalHours ?? 10} hours`}
              </Typography>
            </Box>
            {clientInfo?.company_size && (
              <Typography mt={'12px'} variant="body2" className="rating-desc">
                {`${clientInfo?.company_size ?? '10'}  company (${
                  clientInfo?.employeesRange ?? '99'
                } people)`}
              </Typography>
            )}
            <Typography mt={'12px'} variant="body2" className="rating-desc">
              {`Member since ${formattedDate ?? '2023-11-15T19:22:48Z'}`}
            </Typography>
          </Box>
        </>
      )}
    </React.Fragment>
  );
};

export default ClientInsights;
