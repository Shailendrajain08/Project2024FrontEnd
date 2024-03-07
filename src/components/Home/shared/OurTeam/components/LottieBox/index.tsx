import React from 'react';
import Lottie from 'lottie-react';
import { Box, Typography } from '@mui/material';
import './index.css';

const LottieBox: React.FC<any> = ({ animationData, title, subTitle1, subtitle2 }) => {
  return (
    <Box className="home-lottie-box--build-box">
      <Box className="home-lottie-box--build-icon-box">
        <Box className="home-lottie-box--build-icon">
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        </Box>
      </Box>
      <Box>
        <Typography variant="h3" className="home-lottie-box-heading-text" mb={'10px'}>
          {title}
        </Typography>
        <Typography variant="body1" className="home-lottie-box-sub-heading--text">
          {subTitle1} <br className="" />
          {subtitle2}
        </Typography>
      </Box>
    </Box>
  );
};

export default LottieBox;
