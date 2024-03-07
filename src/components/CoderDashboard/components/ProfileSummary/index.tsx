import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import LinearProgressBar from '../../../Common/LinearProgressBar';
import './index.css';

const ProfileSummary: React.FC<any> = ({
  first_name,
  last_name,
  is_profile_complete,
  profile_completeness_percentage,
  profile_img,
  identity
}) => {
  const name = last_name ? `${first_name} ${last_name}` : first_name;
  return (
    <Card className="profile-summary--card">
      <Box textAlign={'center'} mb={3} width={1}>
        <Box width={1} display={'flex'} justifyContent={'center'}>
          <Box className="coder-profile-summary--img-box">
            <img src={profile_img} alt={`${name} profile pic`} />
          </Box>
        </Box>
        <Typography variant="subtitle1" color={'rgba(0, 0, 0, 0.87)'}>
          {name}
        </Typography>
        <Typography variant="caption" color={'rgba(0, 0, 0, 0.56)'} lineHeight={'19.20px'}>
          {identity}
        </Typography>
      </Box>
      {!is_profile_complete && (
        <Box textAlign={'start'}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={0.75}>
            <Typography variant="body2">{'Complete your profile'}</Typography>
            <Typography
              variant="body2"
              color={'rgba(0, 0, 0, 0.38)'}>{`${profile_completeness_percentage} %`}</Typography>
          </Box>
          <LinearProgressBar percentage={profile_completeness_percentage} />
        </Box>
      )}
    </Card>
  );
};

export default ProfileSummary;
