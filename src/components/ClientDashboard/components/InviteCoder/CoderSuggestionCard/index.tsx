import React, { useState } from 'react';
import { Card, Avatar, Typography, Box, Grid, Badge, Chip, Button, Checkbox } from '@mui/material';
import './index.css';
import { FavoriteBorderOutlined } from '../../../../../assets/svg/FavoriteBorderOutlined';
import { StarOutlined } from '../../../../../assets/svg/StarOutlined';
import { DesktopWindowsOutlined } from '../../../../../assets/svg/DesktopWindowsOutlined';
import { LocationOutlined } from '../../../../../assets/svg/LocationonOutlined';
import { PersonalAddAltOutlined } from '../../../../../assets/svg/PersonAddAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

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
  invite: boolean;
  onCheckboxChange: (username: string, isChecked: boolean) => void;
  selecteduser: string[];
}

const CoderSuggestionCard: React.FC<CoderCardProps> = ({
  coder,
  invite,
  onCheckboxChange,
  selecteduser
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCheckboxChange(coder.username, !isChecked);
  };
  return (
    <Card variant="outlined" className={isChecked ? 'coder-card-select' : 'coder-card'}>
      <Box display={'flex'} flexDirection={'column'}>
        <Box>
          <Grid container>
            <Grid display={'flex'} item xs={0.8}>
              <Box display={'flex'} alignItems={'center'} mr={'14px'}>
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
            <Grid item xs={10.2}>
              <Box display={'flex'} flexDirection={'column'}>
                <Typography
                  className="coder_name"
                  display={'flex'}
                  justifyContent={'flex-start'}
                  columnGap={'4px'}>
                  {coder.name}{' '}
                  <Typography
                    display={'flex'}
                    alignItems={'end'}
                    component="span"
                    variant="caption"
                    className="coder_description">{`(${coder.profile}) `}</Typography>
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
                  <PersonalAddAltOutlined />
                </Avatar>
                <Avatar className="report_fav_icon">
                  <FavoriteBorderOutlined />
                </Avatar>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
          <Box display={'flex'} flexDirection={'column'}>
            <Box className="skill_chip">
              {coder.skills.map((skills) => (
                <Chip key={skills.id} label={skills.label} />
              ))}
            </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            {invite && <Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
          </Box>
        </Box>

        <Box display={'flex'}>
          <Box className="coder_details">
            <Typography className="coder_details_staricon">
              <Box pr={'6px'}>
                <StarOutlined />
              </Box>
              {coder.rating}
            </Typography>
            <Typography className="coder_details_rate">{`$ ${coder.rate} Hourly`}</Typography>
            <Typography className="coder_details_icon">{`$ ${coder.earned} earned`}</Typography>
            <Typography className="coder_details_icon">
              <DesktopWindowsOutlined />
              {`${coder.experience} years`}
            </Typography>
            <Typography className="coder_details_icon">
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

export default CoderSuggestionCard;
