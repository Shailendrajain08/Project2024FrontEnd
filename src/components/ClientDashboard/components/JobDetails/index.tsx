import React from 'react';
import JobDetailTabs from './JobDetailTabs';
import { Box } from '@mui/material';
import './index.css';

const JobDetails = () => {
  return (
    <>
      <Box className="job--details--main--container">
        <JobDetailTabs />
      </Box>
    </>
  );
};

export default JobDetails;
