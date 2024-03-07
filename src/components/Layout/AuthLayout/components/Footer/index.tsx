import React from 'react';
import { Box, Typography, List, Container } from '@mui/material';

import './index.css';

const Footer: React.FC<any> = () => {
  return (
    <Box className="footer-auth--box">
      <Box className="footer-auth--container">
        <Box>
          <Typography component="p" className="footer-auth--text">
            Copyright © 2023 HireCoder, All Rights Reserved.
          </Typography>
        </Box>
        <Box display={'flex'} columnGap={4}>
          <Typography component="p" className="footer-auth--text">
            Terms and Conditions
          </Typography>
          <Typography component="p" className="footer-auth--text">
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
