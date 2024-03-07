import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import data from '../data.json';

const Portfolio = () => {
  return (
    <>
      <Card variant="outlined" sx={{}}>
        <CardContent>
          <Typography
            sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}
            color="text.secondary"
            gutterBottom>
            Portfolio
          </Typography>

          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar sx={{ width: 60, height: 60, mr: 2 }}>
                <Avatar variant="square" sx={{ width: 60, height: 60, borderRadius: '8px' }}>
                  <LinkedInIcon sx={{ width: 60, height: 60 }} />
                </Avatar>
                <Typography component="div" align="center" mt={0.5} variant="caption" color="blue">
                  LinkedIn
                </Typography>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="body1" component="div" fontWeight={600} fontSize="14px">
                    Visit my LinkedIn
                  </Typography>
                }
              />
              <Divider />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default Portfolio;
