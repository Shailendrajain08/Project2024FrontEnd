import React from 'react';
import { Avatar, Box, Typography, Chip } from '@mui/material';
import './index.css';
import { hiredCoderMockData } from '../Mockup';
import { FavouriteOutlined } from '../../../../../../assets/svg/FavouriteOutlined';
import { MessageOutlined } from '../../../../../../assets/svg/MessageOutlined';
import { LocationOutlined } from '../../../../../../assets/svg/LocationOutlined';

const HiredCoderCard = () => {
  return (
    <>
      {hiredCoderMockData.map((item: any, index: number) => {
        return (
          <Box key={index} className="coder-detail-box">
            <Box className="coder-detail-main-data">
              <Box className="coder-detail-bio-data">
                <Box className="coder-detail-personal-data">
                  <Avatar className="coder-image" alt={item.username} src={item.profile_pic} />

                  <Box className="coder-detail-biodata-list">
                    <Box className="coder-detail-name">
                      <Typography variant="subtitle1">{item.first_name}</Typography>
                      <Typography variant="subtitle1">{item.last_name}</Typography>
                      <Typography className="coder-detail-username" variant="caption">
                        @{item.email.split('@')[0]}
                      </Typography>
                    </Box>
                    <Box className="coder-detail-loc">
                      {item.skill.map((it: any, index: number) => (
                        <Typography
                          className="coder-detail-skill-type"
                          variant="subtitle2"
                          key={index}>
                          {it.skill_type}
                        </Typography>
                      ))}
                      <Box className="coder-detail-loc-container coder-detail-location">
                        {' '}
                        <LocationOutlined />
                        <Typography variant="subtitle2">{item.country}</Typography>
                      </Box>
                    </Box>
                    <Box className="coder-detail-desig">
                      <Typography variant="body2">{item.identity}</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className="coder-detail-budget">
                  <Typography variant="body2">${item.hourly_rate.toFixed(2)} </Typography>
                  <Typography className="coder-detail-time-notation" variant="body2">
                    /hr
                  </Typography>
                </Box>
              </Box>

              <Box className="coder-detail-like-comment">
                <Avatar className="coder-detail-avatar-box">
                  <FavouriteOutlined />
                </Avatar>
                <Avatar className="coder-detail-avatar-box">
                  <MessageOutlined />
                </Avatar>
              </Box>
            </Box>
            <Box className="coder-detail-desc-hire">
              <Box className="coder-detail-desc">
                <Typography className="description-content" variant="body2">
                  {item.bio}
                </Typography>
              </Box>
              <Box>
                <Chip className="coder-detail-hired-label" label="Hired" />
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default HiredCoderCard;
