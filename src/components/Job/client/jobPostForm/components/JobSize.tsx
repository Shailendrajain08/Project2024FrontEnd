import { Grid, Button, Box, Typography } from '@mui/material';
import { CheckBox, RadioButtons } from '../../../../Common';
import { jobSizeLists, jobDurationLists, jobExpertiseLevelLists } from '../../../constant';
import { IJobFormProps, JobPostFormDataI } from '../../../type';
import { handleExpertiseLevel } from '../../../utils';
import { Fragment } from 'react';

const JobSize = ({
  setFormType,
  setValue,
  JobPostFormData,
  control,
  isShowButton = true,
  setFormPageCount
}: IJobFormProps) => {
  const { jobSize, jobDuration, jobExpertLevel, jobIntermediateLevel, jobBeginnerLevel } =
    JobPostFormData as JobPostFormDataI;
  const expertiseLevel = handleExpertiseLevel(
    jobExpertLevel,
    jobIntermediateLevel,
    jobBeginnerLevel
  );
  const defaultJobSizeValue = jobSize || 'Large';
  const defaultJobDurationValue = jobDuration || 'long term';
  const defaultJobexpertiseValue = jobExpertLevel || 'expert';
  return (
    <Box>
      <Box className="job-size-section">
        <RadioButtons
          name="jobSize"
          lists={jobSizeLists}
          label="Size of the Job?"
          defaultValue={defaultJobSizeValue}
          control={control}
          setValue={setValue}
          isCardView={false}
          isRequired={true}
        />
      </Box>
      <Box component="div" className="separator-line" />
      <Box className="job-duration-section">
        <RadioButtons
          name="jobDuration"
          lists={jobDurationLists}
          label="Estimated Duration of the Job?"
          defaultValue={defaultJobDurationValue}
          control={control}
          setValue={setValue}
          isCardView={false}
          isRequired={true}
        />
      </Box>
      <Box component="div" className="separator-line" />
      <Box className="coder-expert-list">
        <CheckBox
          lists={jobExpertiseLevelLists}
          title="Coder Expertise Level"
          defaultValue={defaultJobexpertiseValue}
          name={jobExpertiseLevelLists[0].name}
          control={control}
          setValue={setValue}
          isCardView={false}
        />
      </Box>
      {isShowButton && (
        <Fragment>
          <Box className="button-container">
            <Button
              variant="outlined"
              size="large"
              className="job-post-outline-btn"
              onClick={() => {
                setFormType('jobDetails');
                setFormPageCount(1);
              }}>
              Back
            </Button>
            <Button variant="contained" size="large" type="submit">
              Next
            </Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default JobSize;
