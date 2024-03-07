import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Box,
  Typography
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from './validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { login as loginAction } from '../../store/actions/login';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/reducers';
import LoginCard from './LoginCard';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import loginbg from '../../assets/images/-2.png';
import { Link } from 'react-router-dom';
import './login.css';
import { IconTextField } from '../Common';
import SnackBarComponent from '../Common/SnackBar';
import { resetSignup } from '../../store/actions/register';

const Login = () => {
  const [value, setValue] = React.useState('CODER');
  const [isError, setIsError] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState('password');
  const userLoginData = useSelector((state: RootState) => state?.userLoginData);
  const { user, error, loginStatus, loading }: any = userLoginData;
  React.useEffect(() => {
    if (loginStatus) {
      if (user?.user?.role === 'CLIENT') {
        navigate('/clientDashboard');
      } else {
        navigate('/coder/dashboard');
      }
    } else {
      localStorage.clear();
      if (error) {
        setIsError(true);
      }
    }
  }, [user, loginStatus, error]);

  React.useEffect(() => {
    dispatch(resetSignup());
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(loginFormSchema) });

  const togglePasswordType = () => {
    passwordType === 'password' ? setPasswordType('text') : setPasswordType('password');
  };

  const handleLoginForm = (data: any) => {
    const payload = { role: value, ...data };
    dispatch(loginAction(payload));
  };

  return (
    <Box className="login-box">
      <Box className="login-box--left">
        <Box className="login-box--left-container">
          <Typography variant="h1" mb={3}>
            Welcome Back
          </Typography>
          <Typography variant="h3" mb={1.5}>
            Log in as
          </Typography>
          <form onSubmit={handleSubmit(handleLoginForm)} className="login-form">
            <Box className="login-box--left-form-group" mb={3}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue={value}
                  onChange={handleChange}>
                  <FormControlLabel
                    value="CLIENT"
                    control={
                      <Radio className={value === 'CLIENT' ? '' : 'login-box--form-radio-btn'} />
                    }
                    label="Client"
                    className={value === 'CLIENT' ? '' : 'login-box--form-label'}
                  />
                  <FormControlLabel
                    value="CODER"
                    control={
                      <Radio className={value === 'CODER' ? '' : 'login-box--form-radio-btn'} />
                    }
                    label="Coder"
                    className={value === 'CODER' ? '' : 'login-box--form-label'}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box className="login-box--left-email" mb={3}>
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
                placeholder="Password"
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
            <Box className="login-box--forget-password" mb={1}>
              <Link to="/forgot-password">Forgot Password?</Link>
            </Box>
            <Box className="login-box--login-btn">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading || isError}>
                Log in
              </Button>
            </Box>
            <Box className="login-box--sign-up-box">
              <Typography variant="subtitle2">
                Don’t have an account?
                <Link to="/register">Sign Up</Link>
              </Typography>
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
          message={error}
          messageType="error"
        />
      )}
    </Box>
  );
};

export default Login;
