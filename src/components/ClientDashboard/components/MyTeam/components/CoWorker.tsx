import React from 'react';
import { Box } from '@mui/material';
import CoderDetailCard from '../../../shared/CoderDetailCard';

const CoWorker: React.FC = () => {
  return (
    <Box>
      <CoderDetailCard />
      <CoderDetailCard />
      <CoderDetailCard isLastCard={true} />
    </Box>
  );
};

export default CoWorker;
