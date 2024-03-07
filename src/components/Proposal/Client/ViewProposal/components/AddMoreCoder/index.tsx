import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { CloseIconSvg } from '../../../../../../assets/svg';
import './index.css';

const AddCoderProposal: React.FC<TAddCoderProposal> = ({ onYes, onClose, onNo }) => {
  return (
    <Box p={1}>
      <Box display={'flex'} columnGap={2}>
        <Typography variant="h2">{'Do you want to Hire more Coder for this job'}</Typography>
        <Box onClick={onClose} className="add-coder-proposal--icon-box">
          <CloseIconSvg />
        </Box>
      </Box>
      <Box display={'flex'} columnGap={2} mt={4}>
        <Box>
          {' '}
          <Button variant="contained" onClick={onYes} className="view-proposal-modal--btn">
            Yes
          </Button>
        </Box>
        <Box>
          {' '}
          <Button variant="outlined" onClick={onNo} className="view-proposal-modal--btn">
            No
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddCoderProposal;
