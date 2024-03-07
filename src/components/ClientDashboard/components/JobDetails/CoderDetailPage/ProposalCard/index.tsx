import React from 'react';
import { Avatar, Box, Typography, Chip, Button } from '@mui/material';
import './index.css';
import { coderProposalMockData } from '../Mockup';
import { proposalMockData } from '../Mockup';
import { FavouriteOutlined } from '../../../../../../assets/svg/FavouriteOutlined';
import { MessageOutlined } from '../../../../../../assets/svg/MessageOutlined';
import { LocationOutlined } from '../../../../../../assets/svg/LocationOutlined';
import { BlueTick } from '../../../../../../assets/svg/BlueTick';

const ProposalCard = () => {
  return (
    <>
      {coderProposalMockData.map((item: any, index) => {
        return (
          <>
            <Box key={index} className="proposal-detail-box">
              <Box className="proposal-detail-main-data">
                <Box className="proposal-detail-bio-data">
                  <Box className="proposal-detail-personal-data">
                    <Avatar className="proposal-image" alt={item.username} src={item.profile_pic} />

                    <Box className="proposal-detail-biodata-list">
                      <Box className="proposal-detail-name">
                        <Typography variant="subtitle1">{item.first_name}</Typography>
                        <Typography variant="subtitle1">{item.last_name}</Typography>
                        <Typography className="proposal-detail-username" variant="caption">
                          @{item.email.split('@')[0]}
                        </Typography>
                        <BlueTick />
                        <Box>
                          <Chip className="proposal-detail-rec" label="Recommended" />
                        </Box>
                      </Box>
                      <Box className="proposal-detail-loc">
                        {item.skill.map((it: any, index: any) => (
                          <Typography
                            className="proposal-detail-skill-type"
                            variant="subtitle2"
                            key={index}>
                            {it.skill_type}
                          </Typography>
                        ))}
                        <Box className="proposal-detail-loc-container proposal-detail-location">
                          {' '}
                          <LocationOutlined />
                          <Typography variant="subtitle2">{item.country}</Typography>
                        </Box>
                      </Box>
                      <Box className="proposal-detail-desig">
                        <Typography variant="body2">{item.identity}</Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box className="coder-detail-budget">
                    <Typography variant="body2">${item.hourly_rate.toFixed(2)}</Typography>
                    <Typography className="coder-detail-time-notation" variant="body2">
                      /hr
                    </Typography>
                  </Box>
                </Box>
                <Box className="proposal-detail-like-comment">
                  <Avatar className="proposal-detail-avatar-box">
                    <FavouriteOutlined />
                  </Avatar>
                  <Avatar className="proposal-detail-avatar-box">
                    <MessageOutlined />
                  </Avatar>
                </Box>
              </Box>
              <Box className="proposal-detail-desc-hire">
                <Box className="proposal-detail-desc">
                  <Typography className="description-content" variant="body2">
                    {item.bio}
                  </Typography>
                </Box>
                <Box className="proposal-detail-hired-label">
                  <Button size="medium" variant="outlined">
                    HIRE NOW
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        );
      })}
    </>
  );
};

export default ProposalCard;
