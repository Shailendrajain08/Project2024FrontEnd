import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Input, Select } from '../Common';
import { useForm } from 'react-hook-form';

interface AddressProps {
  isEdit?: boolean;
  toggleEditMode?: any;
}
export default function Address({ toggleEditMode, isEdit = false }: AddressProps) {
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
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={6}>
          <Grid container direction={'column'} spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Address Line 1
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={'start'}>
              {isEdit ? (
                <Input
                  type="text"
                  id="addressline1"
                  name="addressline1"
                  label="Address line 1"
                  isRequired={false}
                  register={register}
                  error={errors}
                  defaultValue={'Mr.Jack Ryan'}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Mr.Jack Ryan</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction={'column'} spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Address Line 2
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={'start'}>
              {isEdit ? (
                <Input
                  type="text"
                  id="addressline2"
                  name="addressline2"
                  label="Address line 2"
                  isRequired={false}
                  register={register}
                  error={errors}
                  defaultValue={'132,. My Street. LA'}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
                  132,. My Street. LA
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={3}>
          {' '}
          <Grid container direction={'column'} spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Country
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={'start'}>
              {isEdit ? (
                <Select
                  id="country"
                  name="country"
                  label="Country"
                  isRequired={false}
                  register={register}
                  defaultValue={'usa'}
                  error={errors}
                  options={[{ value: 'usa', label: 'USA' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>USA</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction={'column'} spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                State
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={'start'}>
              {isEdit ? (
                <Select
                  id="state"
                  name="state"
                  label="State"
                  isRequired={false}
                  register={register}
                  defaultValue={'newyork'}
                  error={errors}
                  options={[{ value: 'newyork', label: 'New York' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>New York</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction={'column'} spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                City
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={'start'}>
              {isEdit ? (
                <Select
                  id="city"
                  name="city"
                  label="City"
                  isRequired={false}
                  register={register}
                  defaultValue={'kingston'}
                  error={errors}
                  options={[{ value: 'kingston', label: 'Kingston' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Kingston</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction={'column'} spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Zip Code
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={'start'}>
              {isEdit ? (
                <Input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  label="Zipcode"
                  isRequired={false}
                  register={register}
                  error={errors}
                  defaultValue={' 12041'}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>12041</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
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
