import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { Grid, Button, Typography, IconButton, Tooltip, Box } from '@mui/material';
import { Input, Autocomplete, MultilineTextField, FileInput, Select } from '../../../../Common';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { coder } from '../../../validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './index.css';
import FileUpload from '../../../../Common/Input/ChooseFile';
import { Delete, EditOutlined } from '@mui/icons-material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SnackBarComponent from '../../../../Common/SnackBar';
import { RootState } from '../../../../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllTechnology,
  saveSelectedSkill,
  saveSkillsExperience,
  resetError
} from '../../../../../store/actions/jobPost';
import { jobPostState } from '../../../../types';

interface AddressDetailProps {
  formType: string;
  setFormType: any;
}

interface Skill {
  technology: string;
  tech_experience: string;
  expertise: string;
}

const SkillsForm = ({ setFormType }: AddressDetailProps) => {
  const {
    register,
    control,
    getValues,
    handleSubmit,

    formState: { errors }
  } = useForm({
    defaultValues: {
      otherSkills: [
        {
          technology: '',
          tech_experience: '',
          expertise: ''
        }
      ]
    },
    resolver: yupResolver(coder.skillsForm)
  });
  const dispatch = useDispatch();
  const [activeIndex, setActiveindex] = useState<number>();

  const [isError, setIsError] = React.useState(false);
  const jobPostSelector = useSelector((state: RootState) => state?.jobPost);
  const { technologies, error, loading } = jobPostSelector as jobPostState;

  const [primarySkills, updatePrimarySkills] = useState<any[]>([]);
  const [secondarySkills, updateSecondarySkills] = useState<any[]>([]);
  const [otherSkills, updateOtherSkills] = useState<any[]>([]);

  const [nextButtonCalled, updateNextButtonCalled] = useState<boolean>(false);

  const createDataForSkillsDropDown = () => {
    const skillsArr: any[] = [];
    if (technologies && technologies.length) {
      technologies.map((d: any) => {
        if (d.is_approved) {
          skillsArr.push({
            value: d.id,
            label: d.name
          });
        }
      });
      updatePrimarySkills(skillsArr);
      updateSecondarySkills(skillsArr);
      updateOtherSkills(skillsArr);
    }
  };

  useEffect(() => {
    createDataForSkillsDropDown();
  }, [technologies]);

  useEffect(() => {
    if (error) {
      setIsError(true);
      updateNextButtonCalled(false);
    }
    setTimeout(() => {
      dispatch(resetError());
    }, 5000);
  }, [error]);

  const {
    fields,
    append,
    remove: skillsRemove
  } = useFieldArray({
    control,
    name: 'otherSkills'
  });

  const saveSkills = async (data: any) => {
    const {
      primaryTechnology,
      primaryYearOfExperience,
      primaryExpertiseLevel,
      secondaryTechnology,
      secondaryYearOfExperience,
      secondaryExpertiseLevel,
      otherSkills,
      self_details,
      total_years_of_experience,
      roles,
      work_experience,
      hourlyPrice
    } = data;
    const payloadPrimary = {
      technology: primaryTechnology,
      years_of_experience: Number(primaryYearOfExperience),
      skill_type: 'PRIMARY',
      expertise_level: primaryExpertiseLevel
    };

    dispatch(saveSelectedSkill(payloadPrimary));
    if (secondaryTechnology) {
      const payloadSecondary = {
        technology: secondaryTechnology,
        years_of_experience: Number(secondaryYearOfExperience),
        skill_type: 'SECONDARY',
        expertise_level: secondaryExpertiseLevel
      };
      dispatch(saveSelectedSkill(payloadSecondary));
    }
    if (otherSkills && otherSkills.length && otherSkills[0].technology) {
      for (let k = 0; k < otherSkills.length; k++) {
        const payloadOtherSkill = {
          technology: otherSkills[k].technology,
          years_of_experience: Number(otherSkills[k].tech_experience),
          skill_type: 'OTHER',
          expertise_level: otherSkills[k].expertise
        };

        dispatch(saveSelectedSkill(payloadOtherSkill));
      }
    }
    const payload = {
      introduction: self_details,
      total_years_of_experience,
      identity: roles,
      brief_work_experience: work_experience,
      hourly_rate: hourlyPrice
      //profile_picture:
    };
    dispatch(saveSkillsExperience(payload));
    updateNextButtonCalled(true);
  };
  useEffect(() => {
    if (nextButtonCalled) {
      setFormType('educationForm');
      updateNextButtonCalled(false);
    }
  }, [nextButtonCalled]);

  const onFileUpload = (file: any) => {
    console.log('Selected file:', file);
  };

  const onAddMoreClick = () => {
    append({ technology: '', tech_experience: '', expertise: '' });
  };

  const handleOtherSkillRemove = (index: number) => {
    setActiveindex(index);
    handleSkillRemove(index);
  };

  const handleSkillRemove = (index: number) => {
    const updatedSkills: Skill[] = (getValues('otherSkills') || []).map(
      (item: any, id: number) => ({
        technology: item?.technology || '',
        tech_experience: item?.tech_experience || '',
        expertise: item?.expertise || ''
      })
    );

    if (fields.length > 1) {
      // If it's not the last item, remove it from the UI and the array
      updatedSkills.splice(index, 1);
      skillsRemove(index);
    } else {
      // If it's the last item, clear the values instead of removing it
      updatedSkills[index] = {
        technology: '',
        tech_experience: '',
        expertise: ''
      };
      setActiveindex(index);
      // setValue('otherSkills', updatedSkills);
    }
  };
  useEffect(() => {
    dispatch(getAllTechnology());
  }, []);

  // This will be use to filther the data
  // const handleChange = async (e: any, type: string) => {
  //   if (type === 'primarySkill') {
  //     updateSelectedPrimarySkill(e.target.value);

  //     const index = secondarySkills.findIndex((d) => d.value === e.target.value);
  //     const secondarySkillsClone = secondarySkills;

  //     if (index > -1) {
  //       secondarySkillsClone.splice(index, 1);
  //       updateSecondarySkills(secondarySkillsClone);
  //     }
  //     const indexOtherSkill = otherSkills.findIndex((d) => d.value === e.target.value);
  //     const otherSkillsClone = otherSkills;
  //     if (indexOtherSkill > -1) {
  //       otherSkillsClone.splice(indexOtherSkill, 1);
  //       updateOtherSkills(otherSkillsClone);
  //     }
  //   }
  // };

  const renderOptions = () => {
    const expYear = [];
    const expertise = [
      { value: 'BEGINNER', label: 'BEGINNER' },
      { value: 'INTERMEDIATE', label: 'INTERMEDIATE' },
      { value: 'EXPERT', label: 'EXPERT' }
    ];
    for (let k = 5; k <= 20; k++) {
      expYear.push({
        value: k,
        label: k
      });
    }
    return {
      expYear,
      expertise
    };
  };
  const { expYear, expertise } = renderOptions();

  return (
    <form onSubmit={handleSubmit(saveSkills)}>
      <Box className="skill-form-container">
        <Box mb={5}>
          <Typography variant="h1" gutterBottom align="left" fontSize={32}>
            Skills and Experience
          </Typography>
        </Box>
        <Box>
          <MultilineTextField
            id="self_details"
            name="self_details"
            label="Introduce Yourself"
            register={register}
            placeholder="Text"
            error={errors}
            defaultValue={''}
            helperText="Max. 1000 Character"
          />
        </Box>
        <Box className="field-section">
          <Box className="primary-field-container" mt={3}>
            <Box className="primary-heading">
              {' '}
              <Box className="suggestion-box">
                <Typography variant="h3" fontSize={20} gutterBottom align="left">
                  Primary Skill{' '}
                  <Box className="coder-registration-help-svg" component="span" color="#14A800">
                    {' '}
                    * <HelpOutlineIcon />
                  </Box>
                </Typography>
              </Box>
            </Box>
            <Box className="primary-field-wrapper">
              <Select
                id="primaryTechnology"
                name="primaryTechnology"
                label="Technology"
                isRequired={false}
                register={register}
                defaultValue={''}
                error={errors}
                options={primarySkills}
              />
              <Select
                id="primaryYearOfExperience"
                name="primaryYearOfExperience"
                label="Years of Exp."
                isRequired={false}
                register={register}
                defaultValue={''}
                error={errors}
                options={expYear}
              />
              <Select
                id="primaryExpertiseLevel"
                name="primaryExpertiseLevel"
                label="Expertise Level"
                isRequired={false}
                register={register}
                defaultValue={''}
                error={errors}
                options={expertise}
              />
            </Box>
          </Box>
          <Box className="secondary-field-container">
            <Box className="secondary-heading">
              {' '}
              <Typography variant="h3" fontSize={20} gutterBottom align="left">
                Secondary Skill
                <Box className="coder-registration-help-svg" component="span" color="#14A800">
                  {' '}
                  <HelpOutlineIcon />
                </Box>
              </Typography>
            </Box>
            <Box className="secondary-field-wrapper">
              <Select
                id="secondaryTechnology"
                name="secondaryTechnology"
                label="Technology"
                isRequired={false}
                register={register}
                defaultValue={''}
                error={errors}
                options={secondarySkills}
              />
              <Select
                id="secondaryYearOfExperience"
                name="secondaryYearOfExperience"
                label="Years of Exp."
                isRequired={false}
                register={register}
                defaultValue={''}
                error={errors}
                options={expYear}
              />
              <Select
                id="secondaryExpertiseLevel"
                name="secondaryExpertiseLevel"
                label="Expertise Level"
                isRequired={false}
                register={register}
                defaultValue={''}
                error={errors}
                options={expertise}
              />
            </Box>
          </Box>
          <Box className="other-field-container">
            <Box className="other-tech-heading">
              {' '}
              <Typography
                variant="h5"
                fontSize={'18px'}
                fontWeight={500}
                lineHeight={'25.2px'}
                align="left">
                Other Technical Skills
                <Box className="coder-registration-help-svg" component="span" color="#14A800">
                  {' '}
                  <HelpOutlineIcon />
                </Box>
              </Typography>
              <Button onClick={onAddMoreClick}>ADD MORE</Button>
            </Box>
            {fields.map((item, index) => (
              <Box key={item.id} mt={3}>
                <Box className="other-field-wrapper">
                  <Select
                    id={`otherSkills.${index}.technology`}
                    name={`otherSkills.${index}.technology`}
                    label="Technology"
                    isRequired={false}
                    register={register}
                    defaultValue={''}
                    error={errors}
                    options={otherSkills}
                  />
                  <Select
                    id={`otherSkills.${index}.tech_experience`}
                    name={`otherSkills.${index}.tech_experience`}
                    label="Years of Exp."
                    isRequired={false}
                    register={register}
                    defaultValue={''}
                    error={errors}
                    options={expYear}
                  />
                  <Select
                    id={`otherSkills.${index}.expertise`}
                    name={`otherSkills.${index}.expertise`}
                    label="Expertise Level"
                    isRequired={false}
                    register={register}
                    defaultValue={''}
                    error={errors}
                    options={expertise}
                  />
                </Box>
                <Grid item xs={12} textAlign={'end'} mt={1}>
                  {fields.length > 1 && item?.technology && (
                    <DeleteOutlineIcon
                      className="other-skill-delete-icon"
                      onClick={() => handleOtherSkillRemove(index)}
                    />
                  )}
                </Grid>
              </Box>
            ))}
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="flex-end"
              sx={{ paddingTop: '8px' }}
              className="grid-wrapper"></Grid>
          </Box>
          <Box className="skill-field-container">
            <Input
              type="number"
              id="total_years_of_experience"
              name="total_years_of_experience"
              label="Total Years Of Experience *"
              isRequired={true}
              register={register}
              error={errors}
              defaultValue={''}
              inputProps={{
                min: 0,
                max: 60
              }}
            />
            <Select
              id="roles"
              name="roles"
              label="How would you like to identified *"
              isRequired={false}
              register={register}
              error={errors}
              defaultValue={''}
              options={[{ value: 'backenddevelover', label: 'Backend Developer' }]}
            />
            <Input
              id="hourlyPrice"
              name="hourlyPrice"
              label="Hourly Rate*"
              type="text"
              placeholder="$80"
              register={register}
              error={errors}
              isRequired={false}
              size="medium"
              endAdornmentLabel="|  USD"
            />
          </Box>
        </Box>
        <MultilineTextField
          id="work_experience"
          name="work_experience"
          label="Brief about your work experience *"
          register={register}
          error={errors}
          defaultValue={''}
          helperText="Max. 1000 Character"
        />
        <Box mt={3}>
          <FileUpload onFileUpload={onFileUpload} />
        </Box>
        <Box className="skill-btn-wrapper">
          <Box className="handle-btn">
            <Box>
              <Button type="submit" variant="contained" size="large">
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {error && isError && (
        <SnackBarComponent
          isOpen={isError}
          isClose={() => setIsError(false)}
          message={error}
          messageType="error"
        />
      )}
    </form>
  );
};

export default SkillsForm;
