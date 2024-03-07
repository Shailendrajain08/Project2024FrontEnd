import { Button, Box, Typography } from '@mui/material';
import { RadioButtons } from '../../../../Common';
import { jobLocationLists } from '../../../constant';
import { IJobFormProps, JobPostFormDataI } from '../../../type';
import { Fragment, useCallback, useEffect } from 'react';
import { GreenQuestionMark } from './Svg/GreenQuestionMark';
import PreferTimeZone from '../../common/PreferTimeZone';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/reducers';
import { getTimezonesAction } from '../../../../../store/actions/timezones';

const JobLocation = ({
  setFormType,
  setValue,
  control,
  isShowButton = true,
  JobPostFormData,
  errors,
  clearErrors,
  setFormPageCount,
  isRequired
}: IJobFormProps) => {
  const { jobLocation, jobTimezone } = JobPostFormData as JobPostFormDataI;
  const defaultValue = jobLocation ? jobLocation : jobLocationLists[0]?.value;
  const dispatch = useDispatch();
  const timezoneSelector = useSelector((state: RootState) => state?.timezones);
  const { timezones } = timezoneSelector;

  const getTimezone = useCallback(() => {
    dispatch(getTimezonesAction());
  }, [timezoneSelector]);

  useEffect(() => {
    getTimezone();
  }, []);

  return (
    <Box>
      <Box>
        <RadioButtons
          name="jobLocation"
          lists={jobLocationLists}
          control={control}
          label="Where should coder reside?"
          defaultValue={defaultValue}
          setValue={setValue}
          isRequired={true}
          icon={<GreenQuestionMark />}
        />
      </Box>
      <Box component="div" className="separator-line" />
      <Box className="timezone-wrapper">
        <Box className="budget-label">
          <Typography variant="h6">
            Preferred time zone for work
            {isRequired && (
              <Typography component={'span'} className="imp-star">
                *
              </Typography>
            )}
          </Typography>
          <GreenQuestionMark />
        </Box>
        <PreferTimeZone
          options={timezones.data}
          label="Search by timezone"
          name="jobTimezone"
          setValue={setValue}
          defaultValue={jobTimezone}
          error={errors}
          clearErrors={clearErrors}
          title="Time Zones"
        />
      </Box>
      {isShowButton && (
        <Fragment>
          <Box className="button-container">
            <Button
              className="job-post-outline-btn"
              variant="outlined"
              size="large"
              onClick={() => {
                setFormType('jobBudget');
                setFormPageCount(3);
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

export default JobLocation;
