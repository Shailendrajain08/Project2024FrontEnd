import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import data from '../data.json';

const Summary = () => {
  const { profileSummary } = data;

  return (
    <Card variant="outlined" sx={{ mb: 2, textAlign: 'left' }}>
      <CardHeader
        action={
          <Box>
            <Typography variant="body1" mr={2} fontWeight={700} component="span">
              {`$${profileSummary.rate}/hour`}
            </Typography>
            <IconButton sx={{ border: '1px solid #D6E1D6' }} aria-label="settings">
              <LinkOutlinedIcon sx={{ color: '#1E910F' }} />
            </IconButton>
          </Box>
        }
        title={
          <>
            <Typography variant="h6" fontWeight={700}>
              {profileSummary.designation}
            </Typography>
          </>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {profileSummary.description}
        </Typography>
        <Box>
          <Button
            variant="text"
            sx={{ textTransform: 'capitalize', pl: 0, mt: 2 }}
            endIcon={<DownloadForOfflineOutlinedIcon />}>
            Download Resume
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Summary;
