import { Box, Link, Typography, Card } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './index.css';
import React from 'react';

const CoderDetail: React.FC<any> = ({
  profile_pic,
  first_name,
  last_name,
  total_years_of_experience,
  country,
  linkedin_url,
  github_url,
  stackoverflow_url,
  bio
}) => {
  const name = `${first_name} ${last_name ? last_name : ''}`;
  return (
    <Card>
      <Box className="coder-detail--heading-box">
        {' '}
        <Typography variant="h3">Know your Coder</Typography>
      </Box>
      <Box className="coder-detail--body-box">
        <Box display={'flex'} columnGap={1.75} alignItems={'center'}>
          <Box className="coder-detail--img">
            {profile_pic ? (
              <img src={profile_pic} alt={`${name} picture`} />
            ) : (
              <AccountCircleIcon />
            )}
          </Box>
          <Box>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="body2">{country}</Typography>
          </Box>
        </Box>
        <Typography variant="body2" mt={0.5}>
          {bio}
        </Typography>
        {total_years_of_experience && (
          <Typography
            variant="subtitle1"
            mt={1.5}>{`Experience : ${total_years_of_experience} Years`}</Typography>
        )}
        {linkedin_url && (
          <Box display={'flex'} columnGap={0.5} alignItems={'center'} overflow={'hidden'} mt={1.75}>
            <Box>
              {' '}
              <Typography variant="subtitle1">{'Linkedin'}</Typography>
            </Box>
            <Box>:</Box>
            <Box>
              <Typography variant="subtitle1">
                <Link className="coder-detail--link-text">{linkedin_url}</Link>
              </Typography>
            </Box>
          </Box>
        )}
        {github_url && (
          <Box display={'flex'} columnGap={0.5} alignItems={'center'} overflow={'hidden'} mt={1.75}>
            <Box>
              <Typography variant="subtitle1">{'Github'}</Typography>
            </Box>
            <Box>:</Box>
            <Box>
              <Typography variant="subtitle1">
                <Link className="coder-detail--link-text">{github_url}</Link>
              </Typography>
            </Box>
          </Box>
        )}
        {stackoverflow_url && (
          <Box display={'flex'} columnGap={0.5} alignItems={'center'} overflow={'hidden'} mt={1.75}>
            <Box>
              <Typography variant="subtitle1">{'Stackoverflow'}</Typography>
            </Box>
            <Box>:</Box>
            <Box>
              {' '}
              <Typography variant="subtitle1">
                <Link className="coder-detail--link-text">{stackoverflow_url}</Link>
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default CoderDetail;
