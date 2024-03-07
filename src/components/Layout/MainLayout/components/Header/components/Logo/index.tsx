import React from 'react';
import { Box, Typography } from '@mui/material';
import { LogoSvg } from '../../../../../../../assets/svg';
import './index.css';
import { Link } from 'react-router-dom';

const LogoBox: React.FC = () => {
  return (
    <Box className="logo-box">
      <Link to="/">
        <Box width={1}>
          <LogoSvg />
          <Typography component="p" className="logo-subText">
            Video chat & Remote Coder OnDemand
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default LogoBox;
