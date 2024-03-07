import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery
} from '@mui/material';
import './index.css';

interface IJobPostModal {
  title?: string;
  open: boolean;
  handleClose: () => void;
  callBackFnc?: (name: string) => void;
  children: React.ReactNode;
  modalBodyWidth: string;
  isHourly?: boolean;
  name: string;
}

const JobPostModal = ({
  open,
  title,
  handleClose,
  children,
  callBackFnc,
  modalBodyWidth,
  isHourly,
  name
}: IJobPostModal) => {
  const isLargeScreen = useMediaQuery('(min-width:1024px)');

  const isCheckedType = () => {
    if (name === 'jobBudget') {
      return isHourly ? ['hourlyMinimumPrice', 'hourlyMaximumPrice'] : 'fixedCurrency';
    } else if (name === 'jobSize') {
      return [
        'jobSize',
        'jobDuration',
        'jobExpertLevel',
        'jobIntermediateLevel',
        'jobBeginnerLevel'
      ];
    } else {
      return name;
    }
  };
  const handleSubmit = () => {
    const type = isCheckedType();
    if (callBackFnc) callBackFnc(type as any);
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        id="job-modal--container">
        <DialogTitle id="job-modal--title">{title}</DialogTitle>
        <DialogContent
          id="job-post--modal-body"
          sx={{ width: isLargeScreen ? modalBodyWidth : '100%' }}>
          {children}
        </DialogContent>
        <DialogActions id="job-post--modal-btn">
          <Button onClick={handleSubmit} variant="contained" size="large">
            Save
          </Button>
          <Button onClick={handleClose} variant="outlined" size="large" id="cancel-outline-btn">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default JobPostModal;
