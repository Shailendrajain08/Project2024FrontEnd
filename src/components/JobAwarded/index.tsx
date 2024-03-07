import { Card, Grid, Typography } from '@mui/material';
import data from './mockData.json';

import JobAwardAction from './JobAwardAction';
import JobAwardDetails from './JobAwardDetails';
import JobAwardSkills from './JobAwardSkills';
import JobAwardClientDetails from './JobAwardClientDetails';
const JobAwarded = () => {
  return (
    <Grid container spacing={2} textAlign={'start'} sx={{ mb: 3 }}>
      <Grid item xs={8}>
        <Card sx={{ m: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign={'end'}>
              <JobAwardAction />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>{data?.title}</Typography>
            </Grid>
            <JobAwardDetails details={data?.details} />
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Typography>{data?.description}</Typography>
            </Grid>
            <JobAwardSkills skills={data?.skills} />
            <Grid item xs={12} textAlign={'end'}>
              <JobAwardAction />
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <JobAwardClientDetails />
      </Grid>
    </Grid>
  );
};

export default JobAwarded;
