import React from 'react';
import { Box, Button, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { CloseIconSvg } from '../../../../../../assets/svg';
import './index.css';
import { Link } from 'react-router-dom';

const TermAndConditions: React.FC<TTermAndConditions> = ({
  control,
  Controller,
  onClose,
  onYes
}) => {
  return (
    <Box p={1}>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={1.25}>
        <Typography variant="h2">{'Are you sure you want to Hire this Coder'}</Typography>
        <Box onClick={onClose} className="term-and-condition--icon-box">
          <CloseIconSvg />
        </Box>
      </Box>
      <Controller
        name="termAndCondition"
        control={control}
        defaultValue={false}
        render={({ field }: any) => (
          <FormControlLabel
            style={{ pointerEvents: 'none' }}
            control={<Checkbox {...field} style={{ pointerEvents: 'auto' }} />}
            label={
              <Typography variant="body2" mt={1.25}>
                By clicking here, I state that I have read and understood the
                <Link className="term-condition-url" to={'/terms-conditions'} target="_blank">
                  {' '}
                  Terms and Condition{' '}
                </Link>
                layed by Hirecoder.
              </Typography>
            }
          />
        )}
      />
      <Box display={'flex'} columnGap={2} mt={4}>
        <Box>
          {' '}
          <Button variant="contained" onClick={onYes} className="view-proposal-modal--btn">
            Yes
          </Button>
        </Box>
        <Box>
          {' '}
          <Button variant="outlined" onClick={onClose} className="view-proposal-modal--btn">
            No
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TermAndConditions;
