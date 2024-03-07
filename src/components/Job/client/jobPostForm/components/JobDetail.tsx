import { Box, Button, Tooltip, Typography } from '@mui/material';
import { Autocomplete, Input, MultilineTextField } from '../../../../Common';
import { IJobFormProps, JobPostFormDataI } from '../../../type';
import { memo } from 'react';
import { QuestionMarkIcon } from './Svg/QuestionMarkIcon';
import { mapTechOptions } from '../../../utils';
import FileUploadCoder from '../FileUpload';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import '../index.css';

const JobDetail = ({
  register,
  errors,
  setValue,
  JobPostFormData,
  clearErrors,
  getValues,
  jobPostSelector
}: IJobFormProps) => {
  const { jopPostHeadline, technicalSkills, jobDescription, jobDescriptionFile } =
    JobPostFormData as JobPostFormDataI;
  const technologies = jobPostSelector?.technologies;
  return (
    <Box className="job-post-detail-container">
      <Box className="job-field-wrapper">
        <Input
          type="text"
          id="jopPostHeadline"
          name="jopPostHeadline"
          label="Write a Job Headline*"
          placeholder="ie: Need an e-commerce website in PHP"
          isRequired={true}
          register={register}
          error={errors}
          defaultValue={jopPostHeadline}
        />
        <Autocomplete
          options={mapTechOptions(technologies)}
          name="technicalSkills"
          label="Add the Technical Skills you are looking for*"
          placeholder="Select tecnical skills"
          setValue={setValue}
          defaultValue={technicalSkills}
          error={errors}
          clearErrors={clearErrors}
          size="medium"
        />
      </Box>
      <Box className="multi-field-wrapper">
        <MultilineTextField
          name="jobDescription"
          label="Job Description"
          id="jobDescription"
          rows={6}
          register={register}
          defaultValue={jobDescription}
          error={errors}
          helperText="Max. 1000 Character"
        />
      </Box>
      <Box className="file-input-wrapper">
        <FileUploadCoder
          register={register}
          name="jobDescriptionFile"
          setValue={setValue}
          defaultValue={jobDescriptionFile}
          error={errors}
          getValues={getValues}
          clearErrors={clearErrors}>
          <Box className="job-attach-btn-wrapper">
            <Button component="span" className="job-attach-file-btn">
              <Box className="attachment--icon">
                <AttachmentOutlinedIcon />
              </Box>
              <Typography variant="subtitle2" className="attach-btn">
                Attach a file
              </Typography>
            </Button>
          </Box>
        </FileUploadCoder>
        <Typography className="file-text-wrapper" component={'span'} variant="body2">
          (Maximum size: 100MB) Max. 3 files
          <Tooltip
            className="toop-tips-container"
            title="Supported file formats .pdf, .docx, .ppt, .jpeg, .png, .exl, jpg.">
            <Typography className="icon-wrapper" component={'span'}>
              <QuestionMarkIcon />
            </Typography>
          </Tooltip>
        </Typography>
      </Box>
      <Box className="button-container">
        <Button size="large" className="job-post-outline-btn" variant="outlined">
          Back
        </Button>
        <Button size="large" type="submit" variant="contained">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default memo(JobDetail);
