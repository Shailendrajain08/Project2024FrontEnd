import React from 'react';
import { Box, Typography, Avatar, Chip, Button } from '@mui/material';
import './index.css';

const RecommendedCoder: React.FC<any> = ({ recommendedCoders = [], handleChat }) => {
  return (
    <Box display={'flex'} alignItems={'center'} pt={2} columnGap={2}>
      {recommendedCoders.map((coder: any) => {
        const {
          first_name,
          last_name,
          coderskillexperience,
          hourly_rate = 60,
          rating = 4.3
        } = coder;
        return (
          <Box bgcolor={'white'} className="coder_card" key={coder.id}>
            <Box className="hc-rc--coder-img-box">
              <img
                className=""
                src={
                  coderskillexperience?.profile_picture
                    ? coderskillexperience?.profile_picture
                    : 'images/png/coder.png'
                }
                alt={`${first_name}-coder-img`}
              />
            </Box>
            <Box className="home-client-recommended-coder--box-common" pt={'12px'}>
              <Typography variant="h2" className="hc-rc--coder--name">
                {`${first_name} ${last_name}`}
              </Typography>
              <Typography variant="body1" className="hc-rc--coder--hourly-rate">
                {hourly_rate}
              </Typography>
            </Box>
            <Box className="home-client-recommended-coder--box-common" pt={'4px'}>
              <Typography variant="body1" className="hc-rc--coder--role">
                {coderskillexperience?.identity}
              </Typography>
              <Box display={'flex'} alignItems={'center'} columnGap={'4px'}>
                <Avatar
                  className="hc-rc--coder--rating-img"
                  src="images/svg/star.svg"
                  alt="star-img"
                />
                <Typography variant="body1" className="hc-rc--coder--role">
                  {rating}
                </Typography>
              </Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} columnGap={'6px'} pt={'10px'}>
              {coderskillexperience &&
                coderskillexperience?.skills?.map((skill: any) => {
                  return (
                    <Chip
                      key={skill.technology.id}
                      label={skill?.technology?.name}
                      className="hc-rc--coder-skills"
                    />
                  );
                })}
            </Box>
            <Box textAlign={'start'} pt={'16px'}>
              <Button variant="contained" className="hc-rc--coder-chat-btn" onClick={handleChat}>
                Chat Now
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default RecommendedCoder;
