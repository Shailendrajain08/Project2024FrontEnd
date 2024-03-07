import React from 'react';
import { Box, Rating, Typography } from '@mui/material';
import './index.css';

const CoderCard: React.FC<any> = ({
  imageUrl,
  imgAltText,
  name,
  primarySkill,
  experience,
  bio,
  boxCss
}) => {
  return (
    <Box className={`home-coder-card--box home-coder-common ${boxCss}`}>
      <Box display={'flex'} alignItems={'center'} columnGap={'10px'}>
        <Box className="hcc--img-box">
          <img src={imageUrl} alt={imgAltText} />
        </Box>
        <Box textAlign={'start'}>
          <Typography variant="h3" mb={'5px'} className="hcc--name-text">
            {name}
          </Typography>
          <Typography variant="h4" className="hcc--primary-skill-text">
            {primarySkill}
          </Typography>
        </Box>
      </Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mt={0.5}>
        <Box className="home-coder-box--rating-box">
          <Rating value={4} readOnly />
        </Box>
        <Box>
          <Typography variant="h5" color={'#14A800'}>
            {`Experience: ${experience} Years`}
          </Typography>
        </Box>
      </Box>
      <Box textAlign={'start'} mt={'2px'}>
        <Typography variant="body2">{bio}</Typography>
      </Box>
    </Box>
  );
};

export default CoderCard;
