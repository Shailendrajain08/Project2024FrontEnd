import React, { Fragment } from 'react';
import { Grid, Button, Box, Typography } from '@mui/material';
import { RadioButtons, Input } from '../../../../Common';
import { jobBudgetLists } from '../../../constant';
import { IJobFormProps } from '../../../type';

const JobBudget = ({
  register,
  errors,
  setFormType,
  getValues,
  watch,
  control,
  setValue,
  isShowButton = true,
  setFormPageCount
}: IJobFormProps) => {
  const defaultValue = jobBudgetLists[0]?.value;
  const selectedValue = React.useMemo(() => getValues('jobBudget'), [watch('jobBudget')]);

  return (
    <Box>
      <Box className="job-budget-form-wrapper">
        <Box>
          <RadioButtons
            name="jobBudget"
            lists={jobBudgetLists}
            label="How would you like to pay?"
            defaultValue={jobBudgetLists[0]?.value}
            control={control}
            setValue={setValue}
            isRequired={true}
          />
        </Box>
        <Box component="div" className="separator-line" />
        {selectedValue === defaultValue ? (
          <Box className="budget-wrapper">
            <Typography variant="h6" className="budget-label">
              Maximum Budget for the Job in USD.
            </Typography>
            <Input
              id="fixedCurrency"
              name="fixedCurrency"
              type="text"
              placeholder="ie: 1000"
              register={register}
              error={errors}
              isRequired={false}
              size="medium"
              endAdornmentLabel="|  USD"
            />
          </Box>
        ) : (
          <Fragment>
            <Box className="rate-wrapper min-wrapper">
              <Typography variant="h6" className="max-label">
                Hourly Rate
              </Typography>
              <Box className="hourly-input-wrapper">
                <Input
                  id="hourlyMinimumPrice"
                  name="hourlyMinimumPrice"
                  label="Min"
                  type="text"
                  placeholder="ie: 60/hr"
                  register={register}
                  error={errors}
                  isRequired={false}
                  endAdornmentLabel="|  hr"
                />
                <Input
                  id="hourlyMaximumPrice"
                  name="hourlyMaximumPrice"
                  label="Max"
                  type="text"
                  placeholder="ie: 80/hr"
                  register={register}
                  error={errors}
                  isRequired={false}
                  size="medium"
                  endAdornmentLabel="|  hr"
                />
              </Box>
            </Box>
          </Fragment>
        )}
      </Box>
      {isShowButton && (
        <Fragment>
          <Box className="button-container">
            <Button
              className="job-post-outline-btn"
              variant="outlined"
              size="large"
              onClick={() => {
                setFormType('jobSize');
                setFormPageCount(2);
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

export default JobBudget;
