import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Chip } from '@mui/material';
import FixedPrice from './FixedPricePage';
import CoderDetail from './CoderDetailPage';
import DetailPage from './JobDetailPage';
import { DetailHeader, CoderHeader, PaymentHeader } from './JobDetailHeaders';
import './index.css';
import PaymentDetailsPage from './PaymentDetailPage';
import PaymentsPage from './PaymentsPage';
import { JobStatus } from '../../../../constants/job';
import { useJobDetails } from './UseJobDetails';

const JobDetailTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [status, setStatus] = useState<string>('');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const renderHeader = () => {
    switch (activeTab) {
      case 0:
        return <DetailHeader setStatus={setStatus} />;

      case 1:
        return <CoderHeader />;
      case 2:
        return <PaymentHeader />;
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <DetailPage />;

      case 1:
        if (status !== JobStatus.COMPLETED) {
          return <CoderDetail status={status} />;
        } else {
          return <PaymentsPage />;
        }

      case 2:
        if (status !== JobStatus.COMPLETED) {
          return <FixedPrice status={status} />;
        } else {
          return <PaymentDetailsPage />;
        }

      default:
        return null;
    }
  };

  return (
    <>
      <Box>{renderHeader()}</Box>
      <Box className="job-detail-tab-box">
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab className="job-detail-tab-style" label="Details" />
          <Tab className="job-detail-tab-style" label="Coders" />
          <Tab className="job-detail-tab-style" label="Payments" />
        </Tabs>
      </Box>
      <Box>{renderTabContent()}</Box>
    </>
  );
};

export default JobDetailTabs;
