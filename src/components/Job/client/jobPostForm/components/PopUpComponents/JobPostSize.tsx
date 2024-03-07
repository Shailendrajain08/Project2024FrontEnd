import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material';
import JobPostModal from '../../../common/JobPostModal';
import { jobSizeLists, jobDurationLists, jobExpertiseLevelLists } from '../../../../constant';
import React from 'react';

interface IJobPostSize {
  name: string;
  showPopUp: any;
  handleClose: () => void;
  setValue: any;
  getValues: any;
  errors: any;
  jobSize: any;
  jobDuration: any;
  setFormData: (name: string, value: any) => void;
  onhandleSubmit: any;
  jobExpertLevel: string[];
}

export const JobPostSize = ({
  name,
  setValue,
  getValues,
  showPopUp,
  handleClose,
  jobSize,
  jobDuration,
  jobExpertLevel,
  onhandleSubmit,
  setFormData
}: IJobPostSize) => {
  const [selectedJob, setSelectedJob] = React.useState<any>({
    jobSize: jobSize,
    jobDuration: jobDuration,
    jobExpertLevel: jobExpertLevel
  });

  const handleJobProjectSize = (name: string, value: any) => {
    if (
      name === 'jobExpertLevel' ||
      name === 'jobIntermediateLevel' ||
      name === 'jobBeginnerLevel'
    ) {
      const tempData: any = selectedJob['jobExpertLevel'];
      if (tempData.includes(value)) {
        const filterData = tempData.filter((el: any) => el !== value);
        const newData = { ...selectedJob, jobExpertLevel: filterData };
        setSelectedJob(newData);
        setFormData(name, '');
      } else {
        const newData = { ...selectedJob, jobExpertLevel: [...tempData, value] };
        setSelectedJob(newData);
        setFormData(name, value);
      }
    } else {
      setSelectedJob((prev: any) => ({ ...prev, [name]: value }));
      setFormData(name, value);
    }
  };

  return (
    <Box>
      <JobPostModal
        name={name}
        open={showPopUp}
        handleClose={handleClose}
        modalBodyWidth="994px"
        callBackFnc={onhandleSubmit}>
        <Box className="job-size--container">
          <Box className="job-size--wrapper">
            <Typography display={'flex'}>
              Size of the Job?<Typography color={'#D32F2F'}>*</Typography>
            </Typography>
            <RadioGroup>
              {jobSizeLists &&
                jobSizeLists.map((item, id) => {
                  return (
                    <>
                      <FormControlLabel
                        key={id}
                        value={item.value}
                        control={
                          <Radio
                            defaultValue={selectedJob['jobSize']}
                            checked={selectedJob['jobSize'] === item.value}
                            onChange={(e: any) =>
                              handleJobProjectSize(e.target.name, e.target.value)
                            }
                            name="jobSize"
                          />
                        }
                        label={item.label}
                      />
                      <Typography variant="body2" marginLeft={'33px'}>
                        {item.helperText}
                      </Typography>
                    </>
                  );
                })}
            </RadioGroup>
          </Box>
          <Box className="job-size--wrapper">
            <Typography display={'flex'}>
              Estimated Duration of the Job?<Typography color={'#D32F2F'}>*</Typography>
            </Typography>
            <RadioGroup>
              {jobDurationLists &&
                jobDurationLists.map((item, id) => {
                  return (
                    <>
                      <FormControlLabel
                        key={id}
                        value={item.value}
                        control={
                          <Radio
                            defaultValue={selectedJob['jobDuration']}
                            checked={selectedJob['jobDuration'] === item.value}
                            onChange={(e: any) =>
                              handleJobProjectSize(e.target.name, e.target.value)
                            }
                            name="jobDuration"
                          />
                        }
                        label={item.label}
                      />
                      <Typography variant="body2" marginLeft={'33px'}>
                        {item.helperText}
                      </Typography>
                    </>
                  );
                })}
            </RadioGroup>
          </Box>
          <Box className="coder-expert-level">
            <Typography>Coder Expertise level</Typography>
            <FormGroup>
              {jobExpertiseLevelLists &&
                jobExpertiseLevelLists.map((item, id) => {
                  return (
                    <>
                      <FormControlLabel
                        key={id}
                        value={item.value}
                        control={
                          <Checkbox
                            checked={selectedJob['jobExpertLevel'].some(
                              (el: any) => el === item.value
                            )}
                            onChange={(e: any) =>
                              handleJobProjectSize(e.target.name, e.target.value)
                            }
                            name={item.name}
                          />
                        }
                        label={item.label}
                      />
                      <Typography variant="body2" marginLeft={'33px'}>
                        {item.helperText}
                      </Typography>
                    </>
                  );
                })}
            </FormGroup>
          </Box>
        </Box>
      </JobPostModal>
    </Box>
  );
};
export default JobPostSize;
