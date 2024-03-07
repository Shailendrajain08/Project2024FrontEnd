import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import ClientRegistration from './Client';
import CoderRegistration from './Coder';
import StepperView from '../Common/StepperView/index';
import {
  clientRegistrationFormSteps,
  coderRegistrationFormSteps,
  coderAgencyRegistrationStep
} from '../../constants/forms';
import './index.css';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { veifyEmail } from '../../store/actions/register';
import { RootState } from '../../store/reducers';
import useSnackBarMessage from '../../helper/customHooks/useFetchMessage';
import SnackBarComponent from '../Common/SnackBar';
import { SpinnerLoader } from '../Common';

const Register = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const verifyEmailData = useSelector((state: RootState) => state?.VerifyEmailReducer);
  const [value, setValue] = useState('Coder');
  const [formType, setFormType] = useState('basicForm');
  const userToken: any = location?.search?.length > 0 && location?.search?.split('=').pop();
  // const userToken = 'asdfdfdsfds';
  const [showMessages, setShowMessages]: any = useSnackBarMessage(
    verifyEmailData?.verfiyEmailStatus,
    verifyEmailData?.verifyEmailData,
    verifyEmailData?.error
  );
  useEffect(() => {
    setShowMessages({ showSnackBar: false });
    if (location?.search?.length > 0 && location?.search.includes('?redirecturl=verify-email/')) {
      const formData = new FormData();
      formData.append('token', userToken);
      dispatch(veifyEmail(formData));
    }
  }, [location?.search]);
  useEffect(() => {
    if (verifyEmailData?.verfiyEmailStatus) {
      setFormType('successModal');
    }
  }, [verifyEmailData]);

  const steps =
    value === 'Client'
      ? clientRegistrationFormSteps
      : formType === 'agencyForm'
        ? coderAgencyRegistrationStep
        : coderRegistrationFormSteps;

  // Need to remove after api call
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event); // Need to remove after api call
    setValue(newValue);
  };
  return (
    <Fragment>
      {verifyEmailData.loading ? (
        <SpinnerLoader />
      ) : (
        <Box className={`${formType !== 'basicForm' ? 'basic-container' : 'signup-container'}`}>
          {formType && formType !== 'basicForm' && (
            <Box className="Stepper-container">
              <StepperView
                steps={steps}
                activeStep={formType}
                callBackFnc={(value: string) => {
                  console.log(value);
                  setFormType(value);
                }}
              />
            </Box>
          )}
          <Box className={`${formType !== 'basicForm' ? 'basic-wrapper' : 'signup-form-wrapper'}`}>
            {formType === 'basicForm' && (
              <>
                <Box className="heading-container">
                  <Typography variant="h1">Welcome to HireCoder</Typography>
                  <Typography variant="h3">Sign up as</Typography>
                </Box>
                <Box className="radio-field-container">
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      onChange={handleChange}
                      value={value}
                      className="radio-button--group">
                      <FormControlLabel
                        className="radio-button"
                        value="Client"
                        control={<Radio />}
                        label="Client"
                      />
                      <FormControlLabel
                        className="radio-button"
                        value="Coder"
                        control={<Radio />}
                        label="Coder"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </>
            )}
            <Box className={`${formType !== 'basicForm' ? 'skill-wrapper' : 'form-wrapper'}`}>
              {value === 'Coder' && (
                <CoderRegistration
                  formType={formType}
                  setFormType={setFormType}
                  role={value.toUpperCase()}
                />
              )}
              {value === 'Client' && (
                <ClientRegistration
                  setFormType={setFormType}
                  formType={formType}
                  role={value.toUpperCase()}
                />
              )}
            </Box>
          </Box>
          {formType === 'basicForm' && (
            <Box className="Image-wrapper">
              <img
                src="./images/side-profile.jpg"
                alt="side profile image"
                className="img-section"
              />
            </Box>
          )}
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
      )}
    </Fragment>
  );
};

export default Register;
