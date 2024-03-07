import { useState } from 'react';
import { Grid, Box, Button, Typography } from '@mui/material';
import Skills from '../../../../Common/Skills';
import { ICoderProposalProps } from '../type';
import JobSpecification from '../../../../Common/JobSpecification';
import { capitalizeFirstLetter } from '../../utils';

const JobDescription = ({ coderData, maxLength, isHourly }: ICoderProposalProps) => {
  const {
    title,
    description,
    technologies,
    minimum_hourly_rate,
    maximum_hourly_rate,
    maximum_budget,
    duration,
    jobPostAge,
    project_size,
    expertise_is_beginner,
    expertise_is_intermediate,
    expertise_is_expert,
    preferred_coder_residence,
    timezone
  } = coderData;
  const rate = isHourly
    ? `$${minimum_hourly_rate}-${maximum_hourly_rate}/hour`
    : `$${maximum_budget}`;
  const jopSpecProps = {
    project_size: capitalizeFirstLetter(project_size),
    duration: duration,
    expertise_is_beginner,
    expertise_is_intermediate,
    expertise_is_expert,
    preferred_coder_residence: preferred_coder_residence,
    timezone: timezone,
    maximum_budget: maximum_budget,
    maximum_hourly_rate: 120,
    minimum_hourly_rate: 80
  };
  return (
    <Box marginTop={2}>
      <Typography variant="h2" fontSize={24} marginBottom={2}>
        Job Description
      </Typography>
      <Typography
        variant="subtitle1"
        fontSize={16}
        lineHeight={'24px'}
        fontWeight={500}
        marginBottom={1}>
        {title}
      </Typography>
      <JobSpecification {...jopSpecProps} />
      <Box mt={1.5}>
        <Typography
          className={'ellipsisText'}
          variant="caption"
          fontSize={12}
          color={'rgba(0, 0, 0, 0.60)'}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default JobDescription;
