import { QuestionMarkOutlined } from '@mui/icons-material';
import { Box, Grid, Typography, capitalize } from '@mui/material';
import { getExpertiseLabel } from '../../../../helper/utils';
import { projectDuration } from '../utils';

interface IJobSpecification {
  title?: string;
  project_size: string;
  description?: string;
  duration: string;
  expertise_is_beginner: boolean;
  expertise_is_intermediate: boolean;
  expertise_is_expert: boolean;
  coderResidence: string;
  timezone: string[];
  fixedMaxPrice?: number | null;
  hourlyMaxPrice?: number | null;
  hourlyMinPrice?: number | null;
}

const PreviewJobSpecs = ({
  title,
  project_size,
  description,
  duration,
  expertise_is_beginner,
  expertise_is_intermediate,
  expertise_is_expert,
  coderResidence,
  timezone,
  fixedMaxPrice,
  hourlyMaxPrice,
  hourlyMinPrice
}: IJobSpecification) => {
  const budget = fixedMaxPrice
    ? `$${fixedMaxPrice}`
    : `$${hourlyMinPrice} - $${hourlyMaxPrice}/hour`;

  function extractLocation(timezoneString: string) {
    // Split the string by spaces and take the last element
    const parts = timezoneString.split(' ');
    return parts[parts.length - 1];
  }

  const location = coderResidence == 'USA_ONLY' ? 'USA' : 'Anywhere';

  return (
    <Box>
      <Typography variant="h3" className="hourly-preview-jobdescription">
        {title}
      </Typography>
      <Grid container mt={2} columnGap={'24px'}>
        <Grid>
          <Typography className="jobdescription-header" variant="subtitle2">
            {'Job Size'}
          </Typography>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Typography
              component={'div'}
              display={'flex'}
              className="jobdescription-value"
              variant="body2"
              mt={1}
              columnGap={'4px'}>
              {project_size}{' '}
              <Typography component={'span'} className="question-icon">
                <QuestionMarkOutlined />
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Typography className="jobdescription-header" variant="subtitle2">
            {'Expected Duration'}
          </Typography>
          <Typography color={'rgba(0, 0, 0, 0.38)'} variant="caption" mt={1}>
            {duration && projectDuration[duration]}
          </Typography>
        </Grid>
        <Grid>
          <Typography className="jobdescription-header" variant="subtitle2">
            {'Expertise Level'}
          </Typography>

          <Typography className="jobdescription-value" variant="body2" mt={1}>
            {getExpertiseLabel(
              expertise_is_beginner,
              expertise_is_intermediate,
              expertise_is_expert
            )}
          </Typography>
        </Grid>
        <Grid>
          <Typography className="jobdescription-header" variant="subtitle2">
            {'Location'}
          </Typography>
          <Typography color={'rgba(0, 0, 0, 0.38)'} variant="caption" mt={1}>
            {location}
          </Typography>
        </Grid>
        <Grid>
          <Box width={'70px'}>
            <Typography className="jobdescription-header" variant="subtitle2">
              {'Timezone'}
            </Typography>
            {timezone.map((time: string, index: number) => {
              return (
                <Typography
                  className="timezone-proposal"
                  key={time}
                  color={'rgba(0, 0, 0, 0.38)'}
                  variant="caption"
                  mt={1}>
                  {extractLocation(time)}
                </Typography>
              );
            })}
          </Box>
        </Grid>
        <Grid>
          <Typography className="jobdescription-header" variant="subtitle2">
            {'Budget'}
          </Typography>
          <Typography color={'rgba(0, 0, 0, 0.38)'} variant="caption" mt={1}>
            {budget}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreviewJobSpecs;
