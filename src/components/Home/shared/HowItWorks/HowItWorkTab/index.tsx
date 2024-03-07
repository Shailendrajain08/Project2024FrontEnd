import React from 'react';
import { Box, Typography } from '@mui/material';
import './index.css';

const HowItWorkTab: React.FC<any> = ({
  isShowClassName,
  svgIcon,
  title,
  subTitle,
  subTitleClassName
}) => {
  return (
    <Box className="hc-how-it-work-tabs--box transition600">
      <Box className="hc-how-it-work-tabs--svg-box">{svgIcon}</Box>
      <Box display={'flex'} flexDirection={'column'} textAlign={'start'}>
        <Typography
          variant="h3"
          className="how-it-works-tab--title"
          color={isShowClassName ? '#14A800' : '#131313'}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          className={`how-it-works-tab--sub-title opacity--6 ${subTitleClassName}`}>
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default HowItWorkTab;
