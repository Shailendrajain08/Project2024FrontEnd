import React, { Fragment, useState } from 'react';
import { Box, Grid, Container, Typography, Rating } from '@mui/material';
import Slider from 'react-slick';
import CoderCard from './components/CoderCard';
import CoderVideoSlider from './components/CoderSlider';
import { coderCardSlider } from '../../utils';
import VideoPlayer from './components/VideoPlayer';
import './index.css';

const OurTopCoder: React.FC<TOurTopCoder> = ({ coderCardData, coderVideoCardData }) => {
  const [video, setVideo] = useState({ videoUrl: '', isShowModal: false });
  const handleVideoPlay = (videoUrl: string) => {
    setVideo({ videoUrl: videoUrl, isShowModal: true });
  };
  const handleClose = () => {
    setVideo({ videoUrl: '', isShowModal: false });
  };

  return (
    <Box component={'section'} id="chatHire" className="home-our-top-coder-section">
      <Box className="home-our-top-coder-img-1-box" zIndex={1}>
        <img
          src="/images/webp/background_wave_for_hire.webp"
          width="100%"
          height="100%"
          alt="bg-wave"
          className="w-100"
        />
      </Box>
      <Box className="home-our-top-coder-img-2-box" zIndex={1}>
        <img
          src="/images/webp/img_bg_gloab&layer.webp"
          width="100%"
          height="100%"
          alt="bg-wave"
          className="w-100"
        />
      </Box>
      <Container className="home-our-top-coder--container">
        <Typography variant="h2" className="home-our-top-coder--text" color={'#111111'}>
          Meet top coder ready to
        </Typography>
        <Typography className="home-our-top-coder--text" color={'#14A800'}>
          Chat and hire
        </Typography>
        <Grid container spacing={2.5} mt={6.5}>
          <Grid item lg={7} className="" mb={2}>
            <Box className="">
              <Box
                position={'relative'}
                className="home-coder-video-card--box"
                onClick={() => handleVideoPlay('videos/chat-and-hire-content-video-1.mp4')}
                zIndex={999}>
                <Box position={'absolute'} className="home-coder-video-card--play-box">
                  <Box position={'relative'} height={1}>
                    {' '}
                    <img
                      className="home-coder-video-card--pause-img"
                      data-pop-up={'videos/chat-and-hire-content-video-1.mp4'}
                      src="images/svg/video_play_icon_new.svg"
                      alt="img with video"
                    />{' '}
                  </Box>
                </Box>
                <Box position={'relative'} overflow={'hidden'}>
                  <img
                    width="100%"
                    height="100%"
                    className="img_custom_min_h box_hover_common"
                    src="images/webp/chat-hire-coder-7.webp"
                    alt="img with video"
                  />
                </Box>
                <Box textAlign={'start'} mt={1.5}>
                  <Typography variant="h3" fontSize={'24px'} fontWeight={600} color={'#131313'}>
                    Courtney Henry
                  </Typography>
                  <Typography variant="h4" color={'#131313'}>
                    Java Developer
                  </Typography>
                  <Box className="home-coder-box--rating-box">
                    <Rating value={4} readOnly />
                  </Box>
                  <Typography variant="body1" className="">
                    “7 Senectus tempus porttitor sed id dignissim. At et euismod adipiscing mattis
                    vestibulum odio. Curabitur consectetur commodo neque nullam aenean molestie
                    tristique. Proin feugiat aenean pulvinar eget nulla sagittis in. Nisi viverra
                    fames quis consequat nullam”
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5} className="home-our-top-coder--lg-box">
            {coderCardData.map((coderData: any, i: number) => {
              return (
                <Box key={i}>
                  <CoderCard {...coderData} />
                </Box>
              );
            })}
          </Grid>
        </Grid>
        <Box className="home-our-top-coder--mobile-box" mt={5}>
          <Slider {...coderCardSlider}>
            {coderCardData.map((coderData: TCoderCard, i: number) => {
              return (
                <Fragment key={i}>
                  <CoderCard {...coderData} />
                </Fragment>
              );
            })}
          </Slider>
        </Box>
      </Container>
      <Box position={'relative'}>
        <Box id="chatHireslider" className="home-our-top-coder--video-slider">
          <CoderVideoSlider
            handleVideoPlay={handleVideoPlay}
            coderVideoCardData={coderVideoCardData}
          />
        </Box>
      </Box>
      {video.isShowModal && <VideoPlayer handleClose={handleClose} videoUrl={video.videoUrl} />}
    </Box>
  );
};

export default OurTopCoder;
