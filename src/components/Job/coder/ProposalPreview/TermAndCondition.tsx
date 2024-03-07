import { CloseOutlined } from '@mui/icons-material';
import { Button, Checkbox, FormGroup, FormControlLabel, Box, Typography } from '@mui/material';
import { Fragment, useState } from 'react';

interface IProposalTermAndCondition {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
  handleSubmitClick: () => void;
  onClose: () => void;
}

const ProposalTermAndCondition = ({ isChecked, setIsChecked, handleSubmitClick, onClose }: any) => {
  return (
    <Fragment>
      <Box>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography variant="h2" fontSize={'24px'} fontWeight={400} mb={'20px'}>
            HireCoder team{' '}
          </Typography>
          <Box className="close-outlined-box" onClick={onClose}>
            <CloseOutlined />
          </Box>
        </Box>

        <FormGroup className="check-box-terms-and-condition">
          <FormControlLabel
            className="check-box-terms"
            control={<Checkbox onChange={(e: any) => setIsChecked(e.target.checked)} />}
            label={
              <Typography variant="body2">
                By clicking here, I state that I have read and understood the terms and conditions
                layed by Hirecoder and Job posting client.
              </Typography>
            }
          />
        </FormGroup>
        <Box pt={'32px'} textAlign={'start'}>
          <Button
            className="submit-terms-and-condition"
            variant="contained"
            disabled={!isChecked}
            onClick={handleSubmitClick}>
            Submit
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default ProposalTermAndCondition;
