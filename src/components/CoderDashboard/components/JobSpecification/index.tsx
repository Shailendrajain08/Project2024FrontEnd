import React from 'react';
import { Box, Typography, capitalize } from '@mui/material';
import { projectDuration } from '../../../../constants/dashboard';
import './index.css';
import { getExpertiseLabel } from '../../../../helper/utils';

const JobSpecification: React.FC<any> = ({
  project_size,
  timezone,
  duration,
  expertise,
  expertise_is_beginner,
  expertise_is_expert,
  expertise_is_intermediate,
  budget_type,
  maximum_budget,
  maximum_hourly_rate,
  minimum_hourly_rate,
  preferred_coder_residence
}) => {
  const projectSize = capitalize(project_size?.toLowerCase());
  //const expertiseLevel = expertise?.map((el: string) => capitalize(el.toLowerCase())).join(', ');
  const timeZone = timezone.length > 0 ? timezone[0].split('-')[0] : '';
  const location = preferred_coder_residence === 'USA_ONLY' ? 'USA' : 'Anywhere in the world';
  const budget =
    budget_type === 'FIXED'
      ? `$${maximum_budget}`
      : `$${minimum_hourly_rate} - $${maximum_hourly_rate}/hr`;

  return (
    <Box display={'flex'} columnGap={3.5}>
      <Box>
        <Typography variant="body2">{'Job Size'}</Typography>
        <Typography variant="caption" className="coder-dashboard--job-specification-sub-text">
          {projectSize}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">{'Expected Duration'}</Typography>
        <Typography variant="caption" className="coder-dashboard--job-specification-sub-text">
          {projectDuration[duration]}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">{'Expertise Level'}</Typography>
        <Typography variant="caption" className="coder-dashboard--job-specification-sub-text">
          {getExpertiseLabel(expertise_is_beginner, expertise_is_intermediate, expertise_is_expert)}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">{'Location'}</Typography>
        <Typography variant="caption" className="coder-dashboard--job-specification-sub-text">
          {location}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">{'Time Zone'}</Typography>
        <Typography variant="caption" className="coder-dashboard--job-specification-sub-text">
          {timeZone}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2">{'Budget'}</Typography>
        <Typography variant="caption" className="coder-dashboard--job-specification-sub-text">
          {budget}
        </Typography>
      </Box>
    </Box>
  );
};

export default JobSpecification;
