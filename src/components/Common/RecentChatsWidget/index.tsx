import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './index.css';

const RecentChats = ({ recentChats }: any) => {
  const renderCoders = () => {
    return recentChats.map((chat: any) => {
      return (
        <>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}></Box>
          <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
            <Grid item xs={3}>
              <Avatar alt={chat.name} src={chat.profilePic} sx={{ width: 68, height: 68, ml: 2 }} />
              <Typography sx={{ fontSize: 14, ml: 1, width: '100%' }} color={'primary'}>
                <LocationOnIcon
                  color={'primary'}
                  sx={{ top: '5px', fontSize: 18, position: 'relative' }}
                />
                {chat.location}
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ ml: 1 }}>
              <Typography sx={{ fontSize: 12, textAlign: 'justify' }}>
                {chat.name} - {chat.chatText.substr(0, 160)}
              </Typography>
              <Typography sx={{ fontSize: 10, textAlign: 'left', mt: 2 }}>
                {`${chat.duration} hour ago`}
              </Typography>
            </Grid>
          </Grid>
        </>
      );
    });
  };

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography
            sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}
            color="text.secondary"
            gutterBottom>
            Recent Chat
          </Typography>
          {renderCoders()}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default RecentChats;
