import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Input } from '../Common';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { forgotPasswordAction } from '../../store/actions/forgotPassword';

interface SecurityProps {
  isEdit?: boolean;
  toggleEditMode?: any;
}
export default function Security({ toggleEditMode, isEdit = false }: SecurityProps) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const dispatch = useDispatch();

  const updateFormData = (data: any) => {
    dispatch(forgotPasswordAction(data));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(updateFormData)}>
      <Grid container direction="column" spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Old Password
          </Typography>
        </Grid>
        <Grid item xs={10} textAlign={'start'}>
          <Input
            type="text"
            id="oldPassword"
            name="oldPassword"
            label="Old Password"
            isRequired={true}
            register={register}
            error={errors}
            defaultValue={''}
          />
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            New Password(Minimum 8 characters with one number and one special character)
          </Typography>
        </Grid>
        <Grid item xs={10} textAlign={'start'}>
          <Input
            type="text"
            id="newPassword"
            name="newPassword"
            label="New Password"
            isRequired={true}
            register={register}
            error={errors}
            defaultValue={''}
          />
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Confirm New Password(Minimum 8 characters with one number and one special character)
          </Typography>
        </Grid>
        <Grid item xs={10} textAlign={'start'}>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            isRequired={true}
            register={register}
            error={errors}
            defaultValue={''}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={12} textAlign={'right'}>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
