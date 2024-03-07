import React from 'react';
import { Box, Typography } from '@mui/material';
import './index.css';

const CoderVideoCard: React.FC<any> = ({
  imageUrl,
  videoPath,
  videoAltText,
  imgAltText,
  name,
  primarySkill,
  handleClick,
  className
}) => {
  return (
    <Box
      position={'relative'}
      className="home-coder-video-card--box home-coder-video-card--box-animation"
      onClick={() => handleClick(videoPath)}>
      <Box position={'absolute'} className="home-coder-video-card--play-box">
        <Box position={'relative'} height={1} className="">
          {' '}
          <img
            className="home-coder-video-card--pause-img"
            data-pop-up={videoPath}
            src="images/svg/video_play_icon_new.svg"
            alt={videoAltText}
          />{' '}
        </Box>
      </Box>
      <Box position={'relative'}>
        <img className="home-coder-video-card--img" src={imageUrl} alt={imgAltText} />
      </Box>
      <Box textAlign={'center'} mt={1.5}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h4">{primarySkill}</Typography>
      </Box>
    </Box>
  );
};

export default CoderVideoCard;
