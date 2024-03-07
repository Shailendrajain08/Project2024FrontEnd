import { Box, Typography, Chip, Button } from '@mui/material';
import { getPostTime } from '../../../../helper/utils';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MessageIcon from '@mui/icons-material/Message';
import './index.css';
import JobSpecification from '../JobSpecification';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const JobDetailsCard: React.FC<any> = ({ jobDetails, isLastCard }) => {
  const { description, technologies = [], created, status, id } = jobDetails;
  const navigate = useNavigate();
  const routeById = () => {
    navigate(`/jobs/${id}/timesheet`);
  };
  const handleClick = () => {
    navigate(`/jobs/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Box
      textAlign={'start'}
      p={3}
      sx={{ cursor: 'pointer' }}
      className={isLastCard ? '' : 'coder-dashboard--job-detail-card'}
      onClick={routeById}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'start'}>
        <Box display={'flex'} columnGap="14px">
          <Box>
            <img src={'/images/png/job_logo.png'} />
          </Box>
          <Box>
            <Typography variant="subtitle1" mb={0.5}>
              {'Bridger Data Solutions'}
            </Typography>
            <Typography variant="body2">{'Full Stack Web Developer'}</Typography>
          </Box>
        </Box>
        <Box display={'flex'} columnGap={'6px'} alignItems={'center'}>
          {status !== 'SAVED' && (
            <Box className="job-detail--icon-box">
              <FlagOutlinedIcon />
            </Box>
          )}
          {(status === 'OFFERED' || status === 'SAVED') && (
            <Box className="job-detail--icon-box">
              <FavoriteBorderIcon />
            </Box>
          )}
          {status === 'ACTIVE' && (
            <Box className="job-detail--icon-box">
              <AttachMoneyIcon />
            </Box>
          )}
          {(status === 'ACTIVE' || status === 'applied') && (
            <Box className="job-detail--icon-box">
              <MessageIcon />
            </Box>
          )}
        </Box>
      </Box>
      <Box onClick={handleClick} className="coder-dashboard--job-detail-cursor">
        {' '}
        <Box mt={1.5}>
          <JobSpecification {...jobDetails} />
        </Box>
        <Box mt={1.5} className="coder-job-detail--description">
          <Typography variant="body2">{description}</Typography>
        </Box>
        <Box mt={1.25} display={'flex'} columnGap={1}>
          {technologies.map((skill: any, i: number) => (
            <Chip className="coder-dashboard-job-detail--skill-chip" key={i} label={skill} />
          ))}
        </Box>
      </Box>

      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={1.25}>
        <Box className="job-detail--bottom-icon-box" columnGap={'6px'}>
          <Box className="coder-dashboard--timer-svg">
            {' '}
            <TimerOutlinedIcon />
          </Box>
          <Box>
            <Typography variant="subtitle2" className="job-detial--time">{`${getPostTime(
              created as any
            )} ago`}</Typography>
          </Box>
        </Box>
        {!status ||
          (status === 'SAVED' && (
            <Box>
              <Button variant="outlined">Apply Now</Button>
            </Box>
          ))}
        {status === 'INVITED' && (
          <Box>
            <Button variant="text" className="coder-dashboard--decline-button">
              Decline
            </Button>
            <Button variant="outlined" className="coder-dashboard--apply-button">
              Apply Now
            </Button>
          </Box>
        )}
        {status === 'OFFERED' && (
          <Box>
            <Button variant="text" className="coder-dashboard--decline-button">
              Decline
            </Button>
            <Button variant="outlined" className="coder-dashboard--apply-button">
              Accept
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default JobDetailsCard;
