import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { ICardContent } from '../type';

const CardContent = ({ name, value, isBorder = true, textAlign = 'start' }: ICardContent) => {
  return (
    <Grid
      container
      p={1}
      className={` card-content ${isBorder ? 'card-content--border-bottom' : ''}`}
      paddingTop={2}
      justifyContent={'center'}>
      {name && (
        <Grid item xs={4}>
          <Typography variant="subtitle2" textAlign={'start'}>
            {name}
          </Typography>
        </Grid>
      )}
      <Grid item xs={8} textAlign={textAlign}>
        <Typography variant="subtitle2">{value}</Typography>
      </Grid>
    </Grid>
  );
};

export default CardContent;
