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
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import data from '../data.json';

const Certifications = () => {
  const { certifications } = data;

  return (
    <>
      <Card variant="outlined" sx={{ mt: 2 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}
            color="text.secondary"
            gutterBottom>
            Certifications
          </Typography>

          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {certifications.map((certificate, i) => {
              return (
                <ListItem key={`${certificate}--${i}`}>
                  <ListItemAvatar sx={{ width: 80, height: 80, mr: 2 }}>
                    <Avatar variant="square" sx={{ width: 80, height: 80 }}>
                      <ReceiptLongIcon sx={{ width: 80, height: 80 }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="body1" component="div" fontWeight={600} fontSize="14px">
                        {`${certificate.title}`}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          component="div"
                          variant="caption"
                          color="text.secondary"
                          fontWeight={600}
                          mt={1}>
                          {`Provider: ${certificate.provider}`}
                        </Typography>
                        <Typography
                          component="div"
                          variant="caption"
                          color="text.secondary"
                          fontWeight={600}>
                          {`Issued: ${certificate.issueDate}`}
                        </Typography>

                        <Typography
                          component="div"
                          variant="caption"
                          color="text.secondary"
                          fontWeight={700}
                          mt={1}>
                          Show Description
                        </Typography>
                      </>
                    }
                  />
                  <Divider />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </>
  );
};

export default Certifications;
