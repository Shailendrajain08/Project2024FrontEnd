import { Box, Typography, Chip, Button, Rating } from '@mui/material';
import { getPostTime } from '../../../../helper/utils';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import MessageIcon from '@mui/icons-material/Message';
import './index.css';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearJobDetails } from '../../../../store/actions/jobs';
import { useDispatch } from 'react-redux';

const JobDetailsCard = ({ jobDetails = {}, handleSubmitFeedback, isLastCard }: any) => {
  const {
    title,
    id,
    description,
    technologies = [],
    preferred_coder_residence,
    budget_type,
    maximum_budget,
    minimum_hourly_rate,
    maximum_hourly_rate,
    created,
    status,
    coder_rating = ''
  } = jobDetails;
  const navigate = useNavigate();
  const budget =
    budget_type === 'FIXED'
      ? `Fixed Price $${maximum_budget}*`
      : `$${minimum_hourly_rate} - $${maximum_hourly_rate}/hr`;
  const location = preferred_coder_residence === 'USA_ONLY' ? 'USA' : 'Anywhere';
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearJobDetails());
    navigate(`/client/job/${id}/detail`);
    window.scrollTo(0, 0);
  };

  return (
    <Box p={3} textAlign={'start'} className={isLastCard ? '' : 'job-detail--box'}>
      <Box className="job-detail--top-container">
        <Box className="job-detail--top-left-box" onClick={handleClick}>
          <Typography variant="subtitle1" className="job-detail--title-text">
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" className="job-detail--description-text">
              {`${description.substr(0, 200)}...`}
            </Typography>
          )}
          <Box className="job-detail--skills-tab-box">
            {technologies.map((skill: any, i: number) => (
              <Chip key={i} label={skill} />
            ))}
          </Box>
        </Box>
        <Box className="job-detail--top-right-box">
          {status !== 'OPEN' && (
            <Box className="job-detail--icon-box">
              <FavoriteBorderIcon />
            </Box>
          )}
          {status === 'COMPLETED' && (
            <Box className="job-detail--icon-box">
              <AttachMoneyIcon />
            </Box>
          )}
          {status === 'OPEN' && (
            <Fragment>
              {' '}
              <Box className="job-detail--icon-box">
                <EditOutlinedIcon />
              </Box>
              <Box className="job-detail--icon-box">
                <InsertDriveFileOutlinedIcon />
              </Box>
            </Fragment>
          )}
          {status !== 'OPEN' && (
            <Box className="job-detail--icon-box">
              <MessageIcon />
            </Box>
          )}
        </Box>
      </Box>
      <Box className="job-detail--bottom-container">
        <Box display="flex" columnGap={1.5}>
          <Box className="job-detail--budget-text">
            <Typography variant="subtitle2">{budget}</Typography>
          </Box>
          <Box className="job-detail--bottom-icon-box">
            <LocationOnOutlinedIcon />
            <Typography variant="subtitle2">{location}</Typography>
          </Box>
          <Box className="job-detail--bottom-icon-box">
            <TimerOutlinedIcon />
            <Typography variant="subtitle2" className="job-detial--time">{`${getPostTime(
              created as any
            )} ago`}</Typography>
          </Box>
          <Box className="job-detail--bottom-icon-box">
            <Typography variant="subtitle2">{'Hired Coder 4'}</Typography>
          </Box>
        </Box>
        <Box>
          {status === 'COMPLETED' && (
            <Fragment>
              {!coder_rating ? (
                <Box className="client-dashboard-job-card--btn-box">
                  <Button
                    variant="outlined"
                    className="client-dashboard-job-card--btn"
                    onClick={handleSubmitFeedback}>
                    Submit Feedback
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Rating name="half-rating-read" precision={0.5} value={coder_rating} readOnly />
                </Box>
              )}
            </Fragment>
          )}
          {status === 'ACTIVE' && (
            <Box className="client-dashboard-job-card--btn-box">
              <Button variant="outlined" className="client-dashboard-job-card--btn">
                Pay now
              </Button>
            </Box>
          )}
          {status === 'OPEN' && (
            <Box className="client-dashboard-job-card--btn-box">
              <Button
                variant="outlined"
                className="client-dashboard-job-card--btn"
                onClick={() => navigate(`/jobs/${id}/proposals/`)}>
                View Proposals
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetailsCard;
