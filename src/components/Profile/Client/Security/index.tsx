import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ChangePassword from './ChangePassword';
import { Box, Typography } from '@mui/material';

const Security = () => {
  const { register, handleSubmit, control, setValue } = useForm();
  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState<boolean>(false);
  const handleChangePassword = (data: any) => {
    setIsShowSuccessMessage(true);
  };
  return (
    <Box className="password-change--form">
      <Typography variant="h4" textAlign="start" className="password-profile-heading">
        Password & security
      </Typography>
      <form onSubmit={handleSubmit(handleChangePassword)}>
        <Typography variant="h5" textAlign="start" className="password-profile-sub-heading">
          Change Password
        </Typography>
        <ChangePassword
          register={register}
          control={control}
          setValue={setValue}
          // setIsOpen={setIsOpen}
        />
      </form>
    </Box>
  );
};

export default Security;
