import React, { Fragment } from 'react';
import { Grid, Typography } from '@mui/material';
import { getTotalMilestoneAmount } from '../../../../utils';
import './index.css';

const MileStoneDetail: React.FC<TMilestones> = ({ milestones }) => {
  return (
    <Fragment>
      <Grid container className="mile-stone--heading-box">
        <Grid item xs={4} textAlign={'start'}>
          {' '}
          <Typography variant="subtitle2">Milestone</Typography>
        </Grid>
        <Grid item xs={4}>
          {' '}
          <Typography variant="subtitle2">Time</Typography>
        </Grid>
        <Grid item xs={4} textAlign={'end'}>
          {' '}
          <Typography variant="subtitle2">Milestone Amount</Typography>
        </Grid>
      </Grid>
      {milestones?.length > 0 &&
        milestones.map((data: any, i: number) => {
          return (
            <Grid container className="mile-stone--data-box" key={i}>
              <Grid item xs={4} textAlign={'start'}>
                {' '}
                <Typography variant="body2">{data.milestone}</Typography>
              </Grid>
              <Grid item xs={4}>
                {' '}
                <Typography variant="body2" marginLeft={2.5}>
                  {`${data.time} days`}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                {' '}
                <Typography variant="body2" marginLeft={4}>
                  {`$${data.amount}`}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      <Grid container className="mile-stone--total-cost-box">
        <Grid item xs={8} textAlign={'start'}>
          {' '}
          <Typography variant="subtitle2">Total Project Cost:</Typography>
        </Grid>
        <Grid item xs={4}>
          {' '}
          <Typography variant="subtitle2" marginLeft={4}>
            {`$${getTotalMilestoneAmount(milestones)}`}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MileStoneDetail;
