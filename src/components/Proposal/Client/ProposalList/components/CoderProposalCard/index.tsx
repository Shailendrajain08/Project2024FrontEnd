import React, { useEffect, useState, memo } from 'react';
import { Grid, Typography, Box, Button, Chip } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useNavigate } from 'react-router-dom';
import { getCoderByIdService } from '../../../../../../services/profile/coder.service';
import './index.css';
import { calculateTotalAmountEarned, sillName } from '../../../../utils';
import { getPostTime } from '../../../../../../helper/utils';

const CoderProposalCard: React.FC<TCoderProposalCard> = ({
  proposal,
  isLastCard,
  jobId = '',
  technologies
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<TUser>({} as TUser);
  useEffect(() => {
    if (!Object.keys(user).length) {
      getUser();
    }
  }, []);
  const getUser = async () => {
    const userData = await getCoderByIdService(proposal.user);
    setUser(userData?.data as TUser);
  };
  const {
    skill_and_experience,
    first_name,
    last_name,
    country,
    date_joined,
    completed_jobs
  }: TUser = user;
  const {
    identity,
    hourly_rate,
    brief_work_experience,
    profile_picture,
    skills
  }: TSkillAndExperience = skill_and_experience || {};
  const name = `${first_name} ${last_name ? last_name : ''}`;

  //Need to remove rating in next iteration
  const rating = 4.3;
  return (
    <Grid container p={3} className={isLastCard ? '' : 'coder-proposal-card--container'}>
      <Grid item xs={12}>
        <Grid container justifyContent={'space-between'}>
          <Grid item xs={12} md={7.5} display={'flex'} columnGap={2}>
            <Box className="coder-proposal-card--img">
              {profile_picture ? <img src={profile_picture} alt={name} /> : <AccountCircleIcon />}
            </Box>
            <Box>
              <Box display={'flex'} columnGap={0.5} alignItems={'center'}>
                <Typography variant="subtitle2">{name}</Typography>
                <Typography variant="caption">{`(${identity})`}</Typography>
              </Box>
              <Typography variant="body2">{brief_work_experience}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4.5}>
            <Box className="coder-proposal-card--action-box">
              <Box className="coder-proposal-card--icon-box">
                <FlagOutlinedIcon />
              </Box>
              <Box className="coder-proposal-card--icon-box">
                <FavoriteBorderIcon />
              </Box>
              <Box className="coder-proposal-card--icon-box">
                <MessageIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        textAlign={'start'}
        mt={1.25}
        className="coder-proposal-card--skills-tab-box">
        {skills &&
          skills.map((skill: any, i: number) => (
            <Chip
              className="job-detail--skill-chip"
              key={i}
              label={sillName(technologies, skill?.technology)}
            />
          ))}
      </Grid>
      <Grid item xs={12} md={10} mt={1.25} textAlign={'start'}>
        <Typography variant="body2" className="coder-proposal-card--description-text">
          {proposal?.description}
        </Typography>
      </Grid>
      <Grid item xs={12} mt={2}>
        <Box className="coder-proposal-card--bottom-box">
          <Box>
            <Grid container columnGap={1.5}>
              {rating && (
                <Grid item className="coder-proposal-card--rating">
                  <StarOutlinedIcon /> <Typography variant="subtitle2">{rating}</Typography>
                </Grid>
              )}
              <Grid item className="coder-proposal-card--hourly-rate">
                <Typography variant="subtitle2">{`$${hourly_rate} hourly`}</Typography>
              </Grid>
              {completed_jobs && completed_jobs.length > 0 && (
                <Grid item className="coder-proposal-card--text">
                  <Typography variant="subtitle2">{`$${calculateTotalAmountEarned(
                    completed_jobs
                  )} earned`}</Typography>
                </Grid>
              )}
              <Grid item className="coder-proposal-card--icon-text">
                <DesktopWindowsOutlinedIcon />
                <Typography variant="subtitle2">{getPostTime(date_joined)}</Typography>
              </Grid>
              <Grid item className="coder-proposal-card--icon-text">
                <LocationOnOutlinedIcon /> <Typography variant="subtitle2">{country}</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container>
              <Grid>
                {' '}
                <Button
                  variant="text"
                  onClick={() => navigate(`/jobs/${jobId}/proposals/${proposal.id}`)}>
                  View Proposal
                </Button>
              </Grid>
              <Grid item className="coder-proposal-card--btn-box">
                {' '}
                <Button variant="outlined">Hire Now</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default memo(CoderProposalCard);
