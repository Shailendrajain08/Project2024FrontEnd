import React from 'react';
import { Box, Typography } from '@mui/material';
import { capitalizeFirstLetter, projectDuration } from '../../../../../Job/coder/utils';
import './index.css';

const JobDetail: React.FC<TJob> = ({
  title,
  project_size,
  timezone,
  duration,
  expertise,
  maximum_budget,
  description,
  preferred_coder_residence
}) => {
  const location = preferred_coder_residence === 'USA_ONLY' ? 'USA' : 'Anywhere in the world';
  return (
    <Box textAlign={'start'} className="job-detail--box-container">
      <Typography variant="h3">{title}</Typography>
      <Typography variant="subtitle1" className="job-detail--description-text">
        {description}
      </Typography>
      <Box display={'flex'} columnGap={4} mt={2}>
        <Box>
          <Typography variant="subtitle2">{'Job Size'}</Typography>
          <Typography variant="caption">{project_size}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">{'Expected Duration'}</Typography>
          <Typography variant="caption">{projectDuration[duration]}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">{'Expertise Level'}</Typography>
          <Typography variant="caption">{expertise}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">{'Location'}</Typography>
          <Typography variant="caption">{location}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">{'Time Zone'}</Typography>
          <Typography variant="caption">{timezone[0]?.split('-')[0]}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">{'Budget'}</Typography>
          <Typography variant="caption">{`$${maximum_budget}`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetail;
