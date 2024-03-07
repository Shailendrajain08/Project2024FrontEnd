import React from 'react';
import { Box, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import './index.css';

const CoderDetailCard: React.FC<any> = ({
  first_name = 'Test',
  last_name = 'Team',
  description = 'Lorem ipsum dolor sit amet, consecte amet,.',
  location = 'USA',
  postedTime = 1,
  isLastCard = false
}) => {
  return (
    <Box className={isLastCard ? 'coder-detail-last-box' : 'coder-detail-box'}>
      <Box className="client-dashboard--cdc-box">
        <img src="/images/png/co_worker_1.png" alt="profile pic" />
      </Box>
      <Box textAlign="start">
        <Typography variant="subtitle2">{`${first_name} ${last_name}`}</Typography>
        <Typography variant="body2" color={'rgba(0, 0, 0, 0.56)'}>
          {description}
        </Typography>
        <Box display="flex" columnGap={'6px'} className="icon-container">
          <Box className="icon-container--box">
            <LocationOnOutlinedIcon />
            <Typography variant="subtitle2">{location}</Typography>
          </Box>
          <Box className="icon-container--box">
            <TimerOutlinedIcon />
            <Typography variant="subtitle2">{`${postedTime} hour ago`}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoderDetailCard;
