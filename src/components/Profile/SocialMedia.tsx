import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Input } from '../Common';
import { useForm } from 'react-hook-form';

interface SocialMediaProps {
  isEdit?: boolean;
  toggleEditMode?: any;
}
export default function SocialMedia({ toggleEditMode, isEdit = false }: SocialMediaProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const updateFormData = () => {
    toggleEditMode();
  };
  return (
    <form onSubmit={handleSubmit(updateFormData)}>
      <Grid container direction="column" spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            LinkedIn
          </Typography>
        </Grid>
        {isEdit ? (
          <Input
            type="text"
            id="linkedIn"
            name="linkedIn"
            label="LinkedIn"
            isRequired={false}
            register={register}
            error={errors}
            defaultValue={'https://linkedin.com/profile'}
          />
        ) : (
          <Grid item xs={10} textAlign={'start'}>
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
              https://linkedin.com/profile
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid container direction="column" spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Github
          </Typography>
        </Grid>
        {isEdit ? (
          <Input
            type="text"
            id="github"
            name="github"
            label="Github"
            isRequired={false}
            register={register}
            error={errors}
            defaultValue={'  https://github.com/profile'}
          />
        ) : (
          <Grid item xs={10} textAlign={'start'}>
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
              https://github.com/profile
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid container direction="column" spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            StackOverFlow
          </Typography>
        </Grid>
        {isEdit ? (
          <Input
            type="text"
            id="stackoverflow"
            name="stackoverflow"
            label="StackOverflow"
            isRequired={false}
            register={register}
            error={errors}
            defaultValue={'https://stackoverflow.com/questions'}
          />
        ) : (
          <Grid item xs={10} textAlign={'start'}>
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
              https://stackoverflow.com/questions
            </Typography>
          </Grid>
        )}
      </Grid>
      {isEdit ? (
        <Grid container spacing={2} sx={{ mb: 8 }}>
          <Grid item xs={12} textAlign={'right'}>
            <Button type="submit" variant="contained">
              Update
            </Button>
          </Grid>
        </Grid>
      ) : null}
    </form>
  );
}
