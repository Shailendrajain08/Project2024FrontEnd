import { Fragment, useState, useEffect, useRef } from 'react';
import BasicForm from './components/BasicForm';
import SkillsForm from './components/SkillsForm';
import EducationForm from './components/educationForm';
import CongratulationCard from '../../Common/CongratulationCard';
import { coderRegistrationFormSteps, initalCoderFormFieldValue } from '../../../constants/forms';
import DigitalPresence from './components/DigitalPresence';
import { UserDataI, FromPropsI } from '../type';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import AgencySkill from './components/AgencyForm';
import AddressDetail from '../Client/components/Address';
import VerifyEmail from '../Client/components/VerifyEmail';

interface ICoderRegistration {
  setFormType: (value: string) => void;
  formType: string;
  role: string;
}
const CoderRegistration = ({ formType, setFormType, role }: ICoderRegistration) => {
  // coder Data will use for reference
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [coderData, setCoderData] = useState<object>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formData = useRef(initalCoderFormFieldValue);
  const userData: UserDataI = useSelector((state: any) => state?.register?.user);
  //remove this function when new api integration
  const setFormData = (data: any, value: string) => {
    formData.current = { ...formData.current, ...data };
  };
  useEffect(() => {
    setCoderData(userData);
  }, [userData]);
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
          {formType === 'skillsForm' && <SkillsForm {...formProps} />}
          {formType === 'educationForm' && <EducationForm {...formProps} />}
          {formType === 'address' && <AddressDetail {...formProps} role={role} />}
          {formType === 'agencyForm' && <AgencySkill {...formProps} />}

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

export default CoderRegistration;
