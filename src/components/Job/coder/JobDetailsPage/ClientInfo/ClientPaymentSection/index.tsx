import { Box, Typography } from '@mui/material';
import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import '../index.css';

const ClientPaymentSection = () => {
  return (
    <React.Fragment>
      <Box display={'flex'} alignItems={'center'} columnGap={'8px'}>
        <VerifiedIcon className="verification-icon"></VerifiedIcon>
        <Typography className="verified-desc">Payment method verified</Typography>
      </Box>
    </React.Fragment>
  );
};

export default ClientPaymentSection;
