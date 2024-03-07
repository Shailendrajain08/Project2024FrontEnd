import React from 'react';
import { Card, Box, Typography, Chip, Button } from '@mui/material';
import './index.css';

const RecommendedJobs: React.FC<any> = ({ recommendedJobs = [] }) => {
  return (
    <Box display={'flex'} columnGap={'12px'}>
      {recommendedJobs.map((job: any) => {
        return (
          <Box key={job.id} zIndex={123} height={'273px'}>
            <Card className="recommended-jobs--card">
              <Box display={'flex'} columnGap={'6px'} textAlign={'start'} width={1}>
                <Box className="home-rjc--img-box">
                  <img src={job.compay_logo} alt="client logo" />
                </Box>
                <Box textAlign={'start'}>
                  <Typography className="recommended-jobs--client-name">
                    {job?.company_name}
                  </Typography>
                  <Typography className="recommended-jobs--title">{job?.title}</Typography>
                </Box>
              </Box>
              <Box textAlign={'start'} width={1} mt={'10px'}>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Typography className="recommended-jobs--text-title">Budget</Typography>
                  <Typography className="recommended-jobs--text-value">:</Typography>
                  <Typography className="recommended-jobs--text-value w-66" textAlign={'end'}>
                    {`$${job?.maximum_budget}`}
                  </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Typography className="recommended-jobs--text-title">
                    Preferred Time zone
                  </Typography>
                  <Typography className="recommended-jobs--text-value">:</Typography>
                  <Typography className="recommended-jobs--text-value w-66" textAlign={'end'}>
                    EST
                  </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Typography className="recommended-jobs--text-title">Expertise Level</Typography>
                  <Typography className="recommended-jobs--text-value">:</Typography>
                  <Typography className="recommended-jobs--text-value w-66" textAlign={'end'}>
                    {job?.expertise[0]}
                  </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Typography className="recommended-jobs--text-title">
                    Expected Duration
                  </Typography>
                  <Typography className="recommended-jobs--text-value">:</Typography>
                  <Typography className="recommended-jobs--text-value w-66" textAlign={'end'}>
                    {job?.duration}
                  </Typography>
                </Box>
              </Box>
              <Box textAlign={'start'} mt={'10px'}>
                <Typography variant="body2" className="recommended-jobs--description">
                  Full Stack Development is a software profession/stream where a developer Frontend
                  product.
                </Typography>
              </Box>
              <Box
                width={1}
                mt={'10px'}
                display={'flex'}
                columnGap={'10px'}
                alignItems={'center'}
                justifyContent={'start'}>
                {job.skills.map((skill: any, i: number) => {
                  return <Chip key={i} label={skill} className="recommended-jobs--skill" />;
                })}
              </Box>
              <Box textAlign={'start'} mt={'10px'} width={1}>
                <Button variant="contained" className="recommended-jobs--btn">
                  Apply Now
                </Button>
              </Box>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
};

export default RecommendedJobs;
