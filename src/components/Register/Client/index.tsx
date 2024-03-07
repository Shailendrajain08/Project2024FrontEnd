import { Fragment, useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CongratulationCard from '../../Common/CongratulationCard';
import { clientRegistrationFormSteps, initalClientFormFieldValue } from '../../../constants/forms';
import { UserDataI, FromPropsI } from '../type';
import BasicForm from './components/BasicForm';
import AddressDetail from './components/Address';
import DigitalPresence from './components/DigitalPresence';
import VerifyEmail from './components/VerifyEmail/index';
import CompantDetailsForm from './components/CompanyDetails';
import './index.css';

interface IClientRegistration {
  addressOptions?: any;
  setFormType: (value: string) => void;
  formType: string;
  role?: string;
}

const ClientRegistration = ({
  addressOptions,
  setFormType,
  formType,
  role
}: IClientRegistration) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formData = useRef(initalClientFormFieldValue);
  const userData = useSelector((state: any) => state?.register?.user);
  const setFormData = (data: any, value: string) => {
    formData.current = { ...formData.current, ...data };
  };

  useEffect(() => {
    setFormType(formType);
  }, [formType, setFormType, userData]);

  const formProps: FromPropsI = {
    formType,
    setFormType,
    formData: formData.current,
    setFormData,
    userData,
    handleFormType: (value: string) => {
      console.log(value);
    },
    role
  };

  return (
    <Fragment>
      {errorMessage ? (
        <CongratulationCard message="You have successfully verified your email address" />
      ) : (
        <Fragment>
          {formType === 'basicForm' && <BasicForm {...formProps} />}
          {formType === 'compnayDetails' && <CompantDetailsForm {...formProps} />}
          {formType === 'address' && <AddressDetail {...formProps} />}
          {formType === 'digitalPresence' && <DigitalPresence {...formProps} />}
          {formType === 'verifyEmail' && <VerifyEmail {...formProps} />}
          {formType === 'successModal' && (
            <CongratulationCard message="You have successfully verified your email address" />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ClientRegistration;
