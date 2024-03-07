import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';

export default function PersonalDetails() {
  return (
    <>
      <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={6} style={{ textAlign: 'end' }}>
          <Avatar sx={{ width: 156, height: 156 }}></Avatar>
        </Grid>
      </Grid>

      <Grid container spacing={1} direction="row" alignItems="center" justifyContent="center">
        <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left' }}>Name :</Typography>
          <Typography sx={{ fontSize: 17, textAlign: 'left', fontWeight: '900' }}>
            Jack Ryan (username)
          </Typography>
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left' }}>Working as:</Typography>
          <Typography sx={{ fontSize: 17, textAlign: 'left', fontWeight: '900' }}>
            Individual/Agency
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Grid item xs={8}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold' }}>
            Email Address (verified)
          </Typography>
          <Typography sx={{ fontSize: 15, textAlign: 'left' }}>jackryan@gmail.com</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold' }}>
            Phone Number (with country code)
          </Typography>
          <Typography sx={{ fontSize: 15, textAlign: 'left' }}>+918135416869</Typography>
        </Grid>
      </Grid>
    </>
  );
}
