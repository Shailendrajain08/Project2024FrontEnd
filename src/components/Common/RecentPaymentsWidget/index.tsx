import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Grid, Link } from '@mui/material';

const RecentPayments = ({ payments }: any) => {
  const renderPayments = () => {
    return payments.map((paymentInfo: any) => {
      return (
        <>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}></Box>
          <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
            <Grid item xs={3}>
              <Avatar
                alt={paymentInfo.coderName}
                src={paymentInfo.profilePic}
                sx={{ width: 75, height: 75, left: '15%' }}
                variant="square"
              />
            </Grid>
            <Grid item xs={5} sx={{ ml: 2 }}>
              <Typography sx={{ fontSize: 15, textAlign: 'left', fontWeight: 'bold' }}>
                {paymentInfo.coderName}
              </Typography>
              <Typography sx={{ fontSize: 13, textAlign: 'left' }}>
                {paymentInfo.description}
              </Typography>
              <Typography sx={{ fontSize: 12, textAlign: 'left' }}>
                {`${paymentInfo.duration} hour ago`}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography sx={{ fontSize: 15, textAlign: 'left', fontWeight: 'bold' }}>
                {`$${paymentInfo.amount}`}
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  textAlign: 'left',
                  color: '#64C34D',
                  fontWeight: 'bold'
                }}>
                {paymentInfo.status}
              </Typography>
            </Grid>
          </Grid>
        </>
      );
    });
  };

  return (
    <React.Fragment>
      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}
            color="text.secondary"
            gutterBottom>
            Recent Payments{' '}
            <Link sx={{ float: 'right' }} href="#" underline="none">
              {'View All'}
            </Link>
          </Typography>

          {renderPayments()}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default RecentPayments;
