import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
  Snackbar,
  FormHelperText,
  FormControl,
  FormGroup
} from '@mui/material';
import { CheckBox, Input, Select } from '../../../../Common';
import { yupResolver } from '@hookform/resolvers/yup';
import IconTextField from '../../../../Common/Input/IconTextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { coder } from '../../../validationSchema';
import { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { FromPropsI } from '../../../type';
import { useDispatch, useSelector } from 'react-redux';
import SnackBarComponent from '../../../../Common/SnackBar';
import { RootState } from '../../../../../store/reducers';
import { signup } from '../../../../../store/actions/register';
import useSnackBarMessage from '../../../../../helper/customHooks/useFetchMessage';

const BasicForm = ({ setFormType, role }: FromPropsI) => {
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm({ resolver: yupResolver(coder.basicForm) });
  const dispatch = useDispatch();
  const userRegisterData = useSelector((state: RootState) => state?.register);

  const [showMessages, setShowMessages]: any = useSnackBarMessage(
    userRegisterData?.registrationStatus,
    'Registration Successful!',
    userRegisterData?.error
  );

  useEffect(() => {
    if (userRegisterData?.registrationStatus === true) {
      if (userRegisterData?.data?.data?.user?.type === 'INDIVIDUAL') {
        setFormType('skillsForm');
      } else {
        setFormType('agencyForm');
      }
    }
  }, [userRegisterData]);

  const handleBasicForm = (data: any) => {
    setShowMessages({ showSnackBar: false });
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
    <form onSubmit={handleSubmit(handleBasicForm)}>
      <Box>
        <Box className="form-field-wrapper">
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
              label="Confirm Passowrd"
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
            <Select
              id="type"
              name="type"
              label="Type"
              isRequired={true}
              register={register}
              error={errors}
              options={[
                { value: 'AGENCY', label: 'Agency' },
                { value: 'INDIVIDUAL', label: 'Individual' }
              ]}
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
            <Button type="submit" variant="contained" className="submit-btn" size="medium">
              NEXT
            </Button>
          </Box>
        </Box>
        <Box className="already-account-wrapper">
          Already have an account?{' '}
          <Link to="/login" className="login-url">
            Log In
          </Link>
        </Box>
        <Box>
          {showMessages?.showSnackBar && (
            <SnackBarComponent
              isOpen={showMessages?.showSnackBar}
              isClose={(prev: any) => ({
                ...prev,
                showSnackBar: false
              })}
              message={showMessages?.snackBarMessage}
              messageType={showMessages?.messageType}
            />
          )}
        </Box>
      </Box>
    </form>
  );
};

export default BasicForm;
