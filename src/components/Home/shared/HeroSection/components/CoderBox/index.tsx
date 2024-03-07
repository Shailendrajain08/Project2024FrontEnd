import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { LocationIcon } from '../../../../../../assets/svg/LocationIcon';
import './index.css';

const CoderBox: React.FC<any> = ({ imageUrl, name, className, altText }) => {
  return (
    <Box
      display={'flex'}
      zIndex={1}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      position={'absolute'}
      className={`${className} trased_user_box`}>
      <Box className="coder-box--tooltip-box">
        <Box className="coder-box--tooltip-content">
          <Typography variant="body1">{name}</Typography>
        </Box>
      </Box>
      <Box className="coder-box--svg-box">
        <LocationIcon />
      </Box>
      <img src={imageUrl} alt={altText} />
    </Box>
  );
};

export default CoderBox;
