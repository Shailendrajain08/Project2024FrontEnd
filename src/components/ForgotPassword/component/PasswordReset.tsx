import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { CheckOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const PasswordReset: React.FC = () => {
  const navigate = useNavigate();

  const handleNotRecievedMail = () => {
    navigate('/forgot-password');
  };
  return (
    <Box className="forget-psw-reset-cnt" component="main" maxWidth="xs">
      <Box className="forget-psw-reset-main-box">
        <Box className="forget-paswoord-reset">
          <CheckOutlined />
        </Box>
        <Box pb={'12px'} pt={'12px'}>
          <Typography className="reset-mail-sent" variant="h2">
            Password reset link sent via email.
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
            Check your spam and promotions folder if it doesn’t appear in your main mailbox.
          </Typography>
          <Typography
            mt={'24px'}
            variant="subtitle2"
            color={'#14A800'}
            onClick={handleNotRecievedMail}>
            Didn’t receive the email?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordReset;
