import React from 'react';
import { Box } from '@mui/material';
import CoderDetailCard from '../../../shared/CoderDetailCard';

const Coder: React.FC = () => {
  return (
    <Box>
      <CoderDetailCard />
      <CoderDetailCard isLastCard={true} />
    </Box>
  );
};

export default Coder;
