import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormControl,
  FormHelperText
} from '@mui/material';
import { Input, IconTextField } from '../../../../Common';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import { clientBasicForm } from '../../../validationSchema';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FromDataI, FromPropsI } from '../../../type';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../../../../store/actions/register';
import { clientPayload } from '../../../utils';
import './index.css';
import { RootState } from '../../../../../store/reducers';
import SnackBarComponent from '../../../../Common/SnackBar';

interface BasicFormProps {
  formType: string;
  setFormType: (data: string) => void;
  formData: FromDataI;
  setFormData: (data: any, value: string) => void;
  role?: string;
}
interface formDataInterface {
  confirm_password: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  phone: string;
  tc?: boolean;
}

const BasicForm = ({ setFormType, role }: FromPropsI) => {
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const [showMessages, setShowMessages] = useState({
    showSnackBar: false,
    snackBarMessage: '',
    messageType: ''
  });
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm({ resolver: yupResolver(clientBasicForm) });
  const dispatch = useDispatch();
  const userRegisterData = useSelector((state: RootState) => state?.register);
  useEffect(() => {
    if (userRegisterData?.registrationStatus === true) {
      setShowMessages((prev) => ({
        ...prev,
        showSnackBar: true,
        snackBarMessage: 'Registration Successful!',
        messageType: 'success'
      }));
      setFormType('compnayDetails');
    } else {
      if (userRegisterData?.error) {
        setShowMessages((prev) => ({
          ...prev,
          showSnackBar: true,
          snackBarMessage: userRegisterData?.error,
          messageType: 'error'
        }));
      }
    }
  }, [userRegisterData]);

  const handleForm = (data: formDataInterface) => {
    if (showMessages.showSnackBar) {
      setShowMessages((prev) => ({
        ...prev,
        showSnackBar: false,
        snackBarMessage: '',
        messageType: ''
      }));
    }
    const payload = { role, ...data };
    dispatch(signup(payload));
  };
  const togglePasswordType = () => {
    passwordType === 'password' ? setPasswordType('text') : setPasswordType('password');
  };
  const toggleConfirmPasswordType = () => {
    confirmPasswordType === 'password'
      ? setConfirmPasswordType('text')
      : setConfirmPasswordType('password');
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(handleForm)}>
        <Box className="form--container">
          <Box className="client-form-field-wrapper">
            <Box className="name-wrapper">
              <Input
                type="text"
                id="first_name"
                name="first_name"
                label="First Name"
                isRequired
                register={register}
                error={errors}
              />
              <Input
                type="text"
                id="last_name"
                name="last_name"
                label="Last Name"
                isRequired
                register={register}
                error={errors}
              />
            </Box>

            <Box>
              <Input
                type="email"
                id="email"
                name="email"
                label="Email"
                isRequired
                register={register}
                error={errors}
              />
            </Box>
            <Box>
              <IconTextField
                id="passowrd"
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
            <Box>
              <IconTextField
                id="confirm_password"
                name="confirm_password"
                label="Confirm Password"
                type={confirmPasswordType}
                position="start"
                PrimaryIcon={VisibilityOff}
                SecondaryIcon={Visibility}
                iconPosition={['end']}
                register={register}
                error={errors}
                primaryIconAction={toggleConfirmPasswordType}
                secondaryIconAction={toggleConfirmPasswordType}
              />
            </Box>
            <Box className="phone-select-wrapper">
              <Input
                type="text"
                id="phone"
                name="phone"
                label="Phone"
                isRequired
                register={register}
                error={errors}
                className="phone-field"
              />
            </Box>
          </Box>
          <Box className="term-condition-wrapper">
            <FormControl required component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  key="tc"
                  control={
                    <Controller
                      name="tc"
                      control={control}
                      render={({ field }) => <Checkbox {...field} />}
                    />
                  }
                  label={
                    <Box className="sign-up--term-condition">
                      <Box className="sign-up--term-condition-label">
                        By Signing up you agree to our{' '}
                        <Link className="sign-up--term-condition-url" to={''}>
                          {' '}
                          Terms and Condition{' '}
                        </Link>
                        and{' '}
                        <Link className="sign-up--term-condition-url" to={''}>
                          {' '}
                          Privacy Policy{' '}
                        </Link>
                      </Box>
                    </Box>
                  }
                />
              </FormGroup>
              {errors?.tc && (
                <FormHelperText className="term-condition-error">
                  Please accept the terms and conditions.
                </FormHelperText>
              )}
            </FormControl>
          </Box>

          <Box className="basic-btn-container">
            <Box className="submit-btn-wrapper">
              <Button type="submit" variant="contained" size="large" fullWidth>
                Next
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="already-account-wrapper">
          Already have an account?{' '}
          <Link to={''} className="login-url">
            Log In
          </Link>
        </Box>
      </form>
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
    </Box>
  );
};

export default BasicForm;
