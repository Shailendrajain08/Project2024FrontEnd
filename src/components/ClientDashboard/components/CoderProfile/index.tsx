import React from 'react';
import './index.css';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { Box, Button, Typography } from '@mui/material';
import { LocationOnOutlined, MoreHoriz, TimerOutlined } from '@mui/icons-material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import Certificate from '../../../../assets/images/Certificate.png';
import avatar1 from '../../../../assets/images/avatar1.png';
import { certifications, coderData, education, employment } from '../../constant';
import WorkHistory from './WorkHistory';
import Skills from './skills';
import Portfolio from './portfolio';
import ProfileData from './profileData';

interface EmploymentItem {
  experience: string;
  duration: string;
  roles: string;
}

interface EducationItem {
  name: string;
  degree: string;
}

interface CertificationItem {
  name?: string;
  provider?: string;
  issue?: string;
}

const CoderProfileDetails: React.FC = () => {
  return (
    <Box className="main-box">
      {coderData.map((coder: any, i) => {
        return (
          <Card sx={{ maxWidth: 1140 }} className="main-card" key={i}>
            <Box className="card-header">
              <Box className="card-profile">
                <Box className="card-header-avatar">
                  <Avatar aria-label="recipe" src={avatar1}></Avatar>
                </Box>
                <Box className="card-profile-name">
                  <Typography variant="h6" className="profile-name">
                    {coder.first_name} {coder.last_name}
                  </Typography>
                  <Box className="profile-name-detail" color="rgba(0, 0, 0, 0.38)">
                    <Box className="header-coder-location-icon">
                      <TimerOutlined />
                    </Box>
                    <Typography variant="subtitle2" mx={0.8}>
                      {' '}
                      8 PM Local Time
                    </Typography>
                    <Box className="header-coder-location-icon">
                      <LocationOnOutlined />
                    </Box>
                    <Typography variant="subtitle2" ml={0.5}>
                      {' '}
                      {coder.city}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="card-profile-btns">
                <Box className="header-icon">
                  <FlagOutlinedIcon />
                </Box>
                <Box className="header-icon">
                  <FavoriteBorderRoundedIcon />
                </Box>

                <Button variant="outlined" className="hire--btn">
                  HIRE
                </Button>
                <Button variant="contained" className="hire--btn">
                  Invite
                </Button>
              </Box>
            </Box>
            <Box display={'flex'} className="card-body">
              <Box className="side-card-body">
                <Box className="work-history-section">
                  <Box className="work-history">
                    <Typography variant="h5" fontSize={18}>
                      {' '}
                      Work History
                    </Typography>
                    <Box className="header-icon">
                      <MoreHoriz />
                    </Box>
                  </Box>
                  <Box className="job-offered">
                    <Button>Completed Jobs (13)</Button>
                  </Box>
                </Box>
                <WorkHistory />
                <Box className="employement-history-column">
                  <Typography fontSize={20}>Employment History</Typography>
                </Box>
                {employment.map((emp: EmploymentItem, i) => {
                  return (
                    <Box className="employement-history" key={i}>
                      <Typography variant="subtitle1" mb={0.7}>
                        {emp.experience}
                      </Typography>
                      <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'} mb={0.8}>
                        {emp.duration}
                      </Typography>
                      <Typography variant="body2">{emp.roles}</Typography>
                    </Box>
                  );
                })}
                <Box className="employement-history-button">
                  <Button>SHOW MORE (7)</Button>
                </Box>
                <Box className="employement-education-column">
                  <Typography fontSize={20}>Education</Typography>
                </Box>
                {education.map((e: EducationItem, i) => {
                  return (
                    <Box className="education" key={i}>
                      <Typography variant="subtitle1" mb={0.7}>
                        {e.name}
                      </Typography>
                      <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'} mb={0.8}>
                        {e.degree}
                      </Typography>
                    </Box>
                  );
                })}
                <Box className="certification-column">
                  <Typography fontSize={20}>Certification</Typography>
                </Box>
                {certifications.map((c: CertificationItem, i) => {
                  return (
                    <Box display={'flex'} key={i} className="certification">
                      <img src={Certificate} alt="Certificate" height={51} />
                      <Box ml={2} className="certificate-cell">
                        <Typography variant="subtitle1">{c.name}</Typography>
                        <Box display={'flex'} my={0.8}>
                          <Typography fontSize={14} mr={1.6} color="rgba(0, 0, 0, 0.60)">
                            {c.provider}
                          </Typography>
                          <Typography fontSize={14} mr={1.6} color="rgba(0, 0, 0, 0.60)">
                            {c.issue}
                          </Typography>
                        </Box>
                        <Button className="show-desc-btn">SHOW DESCRIPTION</Button>
                      </Box>
                    </Box>
                  );
                })}
                <Box className="skills-section">
                  <Skills />
                </Box>
                <Box className="portfolio-section" pb={3}>
                  <Portfolio />
                </Box>
              </Box>
              <Box className="card-body-text" maxWidth={699} px={3} py={3}>
                <ProfileData />
              </Box>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default CoderProfileDetails;
