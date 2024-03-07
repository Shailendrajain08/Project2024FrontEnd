import React from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { Modal } from '../../../../Common';
import './index.css';
import { Box, Typography } from '@mui/material';
import { CheckOutlined } from '@mui/icons-material';

interface Invite10CoderProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

const Invite10Coder: React.FC<Invite10CoderProps> = ({ isOpen, onClose, title }) => {
  return (
    <Modal open={isOpen} onClose={onClose} modalBodyWidth="432px">
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignContent={'center'}
        alignItems={'center'}
        padding={'24.5px 24px'}>
        <Box className="check-outlined-container">
          <CheckOutlined className="check-outlined" />
        </Box>

        <Typography className="dialog-box-heading" variant="h2">
          {' '}
          {title}{' '}
        </Typography>
        <Box className="desc-container">
          <Typography className="dialog-box-desc">
            Your coders invitations have been sent successfully.
          </Typography>
        </Box>
        <Box mt={'24px'}>
          <Button variant="contained" fullWidth className="dialog-box-button">
            {' '}
            Ok
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default Invite10Coder;
