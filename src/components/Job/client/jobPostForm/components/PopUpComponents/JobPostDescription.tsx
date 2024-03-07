import { Box, TextField } from '@mui/material';
import React from 'react';
import JobPostModal from '../../../common/JobPostModal';
import { useForm } from 'react-hook-form';
import { MultilineTextField } from '../../../../../Common';

interface IjobPostDescription {
  name: string;
  handleClose: () => void;
  showPopUp: any;
  errors: any;
  clearErrors?: any;
  onhandleSubmit: any;
  defaultValue: string | any;
  setFormData: (name: string, value: any) => void;
}

const JobPostDescription = ({
  name,
  errors,
  defaultValue,
  handleClose,
  showPopUp,
  setFormData,
  onhandleSubmit
}: IjobPostDescription) => {
  return (
    <Box>
      <JobPostModal
        modalBodyWidth="490px"
        handleClose={handleClose}
        title={'Description'}
        open={showPopUp}
        name={name}
        callBackFnc={onhandleSubmit}>
        <TextField
          multiline
          rows={6}
          fullWidth
          name={name}
          variant={'outlined'}
          label={'Add technical skills you are looking for'}
          size="medium"
          id="jobDescription"
          defaultValue={defaultValue}
          onChange={(e: any) => setFormData(e.target.name, e.target.value)}
        />
      </JobPostModal>
    </Box>
  );
};

export default JobPostDescription;
