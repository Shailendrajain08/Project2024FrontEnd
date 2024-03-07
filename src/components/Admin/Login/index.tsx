import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Box, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from '../../Login/validationSchema';
import LoginCard from '../../Login/LoginCard';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import loginbg from '../../../assets/images/-2.png';
import { IconTextField } from '../../Common';
import SnackBarComponent from '../../Common/SnackBar';

const AdminLogin = () => {
  const [isError, setIsError] = React.useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginFormSchema) });

  const togglePasswordType = () => {
    passwordType === 'password' ? setPasswordType('text') : setPasswordType('password');
  };

  const handleLoginForm = (data: any) => {
    const payload = {
      email: data.email,
      password: data.password,
      role: 'SUPER_ADMIN'
    };
    // Need to intergrate admi login api
  };

  return (
    <Box className="login-box">
      <Box className="login-box--left">
        <Box className="login-box--left-container">
          <Typography component="h1" className="login-box--left-title">
            Login To HireCoder
          </Typography>

          <form onSubmit={handleSubmit(handleLoginForm)} className="login-form">
            <Box className="admin-login login-box--left-email" mb={3}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Email"
                variant="outlined"
                error={!!errors['email']}
                helperText={errors['email']?.message}
                placeholder="Email"
                {...register('email', { required: true })}
              />
            </Box>
            <Box className="login-box--left-password">
              <IconTextField
                id="password"
                name="password"
                label="Password"
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

            <Box className="admin-login-btn">
              <Button
                type="submit"
                size="large"
                fullWidth
                variant="contained"
                className="admin-login-btn-color">
                Log in
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <Box className="login-box--right">
        <Box className="login-box--right-img-box">
          <img className="" src={loginbg} alt="" />
        </Box>
        <LoginCard />
      </Box>
      {isError && (
        <SnackBarComponent
          isOpen={isError}
          isClose={() => setIsError(false)}
          message="Invalid Credentials"
          messageType="error"
        />
      )}
    </Box>
  );
};

export default AdminLogin;
