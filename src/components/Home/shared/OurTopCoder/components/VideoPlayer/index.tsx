import React from 'react';
import { Box } from '@mui/material';
import { VideoIconSvg } from '../../../../../../assets/svg';
import './index.css';

const VideoPlayer: React.FC<any> = ({ handleClose, videoUrl }) => {
  return (
    <Box
      zIndex={99999999}
      className="home-video-player--box home-video-player--transition400"
      onClick={handleClose}>
      <Box className="home-video-player--pop-up-box">
        <Box position={'relative'} height={1} width={1} p={2} borderRadius={'16px'}>
          <Box position={'relative'} height={1} width={1}>
            <Box component={'span'} className="home-video-player--span" onClick={handleClose}>
              <VideoIconSvg />
            </Box>
            <video
              className="home-video-player--video-pause home-video-player--transition400"
              height="100%"
              width="100%"
              controls
              autoPlay>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
