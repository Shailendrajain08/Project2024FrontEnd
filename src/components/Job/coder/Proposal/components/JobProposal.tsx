import { Box, Typography, Button } from '@mui/material';
import { MultilineTextField, FileInput } from '../../../../Common';
import { ICoderProposalProps } from '../type';
import FileUploader from './FileUpload';

const JobProposal = ({ formProps }: ICoderProposalProps) => {
  const { register, setValue, getValues, errors, clearErrors } = formProps;
  return (
    <Box mt={1}>
      <Typography variant="subtitle1" fontSize={16} mb={3} fontWeight={500} lineHeight={'24px'}>
        {'Your Job Proposal'}
      </Typography>
      <MultilineTextField
        name="proposalDetail"
        label="Start Typing Here"
        id="proposalDetail"
        register={register}
        error={errors}
        helperText={'Maximum Length: 5000 Characters'}
      />

      <FileUploader
        name="proposalFiles"
        setValue={setValue}
        getValues={getValues}
        register={register}
        error={errors}
        clearErrors={clearErrors}
      />
    </Box>
  );
};

export default JobProposal;
