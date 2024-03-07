import React from 'react';
import { Box, Typography } from '@mui/material';
import './index.css';
import portfolio from '../../../../../assets/images/Slide_16_9.png';

const Portfolio = () => {
  return (
    <Box>
      <Typography fontSize={20} mb={1.6} fontWeight={500}>
        Portfolio
      </Typography>
      <img src={portfolio} alt="image" />
      <Typography variant="body1" mt={2} mb={0.8}>
        The landing page : Sea code
      </Typography>
      <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
        premium website design
      </Typography>
    </Box>
  );
};

export default Portfolio;
