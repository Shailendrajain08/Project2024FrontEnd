import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import monitor from '../../../../assets/lottie/Monitor.json';
import thumb from '../../../../assets/lottie/thumb.json';
import coin from '../../../../assets/lottie/coins.json';
import camera from '../../../../assets/lottie/Camera.json';
import JobManagerCard from './components/ManageCard';
import LottieBox from './components/LottieBox';
import './index.css';

const OurBuildTeam: React.FC = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {matches ? (
        <Box
          component={'section'}
          position={'relative'}
          py={3}
          id="team"
          className="home-our-build-team--section">
          <img
            className="home-our-build-team--img"
            src="images/webp/build-line.webp"
            alt="side-line"
          />
          <Container className="home-our-build-team--container">
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
              width={1}
              className="home-our-build-team--heading-box">
              <Box className="home-our-build-team--team-text-box">
                <Box textAlign={'start'} className="home-our-build-team--heading-text-box">
                  <Typography variant="h2" className="home-our-build-team--heading ">
                    Build Amazing
                  </Typography>
                  <Typography
                    component={'span'}
                    className="home-our-build-team--heading team-demand-text">
                    {' '}
                    Teams, On Demand
                  </Typography>
                  <Typography variant="body1" className="home-our-build-team--subtext">
                    Quis diam fames justo ultricies enim. Et et donec sit eu sed enim sed commodo
                    pellentesque.
                  </Typography>
                </Box>
                <Box mt={5} className="home-lotties--wrapper">
                  <Box className="home-our-team-lottie-box">
                    <LottieBox
                      animationData={monitor}
                      title="Same-Day Hiring"
                      subTitle1="SameHire Top 1% Remote Coders on"
                      subtitle2="the same day"
                    />
                    <LottieBox
                      animationData={thumb}
                      title="Satisfaction Guaranteed"
                      subTitle1="Pay only when satisfied with the"
                      subtitle2="task"
                    />
                  </Box>
                  <Box className="home-our-team-lottie-box">
                    <LottieBox
                      animationData={camera}
                      title="Connect via Chat and Video"
                      subTitle1=" Chat and Video call on the same"
                      subtitle2="day before awarding project"
                    />
                    <LottieBox
                      animationData={coin}
                      title="Affordable Excellence"
                      subTitle1=" Hire top-tier professionals—"
                      subtitle2=" without breaking the bank."
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="home-our-build-team--project-manager-box">
                <Box position={'absolute'} className="project_box_1">
                  <Box position={'relative'} className="">
                    <JobManagerCard
                      imgUrl="images/webp/annette.webp"
                      imgALtText="build-images"
                      name="Annette Black"
                      skill="Python Developer"
                      cmpImgUrl="images/svg/boring.svg"
                      cmpImgALtText="the-boring-company"
                      className="project_box_2"
                      positionValue="absolute"
                    />
                    <JobManagerCard
                      imgUrl="images/webp/jane.webp"
                      imgALtText="build-images"
                      name="Jane Cooper"
                      skill="Java Developer"
                      cmpImgUrl="images/svg/noon.svg"
                      cmpImgALtText="noon"
                      className="project_box_3"
                      positionValue="absolute"
                    />
                    <JobManagerCard
                      imgUrl="images/webp/marvin.webp"
                      imgALtText="build-images"
                      name="Marvin McKinney"
                      skill="React Developer"
                      cmpImgUrl="images/svg/goldman.svg"
                      cmpImgALtText="goldman-sachs"
                      className=""
                      positionValue=""
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      ) : (
        <Box
          component={'section'}
          position={'relative'}
          py={3}
          id="team"
          className="home-our-build-team--section">
          <img
            className="home-our-build-team--img"
            src="images/webp/build-line.webp"
            alt="side-line"
          />
          <Container className="home-our-build-team--container">
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
              width={1}
              className="home-our-build-team--heading-box">
              <Box className="home-our-build-team--team-text-box">
                <Box textAlign={'start'} className="home-our-build-team--heading-text-box">
                  <Typography
                    variant="h2"
                    className="home-our-build-team--heading build--amazing-text">
                    Build Amazing
                  </Typography>
                  <Typography
                    component={'span'}
                    className="home-our-build-team--heading team-demand-text">
                    {' '}
                    Teams, On Demand
                  </Typography>
                  <Typography variant="body1" className="home-our-build-team--subtext">
                    Quis diam fames justo ultricies enim. Et et donec sit eu sed enim sed commodo
                    pellentesque.
                  </Typography>
                </Box>
                <Box
                  position={'relative'}
                  top={'23px'}
                  className="home-our-build-team--project-manager-box-mobile"
                  bgcolor={'#f4f4f4'}>
                  <Box position={'absolute'} className="project_box_1">
                    <Box position={'relative'}>
                      <JobManagerCard
                        imgUrl="images/webp/marvin.webp"
                        imgALtText="build-images"
                        name="Marvin McKinney"
                        skill="React Developer"
                        cmpImgUrl="images/svg/goldman.svg"
                        cmpImgALtText="goldman-sachs"
                        className=""
                      />
                      <JobManagerCard
                        imgUrl="images/webp/annette.webp"
                        imgALtText="build-images"
                        name="Annette Black"
                        skill="Python Developer"
                        cmpImgUrl="images/svg/boring.svg"
                        cmpImgALtText="the-boring-company"
                        className="project_box_2"
                        positionValue="absolute"
                      />
                      <JobManagerCard
                        imgUrl="images/webp/jane.webp"
                        imgALtText="build-images"
                        name="Jane Cooper"
                        skill="Java Developer"
                        cmpImgUrl="images/svg/noon.svg"
                        cmpImgALtText="noon"
                        className="project_box_3"
                        positionValue="absolute"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box mt={85} className="home-our-section--main-container">
                  <Box className="home-our-team-lottie-box">
                    <Box className="lottie-box--wrapper">
                      <LottieBox
                        animationData={monitor}
                        title="Same-Day Hiring"
                        subTitle1="SameHire Top 1% Remote Coders on"
                        subtitle2="the same day"
                      />
                    </Box>
                    <Box className="lottie-box--wrapper">
                      <LottieBox
                        animationData={thumb}
                        title="Satisfaction Guaranteed"
                        subTitle1="Pay only when satisfied with the"
                        subtitle2="task"
                      />
                    </Box>
                  </Box>
                  <Box className="home-our-team-lottie-box">
                    <Box className="lottie-box--wrapper">
                      <LottieBox
                        animationData={camera}
                        title="Connect via Chat and Video"
                        subTitle1=" Chat and Video call on the same"
                        subtitle2="day before awarding project"
                      />
                    </Box>
                    <Box className="lottie-box--wrapper">
                      <LottieBox
                        animationData={coin}
                        title="Affordable Excellence"
                        subTitle1=" Hire top-tier professionals—"
                        subtitle2=" without breaking the bank."
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};

export default OurBuildTeam;
