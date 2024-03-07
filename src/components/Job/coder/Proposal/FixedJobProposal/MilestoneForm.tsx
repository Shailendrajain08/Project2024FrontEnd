import { Grid } from '@mui/material';

import { Input } from '../../../../Common';

interface IMilestoneForm {
  index: number;
  register: any;
  errors?: any;
}

const MilestoneForm = ({ index, register, errors }: IMilestoneForm) => {
  return (
    <Grid container mb={2} spacing={2}>
      <Grid item xs={6} md={3} textAlign={'start'}>
        <Input
          id={`milestone${index}`}
          name={`milestone${index}`}
          variant="outlined"
          register={register}
          type="text"
          label="Milestones"
          error={errors}
        />
      </Grid>
      <Grid item xs={6} md={3} textAlign={'start'}>
        <Input
          id={`description${index}`}
          name={`description${index}`}
          variant="outlined"
          register={register}
          type="text"
          label="Description"
          error={errors}
        />
      </Grid>
      <Grid item xs={6} md={3} textAlign={'start'}>
        <Input
          id={`time${index}`}
          name={`time${index}`}
          variant="outlined"
          register={register}
          type="number"
          label="Time"
          inputProps={{
            min: 0
          }}
          error={errors}
        />
      </Grid>
      <Grid item xs={6} md={3} textAlign={'start'}>
        <Input
          id={`fundsReleased${index}`}
          name={`fundsReleased${index}`}
          variant="outlined"
          register={register}
          type="number"
          label="Funds Released"
          inputAdornmentText="$"
          inputProps={{
            min: 0
          }}
          error={errors}
        />
      </Grid>
    </Grid>
  );
};

export default MilestoneForm;
