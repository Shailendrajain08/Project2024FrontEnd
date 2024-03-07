import { Fragment, useEffect, useRef, useState } from 'react';
import { Box, Button, Chip, Grid, TextField, Typography } from '@mui/material';
import { getExpertiseLevel, popupExpertLevel } from '../../../utils';
import { IJobFormProps, JobPostFormDataI } from '../../../type';
import JobSize from './JobSize';
import JobLocation from './JobLocation';
import JobBudget from './JobBudget';
import JobPostModal from '../../common/JobPostModal';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import JobPostChip from './PopUpComponents/JobPostChip';
import JobPostFile from './PopUpComponents/JobPostFile';
import JobPostDescription from './PopUpComponents/JobPostDescription';
import { getValue } from '@testing-library/user-event/dist/utils';
import { UploadFileIcon } from '../../../../../assets/svg';
import JobPostSize from './PopUpComponents/JobPostSize';
import JobPostHour from './PopUpComponents/JobPostHour';
import JobPostLocation from './PopUpComponents/JobPostLocation';
import { timeZones } from '../../timezones';

const JobFormPreview = (props: IJobFormProps) => {
  const [showPopUp, setShowPopUp] = useState({
    jobHeadline: false,
    jobDescription: false,
    jobDescriptionFile: false,
    technicalSkills: false,
    jobSize: false,
    jobBudget: false,
    jobLocation: false
  });
  const JobEditFormData = useRef<any>({});
  const { register, errors, JobPostFormData, setValue, getValues, jobPostSelector, clearErrors } =
    props;

  const {
    jopPostHeadline,
    jobDescription,
    jobDescriptionFile,
    technicalSkills,
    jobSize,
    jobDuration,
    jobTimezone,
    jobLocation,
    jobExpertLevel,
    jobIntermediateLevel,
    jobBeginnerLevel,
    jobBudget,
    fixedCurrency,
    hourlyMinimumPrice,
    hourlyMaximumPrice
  } = JobPostFormData as JobPostFormDataI;

  const budget =
    jobBudget === 'fixedPrice'
      ? `$${fixedCurrency} per hour`
      : `$${hourlyMinimumPrice} - $${hourlyMaximumPrice} per hour`;

  const jobExpertiseLevel = getExpertiseLevel(
    jobExpertLevel,
    jobIntermediateLevel,
    jobBeginnerLevel
  );

  const scope = `${jobSize}, ${jobDuration}, ${jobExpertiseLevel}`;

  const locationPreference: any = `${jobLocation}, ${jobTimezone?.map((item: any) => item.time)}`;
  const popLocationVal: any = `${jobTimezone?.map((item: any) => item.time)}`;

  const valiedateForm = () => {
    if (
      jopPostHeadline !== '' &&
      jobDescription !== '' &&
      technicalSkills != null &&
      technicalSkills.length > 0 &&
      jobLocation !== '' &&
      jobTimezone != null &&
      jobTimezone.length > 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  const setFormData = (name: string, value: any) => {
    let temJobPostData = JobEditFormData.current;
    temJobPostData = { ...temJobPostData, [name]: value };
    JobEditFormData.current = temJobPostData;
  };
  const onhandleSubmit = (name: string | string[]) => {
    if (typeof name === 'string') {
      setValue(name, JobEditFormData.current[name]);
    } else if (Array.isArray(name)) {
      name.forEach((item: string) => setValue(item, JobEditFormData.current[item]));
    }
  };

  const handleShow = (name: string) => {
    setShowPopUp((prev) => ({
      ...prev,
      [name]: true
    }));
  };

  const handleClose = () => {
    setShowPopUp({
      jobHeadline: false,
      jobDescription: false,
      jobDescriptionFile: false,
      technicalSkills: false,
      jobSize: false,
      jobBudget: false,
      jobLocation: false
    });
  };

  return (
    <Fragment>
      <Box className="job-post--container">
        <Box className="job-post--wrapper">
          <Box className="job-post--header">
            <Typography variant="h3">Job headline</Typography>
            <Typography
              component="span"
              className="edit-icon"
              onClick={() => handleShow('jobHeadline')}>
              <EditOutlinedIcon />
            </Typography>
          </Box>
          <Typography variant="body1" className="subbody-text">
            {getValues('jopPostHeadline')}
          </Typography>
        </Box>
        <JobPostModal
          modalBodyWidth="490px"
          callBackFnc={onhandleSubmit}
          handleClose={handleClose}
          title={'Job headline'}
          open={showPopUp.jobHeadline}
          name="jopPostHeadline">
          <TextField
            id="jopPostHeadline"
            label="Job Headline"
            name="jopPostHeadline"
            defaultValue={getValues('jopPostHeadline')}
            onChange={(e: any) => setFormData(e.target.name, e.target.value)}
            fullWidth
          />
        </JobPostModal>
      </Box>
      <Box component="div" className="separator-line" />
      <Box className="job-post--container">
        <Box className="job-post--wrapper">
          <Box className="job-post--header">
            <Typography variant="h3">Skills</Typography>
            <Typography
              component="span"
              className="edit-icon"
              onClick={() => handleShow('technicalSkills')}>
              <EditOutlinedIcon />
            </Typography>
          </Box>

          <Typography variant="body1" className="subbody-text skill-tech">
            {technicalSkills &&
              technicalSkills.map((item, id) => {
                return <Chip key={id} label={item} />;
              })}
          </Typography>
        </Box>
        <JobPostChip
          handleClose={handleClose}
          showPopUp={showPopUp.technicalSkills}
          jobPostSelector={jobPostSelector}
          setValue={setValue}
          errors={errors}
          name="technicalSkills"
          technicalSkills={technicalSkills}
          setFormData={setFormData}
          onhandleSubmit={onhandleSubmit}
        />
      </Box>
      <Box component="div" className="separator-line" />
      <Box className="job-post--container">
        <Box className="job-post--wrapper">
          <Box className="job-post--header">
            <Typography variant="h3">Job description</Typography>
            <Typography
              component="span"
              className="edit-icon"
              onClick={() => handleShow('jobDescription')}>
              <EditOutlinedIcon />
            </Typography>
          </Box>

          <Typography variant="body1" className="subbody-text">
            {getValues('jobDescription')}
          </Typography>
        </Box>
        <JobPostDescription
          name="jobDescription"
          errors={errors}
          defaultValue={getValues('jobDescription')}
          showPopUp={showPopUp.jobDescription}
          handleClose={handleClose}
          setFormData={setFormData}
          onhandleSubmit={onhandleSubmit}
        />
      </Box>
      <Box component="div" className="separator-line" />
      <Box className="job-post--container">
        <Box className="job-post--wrapper">
          <Box className="job-post--header">
            <Typography variant="h3">Attachment</Typography>
            <Typography
              component="span"
              className="edit-icon"
              onClick={() => handleShow('jobDescriptionFile')}>
              <EditOutlinedIcon />
            </Typography>
          </Box>

          <Typography variant="body1" className="subbody-text file-container">
            {jobDescriptionFile &&
              jobDescriptionFile.map((item, id) => {
                return (
                  <Box key={id} className="file-wrapper">
                    <Box>
                      <UploadFileIcon />
                    </Box>
                    <Box className="file-text">{item?.name}</Box>
                  </Box>
                );
              })}
          </Typography>
        </Box>
        <JobPostFile
          handleClose={handleClose}
          showPopUp={showPopUp.jobDescriptionFile}
          setValue={setValue}
          getValues={getValues}
          errors={errors}
          name="jobDescriptionFile"
          isMultipleFile={true}
          title="Attachment"
          options={jobDescriptionFile}
          setFormData={setFormData}
          onhandleSubmit={onhandleSubmit}>
          <Box className="choose--file-container">
            <Button id="choose-file-btn" size="large">
              Choose File
            </Button>
          </Box>
        </JobPostFile>
      </Box>
      <Box component="div" className="separator-line" />
      <Box className="job-post--container">
        <Box className="job-post--wrapper">
          <Box className="job-post--header">
            <Typography variant="h3">Scope</Typography>
            <Typography
              component="span"
              className="edit-icon"
              onClick={() => handleShow('jobSize')}>
              <EditOutlinedIcon />
            </Typography>
          </Box>

          <Typography variant="body1" className="subbody-text">
            {scope}
          </Typography>
        </Box>
        <JobPostSize
          showPopUp={showPopUp.jobSize}
          handleClose={handleClose}
          setValue={setValue}
          getValues={getValues}
          errors={errors}
          name="jobSize"
          jobSize={jobSize}
          jobDuration={jobDuration}
          setFormData={setFormData}
          onhandleSubmit={onhandleSubmit}
          jobExpertLevel={popupExpertLevel(jobExpertLevel, jobIntermediateLevel, jobBeginnerLevel)}
        />
      </Box>
      <Box component="div" className="separator-line" />
      <Box className="job-post--container">
        <Box className="job-post--wrapper">
          <Box className="job-post--header">
            <Typography variant="h3">Budget</Typography>
            <Typography
              component="span"
              className="edit-icon"
              onClick={() => handleShow('jobBudget')}>
              <EditOutlinedIcon />
            </Typography>
          </Box>

          <Typography variant="body1" className="subbody-text">
            {budget}
          </Typography>
        </Box>
        <JobPostHour
          showPopUp={showPopUp.jobBudget}
          handleClose={handleClose}
          setValue={setValue}
          getValues={getValues}
          name="jobBudget"
          title="Budget"
          jobBudget={jobBudget}
          setFormData={setFormData}
          onhandleSubmit={onhandleSubmit}
        />
      </Box>
      <Box component="div" className="separator-line" />
      <Box className="job-post--container">
        <Box className="job-post--wrapper">
          <Box className="job-post--header">
            <Typography variant="h3">Location preference</Typography>
            <Typography
              component="span"
              className="edit-icon"
              onClick={() => handleShow('jobLocation')}>
              <EditOutlinedIcon />
            </Typography>
          </Box>

          <Typography variant="body1" className="subbody-text">
            {/* {getValues('jobDescription')} */}
            {locationPreference}
          </Typography>
        </Box>
        <JobPostLocation
          showPopUp={showPopUp.jobLocation}
          handleClose={handleClose}
          setValue={setValue}
          name="jobTimezone"
          title="Location preference"
          getValues={getValues}
          clearErrors={clearErrors}
          errors={errors}
          value={popLocationVal}
          options={timeZones}
          setFormData={setFormData}
          onhandleSubmit={onhandleSubmit}
        />
      </Box>
      <Box textAlign={'end'} marginTop={'36px'}>
        <Button variant="contained" size="large" disabled={valiedateForm()} type="submit">
          Publish
        </Button>
      </Box>
    </Fragment>
  );
};

export default JobFormPreview;
