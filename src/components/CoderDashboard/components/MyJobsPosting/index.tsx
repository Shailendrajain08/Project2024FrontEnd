import React from 'react';
import { Grid } from '@mui/material';
import JobCard from '../JobCard';

const MyJobsPosting = ({ jobsPosting }: any) => {
  const renderJobsCard = () => {
    return jobsPosting.map((job: any) => {
      return (
        <Grid item xs={12} key={job.id}>
          <JobCard jobInfo={job}></JobCard>
        </Grid>
      );
    });
  };
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {renderJobsCard()}
      </Grid>
    </React.Fragment>
  );
};
export default MyJobsPosting;
