import React from 'react';
import { Box, Alert, IconButton, Collapse, AlertTitle, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './index.css';

const WelcomeCoderAlerts: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Box className="welcome-coder-alert">
      <Collapse in={open}>
        <Alert
          icon={false}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
          <AlertTitle className="welcome-coder-alert--title"> Welcome, Brittany White!</AlertTitle>
          <Typography variant="body2">
            Hope you are having a great time working at HireCoder
          </Typography>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default WelcomeCoderAlerts;
