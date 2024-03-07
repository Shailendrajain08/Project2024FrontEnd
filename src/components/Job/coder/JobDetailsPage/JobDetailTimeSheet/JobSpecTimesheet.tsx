import { QuestionMarkOutlined } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';

interface IJobSpecification {
  title?: string;
  project_size: string;
  description?: string;
  duration: string;
  expertise: any;
  isUsaProject: any;
  timezone: string;
  fixedMaxPrice?: number | null;
  hourlyMaxPrice?: number | null;
  hourlyMinPrice?: number | null;
}

const JobSpecTimesheet = ({
  title,
  project_size,
  description,
  duration,
  expertise,
  isUsaProject,
  timezone,
  fixedMaxPrice,
  hourlyMaxPrice,
  hourlyMinPrice
}: IJobSpecification) => {
  const budget = fixedMaxPrice
    ? `$${fixedMaxPrice}`
    : `$${hourlyMinPrice} - $${hourlyMaxPrice}/hour`;
  const location = isUsaProject ? 'USA' : 'Anywhere';

  return (
    <Box>
      <Typography variant="subtitle1" className="hourly-preview-jobdescription">
        {title}
      </Typography>
      <Grid container mt={2} columnGap={'28px'}>
        <Grid>
          <Typography className="jobdescription-header" variant="body2">
            {'Job Size'}
          </Typography>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Typography
              component={'div'}
              display={'flex'}
              className="jobdescription-value"
              variant="caption"
              mt={'4px'}
              columnGap={'4px'}>
              {project_size}{' '}
              <Typography className="question-mark-box">
                <QuestionMarkOutlined />
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Typography className="jobdescription-header" variant="body2">
            {'Expected Duration'}
          </Typography>
          <Typography className="jobdescription-value" variant="caption" mt={1}>
            {duration}
          </Typography>
        </Grid>
        <Grid>
          <Typography className="jobdescription-header" variant="body2">
            {'Expertise Level'}
          </Typography>
          <Typography className="jobdescription-value" variant="caption" mt={1}>
            {expertise}
          </Typography>
        </Grid>
        <Grid>
          <Typography className="jobdescription-header" variant="body2">
            {'Location'}
          </Typography>
          <Typography className="jobdescription-value" variant="caption" mt={1}>
            {location}
          </Typography>
        </Grid>
        <Grid>
          <Typography className="jobdescription-header" variant="body2">
            {'Timezone'}
          </Typography>
          <Typography className="jobdescription-value" variant="caption" mt={1}>
            {timezone}
          </Typography>
        </Grid>
        <Grid>
          <Typography className="jobdescription-header" variant="body2">
            {'Budget'}
          </Typography>
          <Typography className="jobdescription-value" variant="caption" mt={1}>
            {budget}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobSpecTimesheet;
