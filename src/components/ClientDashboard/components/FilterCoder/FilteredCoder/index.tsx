import React from 'react';
import { Card, Avatar, Typography, Box, Grid, Badge, Chip, Button } from '@mui/material';
import './index.css';
import { FavoriteBorderOutlined } from '../../../../../assets/svg/FavoriteBorderOutlined';
import { Flagoutlined } from '../../../../../assets/svg/FlagOutlined';
import { StarOutlined } from '../../../../../assets/svg/StarOutlined';
import { DesktopWindowsOutlined } from '../../../../../assets/svg/DesktopWindowsOutlined';
import { LocationOutlined } from '../../../../../assets/svg/LocationonOutlined';

interface Coder {
  name: string;
  profile: string;
  jobDescription: string;
  rating: number;
  rate: number;
  earned: string;
  location: string;
  isActive: boolean;
  experience: number;
  product: number;
  currently_working: number;
  chats: number;
  client_reviews: number;
  profilePic: string;
  skills: { label: string; id: number }[];
  isFavourite: boolean;
  username: string;
}
interface CoderCardProps {
  coder: Coder;
}

const CoderCard: React.FC<CoderCardProps> = ({ coder }) => {
  return (
    <Card variant="outlined" className="coder-card-filter">
      <Box display={'flex'} flexDirection={'column'} padding={'24px 20px 26px'}>
        <Box>
          <Grid container gap={1}>
            <Grid display={'flex'} item xs={0.6}>
              <Box display={'flex'} alignItems={'center'}>
                {coder.isActive ? (
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    color="success">
                    <Avatar alt="profile pic" src={coder.profilePic} />
                  </Badge>
                ) : (
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    color="default">
                    <Avatar alt="profile pic" src={coder.profilePic} />
                  </Badge>
                )}
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box display={'flex'} flexDirection={'column'} textAlign={'start'}>
                <Typography className="coder_name" columnGap={'4px'}>
                  {coder.name}{' '}
                  <Typography
                    component="span"
                    variant="caption">{`(${coder.profile}) `}</Typography>
                </Typography>
                <Typography
                  className="coder_description"
                  display={'flex'}
                  justifyContent={'flex-start'}>
                  {coder.jobDescription}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <Box display={'flex'} columnGap={'6px'} justifyContent={'flex-end'}>
                <Avatar className="report_fav_icon">
                  <Flagoutlined />
                </Avatar>
                <Avatar className="report_fav_icon">
                  <FavoriteBorderOutlined />
                </Avatar>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="skill_chip">
          {coder.skills.map((skills) => (
            <Chip key={skills.id} label={skills.label} />
          ))}
        </Box>
        <Box display={'flex'}>
          <Box className="coder_details">
            <Typography variant="subtitle2" className="coder_details_staricon">
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pr={'6px'}>
                <StarOutlined />
              </Box>
              {coder.rating}
            </Typography>
            <Typography
              variant="subtitle2"
              className="coder_details_rate">{`$ ${coder.rate} Hourly`}</Typography>
            <Typography
              variant="body2"
              className="coder_details_icon">{`$ ${coder.earned} earned`}</Typography>
            <Typography variant="subtitle2" className="coder_details_icon">
              <DesktopWindowsOutlined />
              {`${coder.experience} years`}
            </Typography>
            <Typography variant="subtitle2" className="coder_details_icon">
              <LocationOutlined />
              {coder.location}
            </Typography>
          </Box>
          <Box display={'flex'} justifyContent={'flex-end'} flex={1}>
            <Button className="chat_now_coder" variant="outlined">
              Chat Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default CoderCard;
