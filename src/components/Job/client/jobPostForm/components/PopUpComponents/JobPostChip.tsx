import { Box, Chip } from '@mui/material';
import React from 'react';
import { Autocomplete } from '../../../../../Common';
import { mapTechOptions } from '../../../../utils';
import JobPostModal from '../../../common/JobPostModal';

interface IjobPostChip {
  handleClose: () => void;
  showPopUp: any;
  jobPostSelector: any;
  setValue: any;
  technicalSkills?: string[] | undefined;
  errors: any;
  clearErrors?: any;
  name: string;
  setFormData: (name: string, value: any) => void;
  onhandleSubmit: any;
  isSetChips?: boolean;
}

const JobPostChip = ({
  handleClose,
  showPopUp,
  jobPostSelector,
  setValue,
  technicalSkills,
  errors,
  clearErrors,
  name,
  isSetChips = false,
  setFormData,
  onhandleSubmit
}: IjobPostChip) => {
  return (
    <Box>
      <JobPostModal
        modalBodyWidth="509px"
        handleClose={handleClose}
        title={'Skill'}
        open={showPopUp}
        name={name}
        callBackFnc={onhandleSubmit}>
        <Autocomplete
          options={mapTechOptions(jobPostSelector.technologies)}
          name="technicalSkills"
          label="Add the Technical Skills you are looking for*"
          placeholder="Select tecnical skills"
          setValue={setValue}
          defaultValue={technicalSkills}
          error={errors}
          clearErrors={clearErrors}
          size="medium"
          isSetChips={isSetChips}
          setFormData={setFormData}
        />
      </JobPostModal>
    </Box>
  );
};

export default JobPostChip;
