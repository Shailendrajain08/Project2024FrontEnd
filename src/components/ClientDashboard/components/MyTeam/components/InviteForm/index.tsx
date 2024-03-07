import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import './index.css';

const InviteFrom: React.FC<any> = ({
  handleClose,
  handleInvite,
  register,
  handleSubmit,
  Controller,
  control
}) => {
  return (
    <form onSubmit={handleSubmit(handleInvite)}>
      <Box className="my-team--radio-box" mt={3}>
        <Controller
          name="teamType"
          control={control}
          defaultValue="Coder"
          render={({ field }: any) => (
            <RadioGroup
              aria-labelledby="my-team-radio-buttons-group-label"
              className="my-team--radio-btn-group"
              {...field}>
              <FormControlLabel value="Co-Worker" control={<Radio />} label="Co-Worker" />
              <FormControlLabel value="Coder" control={<Radio />} label="Coder" />
            </RadioGroup>
          )}
        />
      </Box>
      <Box width={1} mb={2.5}>
        <TextField id="email" label="Email" variant="outlined" {...register('email')} fullWidth />
      </Box>
      <Box width={1} mb={1}>
        <TextField
          id="message"
          label="Add a personal message (optional)"
          {...register('message')}
          fullWidth
          multiline
          rows={4}
        />
      </Box>
      <Box mb={3}>
        <FormControlLabel
          control={<Checkbox {...register('termAndCondition')} />}
          label={
            <Box className="my-team-term-and-condition-box">
              <Typography component="span" textAlign="start">
                I agree to the
                <Typography component="span" className="text-green">
                  Terms & Conditions
                </Typography>
                and
                <Typography component="span" className="text-green">
                  Privacy Policy
                </Typography>
              </Typography>
            </Box>
          }
        />
      </Box>
      <Box display="flex" columnGap={2}>
        <Button variant="contained" className="my-team--invite-btn" type="submit">
          Invite
        </Button>
        <Button variant="outlined" className="my-team--cancel-btn" onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </form>
  );
};

export default InviteFrom;
