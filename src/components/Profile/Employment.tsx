import React from 'react';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { Input } from '../Common';
import { useForm } from 'react-hook-form';

interface EmploymentProps {
  isEdit?: boolean;
  toggleEditMode?: any;
}

export default function Employment({ toggleEditMode, isEdit = false }: EmploymentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [otherSkills, setOtherSkills] = React.useState(['text', 'text']);

  const updateFormData = () => {
    toggleEditMode();
  };
  return (
    <form onSubmit={handleSubmit(updateFormData)}>
      <Grid container spacing={2} sx={{ mt: 4, mb: 8 }}>
        <Grid item xs={6} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Company
          </Typography>
          {isEdit ? (
            <Input
              type="text"
              id="company1"
              name="company1"
              label="Company"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={'HireCoder'}
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>HireCoder</Typography>
          )}
        </Grid>
        <Grid item xs={6} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Position
          </Typography>
          {isEdit ? (
            <Input
              type="text"
              id="position1"
              name="position1"
              label="Position"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={'Senior Software Engineer'}
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
              Senior Software Engineer
            </Typography>
          )}
        </Grid>
        <Grid item xs={6} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Start Date
          </Typography>
          {isEdit ? (
            <Input
              type="date"
              id="startdate1"
              name="startdate1"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={'07/07/2022'}
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>07/07/2022</Typography>
          )}
        </Grid>
        <Grid item xs={6} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            End Date
          </Typography>
          {isEdit ? (
            <Input
              type="date"
              id="endDate1"
              name="endDate1"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={'07/07/2023'}
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>07/07/2023</Typography>
          )}
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={2} sx={{ mt: 4, mb: 8 }}>
        <Grid item xs={6} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold' }}>
            Company
          </Typography>
          {isEdit ? (
            <Input
              type="text"
              id="company2"
              name="company2"
              label="Company"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={'Java R and D'}
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Java R and D</Typography>
          )}
        </Grid>
        <Grid item xs={6} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold' }}>
            Position
          </Typography>
          {isEdit ? (
            <Input
              type="text"
              id="position2"
              name="position2"
              label="Position"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={'Senior Software Engineer'}
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
              Senior Software Engineer
            </Typography>
          )}
        </Grid>
        <Grid item xs={6} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold' }}>
            Start Date
          </Typography>
          {isEdit ? (
            <Input
              type="date"
              id="startdate2"
              name="startdate2"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={'07/07/2022'}
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>07/07/2022</Typography>
          )}
        </Grid>
        <Grid item xs={6} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold' }}>
            End Date
          </Typography>
          {isEdit ? (
            <Input
              type="date"
              id="endDate2"
              name="endDate2"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={'07/07/2023'}
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>07/07/2023</Typography>
          )}
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
