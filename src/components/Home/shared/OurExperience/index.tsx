import React, { Fragment, useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import ExperienceCard from './ExperienceCard';
import './index.css';

const OurExperience: React.FC<any> = ({
  coderTotalExperience = [],
  totalExperienceSvgObject = {}
}) => {
  const isMobileView = useMediaQuery('(max-width:600px)');
  const [isToggle, setIsToggle] = useState(false);
  const [coderExperienceData, setExperienceData] = useState([]);
  useEffect(() => {
    if (coderTotalExperience.length > 0) {
      if (isMobileView) {
        handleShowLessData();
      } else {
        setExperienceData(coderTotalExperience);
      }
    }
  }, [isMobileView]);

  const handleShowLessData = () => {
    const tempData = coderTotalExperience;
    const shortData = tempData.slice(0, 3);
    setExperienceData(shortData);
    setIsToggle(false);
  };
  const handleShowMoreData = () => {
    setExperienceData(coderTotalExperience);
    setIsToggle(true);
  };
  return (
    <Box component={'section'} id="experience" className="home-our-exp--section">
      <Container>
        <Box className="home-our-exp--box">
          <Box
            width={1}
            display={'flex'}
            justifyContent={'center'}
            className="home-our-exp--heading-box">
            <Typography
              variant="h2"
              className="home-our-exp--text-heading heading-box"
              color={'#111111'}>
              Total{' '}
              <Typography
                variant="caption"
                className="home-our-exp--text-heading"
                color={'#14A800'}>
                experience
              </Typography>{' '}
              of our coders
            </Typography>
          </Box>
          <Typography variant="body1" color={'#111111'} className="opacity--6">
            Our coders bring a wealth of experience, knowledge and expertise to every project they
            undertake.
          </Typography>
          <Box className="home-our-exp--card-box">
            <Grid container justifyContent={'center'}>
              {coderExperienceData.map((data: any) => {
                return (
                  <Fragment key={data.id}>
                    <ExperienceCard {...data} totalExperienceSvgObject={totalExperienceSvgObject} />
                  </Fragment>
                );
              })}
              <Box className="home-our-exp--mobile-box lg--display-none">
                {!isToggle && (
                  <Typography
                    variant="h5"
                    fontSize={'16px'}
                    fontWeight={600}
                    onClick={handleShowMoreData}>
                    Show More...
                  </Typography>
                )}
                <Typography
                  variant="h5"
                  fontSize={'16px'}
                  fontWeight={600}
                  onClick={handleShowLessData}
                  display={isMobileView && !isToggle ? 'none' : ''}>
                  Show Less...
                </Typography>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurExperience;
