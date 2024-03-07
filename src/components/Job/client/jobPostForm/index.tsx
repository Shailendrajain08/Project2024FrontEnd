import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Typography, Box, Container, Snackbar, Alert, IconButton, capitalize } from '@mui/material';
import JobDetails from './components/JobDetail';
import JobSize from './components/JobSize';
import JobBudget from './components/JobBudget';
import JobLocation from './components/JobLocation';
import JobFormPreview from './components/JobFormPreview';
import { jopPostPayload, setJobForm } from '../../utils';
import { jobFormsData } from '../../constant';
import {
  jobSchema,
  jobPostBudgetSchema,
  jobPostLocationSchema
} from '../../../../helper/validation/jobSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { IJobFormProps, JobPostFormDataI } from '../../type';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { useDispatch } from 'react-redux';
import {
  clearJobPostData,
  createJobPost,
  getAllTechnology,
  updateJobPost
} from '../../../../store/actions/jobPost';
import { useNavigate } from 'react-router-dom';
import { CloseIcon } from '../../../../assets/svg';
import { SpinnerLoader } from '../../../Common';
import { setTechnologyAction } from '../../../../store/actions/technology';
import './index.css';
import { jobPostState } from '../../../types';

const JobPostForm = () => {
  const [formType, setFormType] = React.useState<string>('jobDetails');
  const [formPageCount, setFormPageCount] = React.useState<number>(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobPostSelector = useSelector((state: RootState) => state?.jobPost);
  const {
    loading,
    technologies,
    jobCreatedSuccessfully,
    jobPostdata = {},
    updateJobData,
    jobCreationError
  } = jobPostSelector as jobPostState;

  const schema: any =
    formType === 'jobBudget'
      ? jobPostBudgetSchema
      : formType === 'jobLocation'
        ? jobPostLocationSchema
        : jobSchema;
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    control,
    clearErrors,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });
  const JobPostFormData = React.useMemo(() => getValues(), [watch()]);
  useEffect(() => {
    if (technologies.length === 0) getSkills();
  }, [technologies]);

  useEffect(() => {
    if (jobCreatedSuccessfully && Object.keys(jobPostdata).length > 0) {
      setTimeout(() => navigate('/invitecoder', { state: { flag: true } }), 1000);
      dispatch(clearJobPostData());
    }
  }, [jobCreatedSuccessfully]);

  const handleJobPostForm = async (data: JobPostFormDataI) => {
    if (formType === 'jobFormPreview') {
      const payload = await jopPostPayload(data);
      dispatch(createJobPost(payload));
    } else {
      setJobForm(formType, setFormType, setFormPageCount);
    }
  };

  const getSkills = useCallback(() => {
    dispatch(getAllTechnology());
  }, [jobPostSelector]);

  const handleCloseSuccessMessage = () => {
    dispatch(clearJobPostData());
  };
  // need to be replaced when api integration
  const jobTitle: any = {
    jobDetails: {
      title: 'Lets start with a job title to explain  your job requirement'
    },
    jobSize: {
      title: 'Lets start to explain the size of the Job'
    },
    jobBudget: {
      title: 'Lets start to explain how would you like to pay'
    },
    jobLocation: {
      title: 'Lets start to explain where should coder reside'
    },
    jobFormPreview: {
      title: 'Preview Job Listing'
    }
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSuccessMessage}>
        <CloseIcon />
      </IconButton>
    </React.Fragment>
  );

  const jobFormProps: IJobFormProps = {
    register,
    getValues,
    errors,
    formType,
    setFormType,
    setValue,
    watch,
    JobPostFormData,
    control,
    clearErrors,
    setFormPageCount,
    jobPostSelector,
    isRequired: true
  };
  return (
    <Box className="Job-post-container">
      {loading ? (
        <Box width={1} display="flex" justifyContent="center" alignItems="center">
          {' '}
          <SpinnerLoader />
        </Box>
      ) : (
        <Fragment>
          {' '}
          <Container>
            <Box className="Job-post-wrapper">
              <Box className="job-post-form-wrapper">
                <Box className="left-wrapper">
                  <Box className="step-count-container">
                    <Typography variant="overline" className="step-count">
                      {`Step ${formPageCount} of 5`}
                    </Typography>
                  </Box>
                  {formType && (
                    <Box>
                      <Box className="job-form-data-wrapper">
                        <Typography variant="h1" textAlign="start" className="jobForm-heading">
                          {jobTitle[formType]['title']}
                        </Typography>
                        <Typography
                          variant="body1"
                          gutterBottom
                          className="jobForm-desc"
                          textAlign="justify">
                          {jobFormsData.description}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box className="right-wrapper">
                  <form onSubmit={handleSubmit(handleJobPostForm)}>
                    {formType === 'jobDetails' && <JobDetails {...jobFormProps} />}
                    {formType === 'jobSize' && <JobSize {...jobFormProps} />}
                    {formType === 'jobBudget' && <JobBudget {...jobFormProps} />}
                    {formType === 'jobLocation' && <JobLocation {...jobFormProps} />}
                    {formType === 'jobFormPreview' && <JobFormPreview {...jobFormProps} />}
                  </form>
                </Box>
              </Box>
            </Box>
          </Container>
          <Snackbar
            open={jobCreatedSuccessfully}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleCloseSuccessMessage}
            action={action}
            className="job-post-form--snackbar">
            <Alert onClose={handleCloseSuccessMessage} severity="success">
              Job created successfully.
            </Alert>
          </Snackbar>
          <Snackbar
            open={jobCreationError}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleCloseSuccessMessage}
            action={action}
            className="job-post-form--snackbar">
            <Alert onClose={handleCloseSuccessMessage} severity="error">
              Job creation failed.
            </Alert>
          </Snackbar>
        </Fragment>
      )}
    </Box>
  );
};

export default memo(JobPostForm);
