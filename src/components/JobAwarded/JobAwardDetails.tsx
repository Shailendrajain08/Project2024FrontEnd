import { Grid, Typography } from '@mui/material';

const JobAwardDetails = ({ details }: any) => {
  if (!details?.length) return null;
  return (
    <>
      {details?.map((element: any, index: any) => (
        <Grid item xs={2} key={index}>
          <Typography sx={{ fontSize: 16, color: 'blue' }} gutterBottom>
            {element?.featureName}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {element?.featureValue}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

export default JobAwardDetails;
