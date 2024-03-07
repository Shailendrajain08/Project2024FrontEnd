import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Box, Typography } from '@mui/material';
import { Input } from '../Common';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordFormSchema } from './validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordAction, resetPasswordUpdate } from '../../store/actions/forgotPassword';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/reducers';
import SnackBarComponent from '../Common/SnackBar';
export { default as PasswordReset } from './component/PasswordReset';
export { default as SetNewPassword } from './component/SetNewPsw';
import './index.css';
import useSnackBarMessage from '../../helper/customHooks/useFetchMessage';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordData = useSelector((state: RootState) => state?.passwordUpdate);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(forgotPasswordFormSchema) });

  const [showMessages]: any = useSnackBarMessage(
    passwordData?.forgetPasswordStatus,
    passwordData?.forgotPassword?.message,
    passwordData?.error
  );

  useEffect(() => {
    // Reset passwordData to false after showing the success message
    if (showMessages.showSnackBar && showMessages.messageType === 'success') {
      dispatch(resetPasswordUpdate());
      navigate(`/password-reset-confirm`);
    }
  }, [showMessages]);

  const handleForgotPasswordForm = (data: any) => {
    dispatch(forgotPasswordAction(data));
  };

  return (
    <>
      <Box className="forget-psw-main-box">
        <Box className="frgt-psw-scnd-box">
          <form onSubmit={handleSubmit(handleForgotPasswordForm)}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              rowGap={'12px'}
              fontWeight={400}
              pb={'24px'}>
              <Typography variant="h2" fontSize={'24px'}>
                Forgot Password?
              </Typography>
              <Typography variant="body2" className="forget-psw-desc">
                Enter the email that you used when register to recover your password. You will
                receive a password reset link.
              </Typography>
            </Box>

            <Box display={'flex'} flexDirection={'column'} rowGap={'24px'} alignItems={'center'}>
              <Box className="frgt-psw-input">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  label="Email"
                  isRequired={true}
                  register={register}
                  error={errors}
                />
              </Box>

              <Box className="frgt-psw-btn-grp">
                <Box width={'50%'}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate(`/login`)}
                    fullWidth>
                    Back
                  </Button>
                </Box>
                <Box width={'50%'}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    className="btn-p"
                    fullWidth>
                    Send
                  </Button>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
      <Box>
        {showMessages.showSnackBar && (
          <SnackBarComponent
            isOpen={showMessages.showSnackBar}
            isClose={(prev: any) => ({
              ...prev,
              showSnackBar: false
            })}
            message={showMessages.snackBarMessage}
            messageType={showMessages.messageType}
          />
        )}
      </Box>
    </>
  );
};

export default ForgotPassword;
