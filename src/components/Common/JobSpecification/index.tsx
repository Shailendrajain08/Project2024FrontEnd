import { Box, Typography, capitalize } from '@mui/material';
import './index.css';
import { getExpertiseLabel, projectDuration } from '../../../helper/utils';

interface IJobSpecification {
  project_size: string;
  duration: string;
  expertise_is_beginner: boolean;
  expertise_is_intermediate: boolean;
  expertise_is_expert: boolean;
  preferred_coder_residence: boolean | any;
  timezone: any;
  maximum_budget: number;
  maximum_hourly_rate: number | undefined;
  minimum_hourly_rate: number | undefined;
}

const JobSpecification = ({
  project_size,
  duration,
  expertise_is_beginner,
  expertise_is_intermediate,
  expertise_is_expert,
  preferred_coder_residence,
  timezone,
  maximum_budget,
  maximum_hourly_rate,
  minimum_hourly_rate
}: IJobSpecification) => {
  const budget = maximum_budget
    ? `$${maximum_budget}`
    : `$${minimum_hourly_rate} - $${maximum_hourly_rate}/hour`;
  const location = preferred_coder_residence == 'USA_ONLY' ? 'USA' : 'Anywhere';
  return (
    <Box className="common-job-specification" mt={2}>
      <Box>
        <Typography variant="body2" fontSize={14} lineHeight={'21.7px'}>
          {'Job Size'}
        </Typography>
        <Typography variant="caption" fontSize={12} color={'rgba(0, 0, 0, 0.38)'} mt={1}>
          {capitalize(project_size.toLowerCase())}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" fontSize={14} lineHeight={'21.7px'}>
          {'Expected Duration'}
        </Typography>
        <Typography variant="caption" fontSize={12} color={'rgba(0, 0, 0, 0.38)'} mt={1}>
          {projectDuration[duration]}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" fontSize={14} lineHeight={'21.7px'}>
          {'Expertise Level'}
        </Typography>
        <Box mt={0.5}>
          <Box className="expertise-job-section">
            <Typography variant="caption" fontSize={12} color={'rgba(0, 0, 0, 0.38)'}>
              {getExpertiseLabel(
                expertise_is_beginner,
                expertise_is_intermediate,
                expertise_is_expert
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" fontSize={14} lineHeight={'21.7px'}>
          {'Location'}
        </Typography>
        <Typography variant="caption" fontSize={12} color={'rgba(0, 0, 0, 0.38)'} mt={1}>
          {location}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" fontSize={14} lineHeight={'21.7px'}>
          {'Timezone'}
        </Typography>
        <Box className="job-specification--timezone-box" mt={0.5}>
          {timezone.map((time: any, index: number) => {
            return (
              <Box key={index} className="time-zone-job">
                <Typography variant="caption" fontSize={12} color={'rgba(0, 0, 0, 0.38)'}>
                  {time.split('-')[0]}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" fontSize={14} lineHeight={'21.7px'}>
          {'Budget'}
        </Typography>
        <Typography variant="caption" fontSize={12} color={'rgba(0, 0, 0, 0.38)'} mt={1}>
          {budget}
        </Typography>
      </Box>
    </Box>
  );
};

export default JobSpecification;
