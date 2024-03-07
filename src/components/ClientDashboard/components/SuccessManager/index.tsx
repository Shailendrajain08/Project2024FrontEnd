import React from 'react';
import { Box, Typography } from '@mui/material';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import './index.css';

const SuccessManager: React.FC<any> = ({ profile, name, phone, email }) => {
  return (
    <Box className="success-manager--box">
      <Typography variant="body1" className="success-manager--subtitle-text">
        {'Hire coder within hours'}
      </Typography>
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Box display="flex" columnGap={1} alignItems="center">
          <img src={profile} alt="success manager profile pic" />
          <Typography variant="body1">{name}</Typography>
        </Box>
        <Box>
          <Box display="flex" columnGap={1}>
            <CallOutlinedIcon />
            <Typography variant="body2">{phone}</Typography>
          </Box>
          <Box display="flex" columnGap={1}>
            <MailOutlinedIcon />
            <Typography variant="body2">{email}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessManager;
