import React from 'react';
import { Box, Typography } from '@mui/material';
import './index.css';

const JobManagerCard: React.FC<any> = ({
  imgUrl,
  imgALtText,
  name,
  skill,
  cmpImgUrl,
  cmpImgALtText,
  className,
  positionValue = ''
}) => {
  return (
    <Box
      position={positionValue}
      bgcolor={'white'}
      className={`home-job-manager--card ${className}`}>
      <img className="home-job-manager-card--img" src={imgUrl} alt={imgALtText} />
      <Box p={'15px'} textAlign={'start'}>
        <Typography variant="h3" fontWeight={600} lineHeight={'24px'}>
          {name}
        </Typography>
        <Box display={'flex'} alignItems={'center'} columnGap={1.5} pt={1}>
          <img className="calender_icon" src="images/svg/calander_icon.svg" alt="calander" />
          <Typography variant="body1" className="opacity--6" color={'#111111'}>
            {skill}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          className="opacity--6"
          color={'#111111'}
          fontSize={'12px'}
          pt={'18px'}
          pb={'1px'}>
          Previously at
        </Typography>
        <img className="goldman_icon" src={cmpImgUrl} alt={cmpImgALtText} />
      </Box>
    </Box>
  );
};

export default JobManagerCard;
