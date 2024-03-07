import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Typography, Button } from '@mui/material';
import { IconTextField } from '../../Common';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { newPasswordConfirm } from '../newsetpswvalidation';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { resetPasswordAction } from '../../../store/actions/forgotPassword';
import SnackBarComponent from '../../Common/SnackBar';
import useSnackBarMessage from '../../../helper/customHooks/useFetchMessage';

interface FormInput {
  password: string;
  confirm_password: string;
}

const SetNewPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({ resolver: yupResolver(newPasswordConfirm) });
  const passwordData = useSelector((state: RootState) => state?.resetPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const getRedirectUrl = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('redirecturl') || '';
  };

  const extractUuidAndToken = (redirectUrl: any) => {
    const regex = /password-reset\/([^\/]+)\/([^\/]+)/;
    const matches = redirectUrl.match(regex);
    if (matches && matches.length > 2) {
      const uidb64 = matches[1];
      const token = matches[2];
      return { uidb64, token };
    }
    return { uidb64: '', token: '' };
  };

  const redirectUrl = getRedirectUrl();
  const { uidb64, token } = extractUuidAndToken(redirectUrl);

  const [passwordType, setPasswordType] = useState('password');
  const [newPasswordType, setNewPasswordType] = useState('password');
  const [showMessages]: any = useSnackBarMessage(
    passwordData?.resetPasswordStatus,
    passwordData?.resetPassword?.message,
    passwordData?.error
  );

  const handelResetPswSubmit: SubmitHandler<FormInput> = (data) => {
    if (uidb64 && token) {
      const payload = { uidb64, token, ...data };
      dispatch(resetPasswordAction(payload));
    }
  };

  const togglePasswordType = () => {
    passwordType === 'password' ? setPasswordType('text') : setPasswordType('password');
  };
  const toggleNewPasswordType = () => {
    newPasswordType === 'password' ? setNewPasswordType('text') : setNewPasswordType('password');
  };
  React.useEffect(() => {
    if (passwordData?.resetPasswordStatus) {
      setTimeout(() => navigate('/login'), 2000);
    }
  }, [passwordData]);

  return (
    <Box className="forget-psw-reset-cnt">
      <Box className="forget-setpsw-main-box ">
        <Box className="setpsw-typography-box">
          <Typography variant="h2">Update Password</Typography>
          <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
            Enter your new password
          </Typography>
        </Box>

        <form onSubmit={handleSubmit(handelResetPswSubmit)}>
          <Box className="set-new-psw-form">
            <Box>
              <IconTextField
                id="password"
                name="password"
                label="New Password"
                type={newPasswordType}
                position="start"
                PrimaryIcon={VisibilityOff}
                SecondaryIcon={Visibility}
                iconPosition={['end']}
                register={register}
                error={errors}
                primaryIconAction={toggleNewPasswordType}
                secondaryIconAction={toggleNewPasswordType}
              />
            </Box>
            <Box>
              <IconTextField
                id="confirm_password"
                name="confirm_password"
                label="Confirm New Password"
                type={passwordType}
                position="start"
                PrimaryIcon={VisibilityOff}
                SecondaryIcon={Visibility}
                iconPosition={['end']}
                register={register}
                error={errors}
                primaryIconAction={togglePasswordType}
                secondaryIconAction={togglePasswordType}
              />
            </Box>
            <Button
              className="change-psw-btn"
              size="large"
              type="submit"
              fullWidth
              variant="contained"
              color="primary">
              Change password
            </Button>
          </Box>
        </form>
        <Box>
          {showMessages.showSnackBar && (
            <SnackBarComponent
              isOpen={showMessages.showSnackBar}
              isClose={(prev: any) => ({ ...prev, showSnackBar: false })}
              message={showMessages.snackBarMessage}
              messageType={showMessages.messageType}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SetNewPassword;
