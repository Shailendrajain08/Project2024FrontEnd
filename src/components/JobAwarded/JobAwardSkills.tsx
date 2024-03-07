import { Grid, Typography, Stack, Chip } from '@mui/material';

const JobAwardSkills = ({ skills }: any) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>Skills</Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={2}>
          {skills?.length ? (
            skills?.map((element: any, index: any) => (
              <Chip label={element?.skillName} color="primary" key={index} />
            ))
          ) : (
            <Typography variant="caption" display="block" gutterBottom>
              <i>No Skills Required</i>
            </Typography>
          )}
        </Stack>
      </Grid>
    </>
  );
};

export default JobAwardSkills;
