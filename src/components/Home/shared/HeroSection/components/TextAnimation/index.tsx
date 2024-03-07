import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import './index.css';
import { TypeAnimation } from 'react-type-animation';

const TextTypeAnimation: React.FC<any> = () => {
  return (
    <Box className="home-hc-text-type-box">
      <Typography
        className="text-type-animation--text"
        variant="body1"
        color={'white'}
        id="coderDemand">
        Coder on demand
      </Typography>
      <Typography className="text-type-animation--heading" variant="h1" color={'white'}>
        Video Chat{' '}
        <TypeAnimation
          sequence={[
            ` `,
            1000,
            `& Hire Remote `,
            1500,
            `& Hire Top 1% Remote Coders, `,
            2500,
            `& Hire Top 1% Remote Coders, Scrum Managed By Us !! `,
            5000
          ]}
          wrapper="span"
          speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
          omitDeletionAnimation={true}
          repeat={Infinity}
        />
      </Typography>
    </Box>
  );
};

export default TextTypeAnimation;
