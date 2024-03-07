import { Box, Card, Typography, Chip, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { Fragment } from 'react';
import './index.css';
import { StarIconSvg } from '../../../../assets/svg';

const CoderCard: React.FC<any> = ({
  first_name,
  last_name,
  coderskillexperience = {},
  hourly_rate = 60,
  rating = 4.3
}) => {
  const { skills = [], identity, profile_picture } = coderskillexperience || {};
  return (
    <Fragment>
      <Card className="recommended-coder--card">
        <Box position="relative">
          <Box className="client-recommended-coder--img-box">
            {' '}
            <img
              src={profile_picture ? profile_picture : 'images/png/coder.png'}
              alt={`${first_name}-profile-pic`}
            />
          </Box>
          <Box className="favorite-icon-box">
            <FavoriteBorderIcon />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box className="coder-role-box">
            <Typography variant="subtitle1">{`${first_name} ${last_name}`}</Typography>
            <Typography variant="caption" className="caption-text">
              {identity}
            </Typography>
          </Box>
          <Box pt={1}>
            <Box>
              {hourly_rate && <Typography variant="body2">{`$ ${hourly_rate}/hr`}</Typography>}
            </Box>
            <Box
              display="inline-flex"
              gap={0.5}
              alignItems="center"
              justifyContent="flex-start"
              className="star-icon--box">
              <StarIconSvg />
              <Typography variant="caption" color={'rgba(0, 0, 0, 0.38)'}>
                {rating}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box textAlign="start" mt={'10px'}>
          {skills &&
            skills.length > 0 &&
            skills.map((skill: any, i: number) => (
              <Chip className="skill-chip" key={i} label={skill?.technology?.name} />
            ))}
        </Box>
        <Box className="chat-btn-box">
          <Button variant="outlined">Chat Now</Button>
        </Box>
      </Card>
    </Fragment>
  );
};

export default CoderCard;
