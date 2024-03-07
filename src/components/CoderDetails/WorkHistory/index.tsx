import React from 'react';
import { Box, Card, IconButton, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ReviewCard from './ReviewCard';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import data from '../data.json';

const WorkHistory = () => {
  const reviews = data.reviews;

  return (
    <Card variant="outlined" sx={{ width: '100%', typography: 'body1', p: 3, pt: 2 }}>
      <Typography
        sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}
        color="text.secondary"
        gutterBottom>
        Work History
        <IconButton
          size="small"
          sx={{ border: '1px solid #D6E1D6', mx: 1 }}
          color="primary"
          aria-label="add to shopping cart">
          <MoreHorizIcon fontSize="inherit" />
        </IconButton>
      </Typography>

      <TabContext value={'1'}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList aria-label="lab API tabs example">
            <Tab label="Completed Jobs" value={'1'} />
          </TabList>
        </Box>
        <TabPanel sx={{ padding: 0 }} value={'1'}>
          {reviews.map((review) => {
            return <ReviewCard key={review.id} review={review} />;
          })}
        </TabPanel>
      </TabContext>
    </Card>
  );
};

export default WorkHistory;
