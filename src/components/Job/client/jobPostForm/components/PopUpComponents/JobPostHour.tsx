import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React from 'react';
import JobPostModal from '../../../common/JobPostModal';
import BudgetInput from '../../../common/BudgetInput';

interface IJobPostHour {
  name: string;
  showPopUp: any;
  handleClose: () => void;
  setValue: any;
  getValues: any;
  title: string;
  setFormData: (name: string, value: any) => void;
  onhandleSubmit: any;
  jobBudget: string | undefined;
}

const JobPostHour = ({
  name,
  showPopUp,
  handleClose,
  setValue,
  getValues,
  title,
  setFormData,
  onhandleSubmit,
  jobBudget
}: IJobPostHour) => {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(jobBudget);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box>
      <JobPostModal
        title={title}
        name={name}
        open={showPopUp}
        isHourly={selectedValue === 'hourly'}
        modalBodyWidth="458px"
        handleClose={handleClose}
        callBackFnc={onhandleSubmit}>
        <Box className="job-post-budget-container">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
              <FormControlLabel
                value="hourly"
                control={
                  <Radio
                    checked={selectedValue === 'hourly'}
                    onChange={handleChange}
                    value="hourly"
                    name="radio-buttons"
                  />
                }
                label="Hourly"
              />
              <FormControlLabel
                value="fixed"
                control={
                  <Radio
                    checked={selectedValue === 'fixedPrice'}
                    onChange={handleChange}
                    value="fixed"
                    name="radio-buttons"
                  />
                }
                label="Fixed Price"
              />
            </RadioGroup>
          </FormControl>

          {selectedValue === 'hourly' && (
            <Box className="hourly--job-post">
              <BudgetInput
                id="hourlyMinimumPrice"
                name="hourlyMinimumPrice"
                label="Min"
                placeholder="ie: 60/hr"
                defaultValue={getValues('hourlyMinimumPrice')}
                endAdornmentLabel="|  hr"
                setFormData={setFormData}
              />
              <BudgetInput
                id="hourlyMaximumPrice"
                label="Max"
                name="hourlyMaximumPrice"
                placeholder="ie: 80/hr"
                defaultValue={getValues('hourlyMaximumPrice')}
                endAdornmentLabel="|  hr"
                setFormData={setFormData}
              />
            </Box>
          )}
          {selectedValue === 'fixedPrice' && (
            <Box className="fixed--job-post">
              <BudgetInput
                id="fixedCurrency"
                name="fixedCurrency"
                placeholder="ie: 1000"
                defaultValue={getValues('fixedCurrency')}
                endAdornmentLabel="|  USD"
                label="Fixed Price"
                setFormData={setFormData}
              />
            </Box>
          )}
        </Box>
      </JobPostModal>
    </Box>
  );
};

export default JobPostHour;
