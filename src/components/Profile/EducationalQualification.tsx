import React from 'react';
import { Divider, Grid, Typography, Button } from '@mui/material';
import { Input, Select } from '../Common';
import { useForm } from 'react-hook-form';

interface EducationalProps {
  isEdit?: boolean;
  toggleEditMode?: any;
}
export default function EducationalQualification({
  toggleEditMode,
  isEdit = false
}: EducationalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [education, setEducation] = React.useState([
    { id: 1, university: '', passing_year: '', degree: '', college: '' }
  ]);
  const [certification, setCertification] = React.useState([
    { id: 1, certificate_name: '', year_of_completion: '' }
  ]);
  const updateFormData = () => {
    toggleEditMode();
  };
  return (
    <form onSubmit={handleSubmit(updateFormData)}>
      {education.map((val, index) => (
        <>
          <Grid container spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                University
              </Typography>
              {isEdit ? (
                <Input
                  type="text"
                  id={`university${val.id}`}
                  name={`university${val.id}`}
                  label="University"
                  isRequired={false}
                  register={register}
                  error={errors}
                  defaultValue={' Saint Louis University'}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
                  Saint Louis University
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Degree
              </Typography>
              {isEdit ? (
                <Input
                  type="text"
                  id={`degree${val.id}`}
                  name={`degree${val.id}`}
                  label="Degree"
                  isRequired={false}
                  register={register}
                  error={errors}
                  defaultValue={' Bsc Mathematics'}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Bsc Mathematics</Typography>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                College
              </Typography>
              {isEdit ? (
                <Input
                  type="text"
                  id={`college${val.id}`}
                  name={`college${val.id}`}
                  label="Colllege"
                  isRequired={false}
                  register={register}
                  error={errors}
                  defaultValue={'College of Arts and Science'}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
                  College of Arts and Science
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Year of Passing
              </Typography>
              {isEdit ? (
                <Select
                  id={`passing_year${val.id}`}
                  name={`passing_year${val.id}`}
                  label="Passing Year"
                  isRequired={false}
                  register={register}
                  defaultValue={''}
                  error={errors}
                  options={[{ value: '2000', label: '2000' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>2014</Typography>
              )}
            </Grid>
          </Grid>
          {education?.length !== index + 1 ? <Divider sx={{ mb: 3 }} /> : null}
        </>
      ))}
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={12} alignContent={'center'}>
          <Typography sx={{ fontSize: 17, fontWeight: '900' }}>Certifications</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={12} textAlign={'start'}>
          {isEdit ? (
            <Input
              type="text"
              id={`certification1`}
              name={`certification1`}
              label="Certification"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={'Chef certification completed in 2016'}
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
              {' '}
              Chef certification <b>completed</b> in 2016
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} textAlign={'start'}>
          {isEdit ? (
            <Input
              type="text"
              id={`certification2`}
              name={`certification2`}
              label="Certification"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={'Puppet professional certification completed in 2017'}
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
              {' '}
              Puppet professional certification <b>completed</b> in 2017
            </Typography>
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
