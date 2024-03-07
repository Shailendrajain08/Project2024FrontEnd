import React from 'react';
import { Box } from '@mui/material';
import CoderDetailCard from '../../shared/CoderDetailCard';

const RecentChat: React.FC = () => {
  return (
    <Box>
      <CoderDetailCard />
      <CoderDetailCard />
      <CoderDetailCard />
    </Box>
  );
};

export default RecentChat;
