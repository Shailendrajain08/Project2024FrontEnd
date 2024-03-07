import React from 'react';
import { Box, Grid, Typography, Link, Avatar } from '@mui/material';
import { ArrowRightSvg } from '../../../../../assets/svg/ArrowRight';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import './index.css';

const ExperienceCard: React.FC<any> = ({
  name,
  total_experience,
  projects_completed,
  totalExperienceSvgObject
}) => {
  return (
    <Grid
      item
      xs={11}
      sm={6}
      md={4}
      xl={3}
      textAlign={'center'}
      mb={4}
      className="home-exp-card--hover-scale transition300 text-sm-start">
      <Box
        height={1}
        display={'flex'}
        justifyContent={'space-between'}
        flexDirection={'column'}
        className="home-exp-card--box">
        <Box>
          <Box display={'flex'} alignItems={'center'} gap={2} className="home-exp-card-content">
            <Box display={'flex'} flexDirection={'column'}>
              <Box display={'flex'} columnGap={'12px'} alignItems={'center'}>
                {totalExperienceSvgObject[name] ? (
                  <Avatar src={totalExperienceSvgObject[name]} className="hc-experience-card" />
                ) : (
                  <DisplaySettingsOutlinedIcon />
                )}
                <Typography
                  variant="h3"
                  color={'#111111'}
                  lineHeight={'24px'}
                  fontWeight={600}
                  pb={1}
                  textAlign={'start'}>
                  {name}
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'} pt={'12px'}>
                <Typography
                  variant="h4"
                  color={'#111111'}
                  fontWeight={400}
                  lineHeight={'25.2px'}
                  width={'154px'}
                  textAlign={'start'}
                  className="opacity--6">
                  {'Total Experience:'}
                </Typography>
                <Typography
                  variant="h4"
                  color={'#14A800'}
                  lineHeight={'25.2px'}
                  fontWeight={700}
                  textAlign={'end'}>
                  {`${total_experience.toLocaleString()} Hrs`}
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'} pt={'12px'}>
                <Typography
                  variant="h4"
                  color={'#111111'}
                  fontWeight={400}
                  lineHeight={'25.2px'}
                  width={'154px'}
                  textAlign={'start'}
                  className="opacity--6">
                  {'Project Completed:'}
                </Typography>
                <Typography
                  variant="h4"
                  color={'#14A800'}
                  lineHeight={'25.2px'}
                  fontWeight={700}
                  textAlign={'end'}>
                  {projects_completed}
                </Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'} pt={'15px'}>
                <Link className="home-exp-card--link" href="#">
                  <Typography fontWeight={500}>View Coders</Typography>
                  <ArrowRightSvg />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ExperienceCard;
