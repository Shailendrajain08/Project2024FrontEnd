import { Box, Button } from '@mui/material';
import { CheckBox, Input } from '../../../Common';
import { IChangePassword } from '../type';
import PasswordInput from '../../../Common/Input/PasswordInput';

const ChangePassword = ({ register, control, setValue }: IChangePassword) => {
  return (
    <Box className="password-change-wrapper">
      <Box className="password-change--field">
        <Input
          type="password"
          id="oldPassword"
          name="oldPassword"
          label="Old Password"
          register={register}
        />
        <PasswordInput
          id="newPassword"
          name="newPassword"
          label="New Password"
          register={register}
        />
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm New Password"
          register={register}
        />
      </Box>
      <Box className="password-profile-checkbox">
        <CheckBox
          lists={[
            {
              name: 'changePasswordTerm',
              value: '',
              label: 'All devices will be requidred to login with new password'
            }
          ]}
          control={control}
          setValue={setValue}
        />
      </Box>
      <Box className="password-change--button">
        <Button type="submit" className="password-change--submit" variant="contained" size="large">
          change password
        </Button>
      </Box>
    </Box>
  );
};

export default ChangePassword;
