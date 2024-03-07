import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import {
  Grid,
  Button,
  Typography,
  Box,
  Paper,
  Select,
  IconButton,
  TextField,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';
import { Input } from '../../../Common';
import { coder } from '../../validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { FromPropsI } from '../../type';
import './educationForm.css';
import UploadResume from './UploadResume';
import { Delete, EditOutlined } from '@mui/icons-material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const EducationForm = ({ setFormType }: FromPropsI) => {
  const {
    register,
    control,
    setValue,
    watch,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      education: [
        {
          university: '',
          college: '',
          passing_year: '',
          degree: ''
        }
      ],
      certificate: [{ certificate_name: '', year_of_completion: '' }]
    }
  });

  const [confirmedEducation, setConfirmedEducation] = useState<any[]>([]);
  const [confirmedCertification, setConfirmedCertification] = useState<any[]>([]);
  const [educationError, setEducationError] = useState<string>('');
  const [certificationError, setCertificationError] = useState<string>('');
  const {
    fields: educationFields,
    append: educationAppend,
    remove: educationRemove
  } = useFieldArray({ control, name: 'education' });
  const {
    fields: certificateFields,
    append: certificateAppend,
    remove: certificateRemove
  } = useFieldArray({ control, name: 'certificate' });

  const handleAddress = (e: any) => {
    e.preventDefault();
    if (confirmedCertification.length == 0 && confirmedEducation.length == 0) {
      setCertificationError('Please add certifications');
      setEducationError('Please add education');
    }
    if (confirmedCertification.length == 0) {
      setCertificationError('Please add certifications');
    }
    if (confirmedEducation.length == 0) {
      setEducationError('Please add education');
    }
    if (confirmedEducation.length > 0 && confirmedCertification.length > 0) {
      setValue('education', confirmedEducation);
      setValue('certificate', confirmedCertification);
      setCertificationError('');
      setCertificationError('');
      setFormType('address');
      // need to update when api works
      // setFormData(data, 'address');
    }
  };

  const handleFileUpload = (file: File | null) => {
    console.log('Uploaded file:', file);
  };
  const handlePortfolioUpload = (file: File | null) => {
    console.log('Uploaded file:', file);
  };

  const handleEducationRemove = (index: number) => {
    const newEducation = confirmedEducation.filter((item, i) => i !== index);
    setConfirmedEducation(newEducation);
  };
  const handleCertificationRemove = (index: number) => {
    const newCertification = confirmedCertification.filter((item, i) => i !== index);
    setConfirmedCertification(newCertification);
  };

  const handleEducationConfirm = (index: number) => {
    const currentEducation = getValues(`education.${index}`);
    if (
      currentEducation.university &&
      currentEducation.college &&
      currentEducation.degree &&
      currentEducation.passing_year
    ) {
      setConfirmedEducation((prevConfirmedEducation) => [
        ...prevConfirmedEducation,
        currentEducation
      ]);

      setValue(`education.${index}`, {
        university: '',
        college: '',
        degree: '',
        passing_year: ''
      });
      setEducationError('');
    }
  };

  const handleCertificationConfirm = (index: number) => {
    const currentCertification = getValues(`certificate.${index}`);
    if (currentCertification.certificate_name && currentCertification.year_of_completion) {
      setConfirmedCertification((prevConfirmedCertification) => [
        ...prevConfirmedCertification,
        currentCertification
      ]);

      setValue(`certificate.${index}`, {
        certificate_name: '',
        year_of_completion: ''
      });
      setCertificationError('');
    }
  };

  const handleCancelEducation = (index: number) => {
    setValue(`education.${index}`, {
      university: '',
      college: '',
      degree: '',
      passing_year: ''
    });
  };
  const handleCancelCertification = (index: number) => {
    setValue(`certificate.${index}`, {
      certificate_name: '',
      year_of_completion: ''
    });
  };

  const handleEditEducation = (index: number) => {
    const newEducation = confirmedEducation.filter((item, i) => i !== index);
    setConfirmedEducation(newEducation);
    setValue(`education.${0}`, confirmedEducation[index]);
  };
  const handleEditCertification = (index: number) => {
    const newCertification = confirmedCertification.filter((item, i) => i !== index);
    setConfirmedCertification(newCertification);
    setValue(`certificate.${0}`, confirmedCertification[index]);
  };

  return (
    <form onSubmit={(e) => handleAddress(e)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom align="left" fontSize={32}>
            Education Qualification
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="degree-section-header" mt={1.5} mb={4}>
            <Typography variant="h3" fontSize={20} pt={0.75}>
              Degree Details
            </Typography>
          </Grid>

          {educationFields.map((item, index) => (
            <Box key={item.id} mb={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Input
                    type="text"
                    id={`education.${index}.university`}
                    name={`education.${index}.university`}
                    label="University"
                    isRequired={false}
                    register={register}
                    error={errors}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Input
                    type="text"
                    id={`education.${index}.college`}
                    name={`education.${index}.college`}
                    label="college"
                    isRequired={false}
                    register={register}
                    error={errors}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    type="text"
                    id={`education.${index}.degree`}
                    name={`education.${index}.degree`}
                    label="Degree"
                    isRequired={false}
                    register={register}
                    error={errors}
                  />
                </Grid>
                <Grid className="passing-year-coder-select" item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel
                      id={`passing-year-label-${index}`}
                      className={
                        watch(`education.${index}.passing_year`) ? 'custom-focused-label' : ''
                      }>
                      Passing Year
                    </InputLabel>
                    <Select
                      labelId={`passing-year-label-${index}`}
                      id={`education.${index}.passing_year`}
                      {...register(`education.${index}.passing_year`)} // Register the input with react-hook-form
                      value={getValues(`education.${index}.passing_year`) || ''}
                      label="Passing Year"
                      className="passing-year-select-field"
                      placeholder="Passing Year"
                      variant="outlined"
                      MenuProps={{
                        PaperProps: {
                          className: 'custom-dropdown-menu'
                        }
                      }}>
                      {Array.from({ length: new Date().getFullYear() - 1959 }, (_, i) => (
                        <MenuItem key={i} value={1960 + i}>
                          {1960 + i}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {educationError && (
                <Box textAlign={'start'}>
                  <Typography variant="subtitle1" fontSize={12} color={'red'}>
                    {educationError}
                  </Typography>{' '}
                </Box>
              )}
              <Grid item xs={12} textAlign={'end'} mt={3}>
                <Button className="c-btn" onClick={() => handleCancelEducation(index)}>
                  Cancel
                </Button>

                <Button className="s-btn" onClick={() => handleEducationConfirm(index)}>
                  Confirm
                </Button>
              </Grid>
            </Box>
          ))}
        </Grid>

        <Box width={'inherit'}>
          {confirmedEducation.map((item: any, id: number) => {
            if (item?.university && item?.university?.trim() !== '') {
              return (
                <Box key={id} className="education-section">
                  <Box textAlign={'start'}>
                    <Typography variant="subtitle2" fontSize={14} textTransform={'capitalize'}>
                      {`${item?.degree} - ${item?.passing_year}`}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={14}
                      color={'rgba(0, 0, 0, 0.60)'}
                      textTransform={'capitalize'}>
                      {item?.university}
                    </Typography>
                  </Box>
                  <Box>
                    <EditOutlined
                      className="education-edit-icon"
                      onClick={() => handleEditEducation(id)}
                    />
                    <DeleteOutlineIcon
                      className="education-delete-icon"
                      onClick={() => handleEducationRemove(id)}
                    />
                  </Box>
                </Box>
              );
            }
            return null;
          })}
        </Box>

        <Grid item xs={12} mb={2}>
          <Grid item xs={12} className="degree-section-header">
            <Typography variant="h3" fontSize={20}>
              Certificate
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {certificateFields.map((item, index) => (
            <Box key={item.id} mb={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Input
                    type="text"
                    id={`certificate.${index}.certificate_name`}
                    name={`certificate.${index}.certificate_name`}
                    label="Certificate Name"
                    isRequired={false}
                    register={register}
                    error={errors}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel
                      id={`completion-year-label-${index}`}
                      className={
                        watch(`certificate.${index}.year_of_completion`)
                          ? 'custom-focused-label'
                          : ''
                      }>
                      Completion Year
                    </InputLabel>
                    <Select
                      labelId={`completion-year-label-${index}`}
                      id={`certificate.${index}.year_of_completion`}
                      {...register(`certificate.${index}.year_of_completion`)} // Register the input with react-hook-form
                      value={getValues(`certificate.${index}.year_of_completion`) || ''}
                      label="Completion Year"
                      className="completion-year-select-field"
                      placeholder="Completion Year"
                      variant="outlined"
                      MenuProps={{
                        PaperProps: {
                          className: 'custom-dropdown-menu'
                        }
                      }}>
                      {Array.from({ length: new Date().getFullYear() - 1959 }, (_, i) => (
                        <MenuItem key={i} value={1960 + i}>
                          {1960 + i}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                {index >= 1 && (
                  <Grid item xs={12} textAlign={'end'}>
                    <IconButton aria-label="delete" onClick={() => certificateRemove(index)}>
                      <Delete />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
              {certificationError && (
                <Box textAlign={'start'}>
                  <Typography variant="subtitle1" fontSize={12} color={'red'}>
                    {certificationError}
                  </Typography>{' '}
                </Box>
              )}
              <Grid item xs={12} textAlign={'end'} mt={3}>
                {certificateFields.length && (
                  <Button className="c-btn" onClick={() => handleCancelCertification(index)}>
                    Cancel
                  </Button>
                )}
                <Button className="s-btn" onClick={() => handleCertificationConfirm(index)}>
                  Confirm
                </Button>
              </Grid>
            </Box>
          ))}
        </Grid>

        <Box width={'inherit'}>
          {confirmedCertification.map((item: any, id: number) => {
            if (item?.certificate_name && item?.certificate_name.trim() !== '') {
              return (
                <Box key={id} className="education-section">
                  <Box textAlign={'start'}>
                    <Typography variant="subtitle2" fontSize={14} textTransform={'capitalize'}>
                      {item?.certificate_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={14}
                      color={'rgba(0, 0, 0, 0.60)'}
                      textTransform={'capitalize'}>
                      {item?.year_of_completion}
                    </Typography>
                  </Box>
                  <Box>
                    <EditOutlined
                      className="education-edit-icon"
                      onClick={() => handleEditCertification(id)}
                    />
                    <DeleteOutlineIcon
                      className="education-delete-icon"
                      onClick={() => handleCertificationRemove(id)}
                    />
                  </Box>
                </Box>
              );
            }
            return null;
          })}
        </Box>

        <Grid item xs={12} textAlign={'left'}>
          <UploadResume onFileUpload={handleFileUpload} onPortfolioUpload={handlePortfolioUpload} />
        </Grid>

        <Grid item xs={12} mt={4} textAlign={'end'}>
          <Button
            size="large"
            className="back---btn"
            onClick={() => {
              setFormType('skillsForm');
            }}>
            Back
          </Button>
          <Button type="submit" className="next-btn" size="large">
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EducationForm;
