import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Input, Select, MultilineTextField } from '../Common';
import { useForm } from 'react-hook-form';

interface SkillsProps {
  isEdit?: boolean;
  toggleEditMode?: any;
}
export default function Skills({ toggleEditMode, isEdit = false }: SkillsProps) {
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
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Introduction
          </Typography>
        </Grid>
        <Grid item xs={10} textAlign={'start'}>
          {isEdit ? (
            <MultilineTextField
              id="introduction"
              name="introduction"
              label="Introduction"
              register={register}
              error={errors}
              defaultValue={
                'This worked very well for me for centering a Material-UI component. As an add-on, in the translate method, the firstparameter is the horizontal translation and the second is the vertical translation.his worked very well for me for centering a Material-UI component. As an add-on, in the translate method, the first parameter is the horizontal translation and the second is the vertical translation.'
              }
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
              This worked very well for me for centering a Material-UI component. As an add-on, in
              the translate method, the first parameter is the horizontal translation and the second
              is the vertical translation.his worked very well for me for centering a Material-UI
              component. As an add-on, in the translate method, the first parameter is the
              horizontal translation and the second is the vertical translation.
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item xs={4} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Technology
              </Typography>
            </Grid>
            <Grid item xs={4} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Experience
              </Typography>
            </Grid>
            <Grid item xs={4} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Expertise Level
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Primary tech
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={2} textAlign={'start'}>
            <Grid item xs={4}>
              {isEdit ? (
                <Select
                  id="primaryTechnology"
                  name="primaryTechnology"
                  label="Technology"
                  isRequired={false}
                  register={register}
                  defaultValue={''}
                  error={errors}
                  options={[{ value: 'react', label: 'React' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Java</Typography>
              )}
            </Grid>
            <Grid item xs={4} textAlign={'start'}>
              {isEdit ? (
                <Select
                  id="primaryYearOfExperience"
                  name="primaryYearOfExperience"
                  label="Years of Exp."
                  isRequired={false}
                  register={register}
                  defaultValue={''}
                  error={errors}
                  options={[{ value: '5', label: '5' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>6</Typography>
              )}
            </Grid>
            <Grid item xs={4} textAlign={'start'}>
              {isEdit ? (
                <Select
                  id="primaryExpertiseLevel"
                  name="primaryExpertiseLevel"
                  label="Expertise Level"
                  isRequired={false}
                  register={register}
                  defaultValue={''}
                  error={errors}
                  options={[{ value: 'expert', label: 'Expert' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Expert</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Secondary tech
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item xs={4} textAlign={'start'}>
              {isEdit ? (
                <Select
                  id="secondaryTechnology"
                  name="secondaryTechnology"
                  label="Technology"
                  isRequired={false}
                  register={register}
                  defaultValue={''}
                  error={errors}
                  options={[{ value: 'react', label: 'React' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Angular</Typography>
              )}
            </Grid>
            <Grid item xs={4} textAlign={'start'}>
              {isEdit ? (
                <Select
                  id="secondaryYearOfExperience"
                  name="secondaryYearOfExperience"
                  label="Years of Exp."
                  isRequired={false}
                  register={register}
                  defaultValue={''}
                  error={errors}
                  options={[{ value: '5', label: '5' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>3</Typography>
              )}
            </Grid>
            <Grid item xs={4} textAlign={'start'}>
              {isEdit ? (
                <Select
                  id="secondaryExpertiseLevel"
                  name="secondaryExpertiseLevel"
                  label="Expertise Level"
                  isRequired={false}
                  register={register}
                  defaultValue={''}
                  error={errors}
                  options={[{ value: 'expert', label: 'Expert' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Intermediate</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Other tech
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={2} textAlign={'start'}>
            {otherSkills.map((element, index) => (
              <>
                <Grid item xs={4}>
                  {isEdit ? (
                    <Select
                      id="technology"
                      name="technology"
                      label="Technology"
                      isRequired={false}
                      register={register}
                      defaultValue={''}
                      error={errors}
                      options={[{ value: 'react', label: 'React' }]}
                    />
                  ) : (
                    <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Java</Typography>
                  )}
                </Grid>
                <Grid item xs={4} textAlign={'start'}>
                  {isEdit ? (
                    <Select
                      id="year_of_experience"
                      name="year_of_experience"
                      label="Years of Exp."
                      isRequired={false}
                      register={register}
                      defaultValue={''}
                      error={errors}
                      options={[{ value: '5', label: '5' }]}
                    />
                  ) : (
                    <Typography sx={{ fontSize: 15, textAlign: 'left' }}>6</Typography>
                  )}
                </Grid>
                <Grid item xs={4} textAlign={'start'}>
                  {isEdit ? (
                    <Select
                      id="expertise_level"
                      name="expertise_level"
                      label="Expertise Level"
                      isRequired={false}
                      register={register}
                      defaultValue={''}
                      error={errors}
                      options={[{ value: 'expert', label: 'Expert' }]}
                    />
                  ) : (
                    <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Expert</Typography>
                  )}
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Total Experience
          </Typography>
        </Grid>
        <Grid item xs={10} textAlign={'start'}>
          {isEdit ? (
            <Input
              type="text"
              id="total_experience"
              name="total_experience"
              label="Total Experience"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={'9 years 6 months'}
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>9 years 6 months</Typography>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Brief About Yourself
          </Typography>
        </Grid>
        <Grid item xs={10} textAlign={'start'}>
          {isEdit ? (
            <MultilineTextField
              id="brief_about_yourself"
              name="brief_about_yourself"
              label="Brief About Yourself"
              register={register}
              error={errors}
              defaultValue={
                'This worked very well for me for centering a Material-UI component. As an add-on, in the translate method, the firstparameter is the horizontal translation and the second is the vertical translation.his worked very well for me for centering a Material-UI component. As an add-on, in the translate method, the first parameter is the horizontal translation and the second is the vertical translation.'
              }
            />
          ) : (
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>
              This worked very well for me for centering a Material-UI component. As an add-on, in
              the translate method, the first parameter is the horizontal translation and the second
              is the vertical translation.his worked very well for me for centering a Material-UI
              component. As an add-on, in the translate method, the first parameter is the
              horizontal translation and the second is the vertical translation.
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
