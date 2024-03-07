import { useForm } from 'react-hook-form';
import { Typography, Box, Avatar, Button, TextField } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { IBasicInfo } from '../type';

const BasicInfo = ({
  firstName,
  lastName,
  username,
  company_email,
  phone,
  edit,
  handleEdit
}: IBasicInfo) => {
  const { register, handleSubmit } = useForm();

  const handleBasicForm = (data: any) => {
    handleEdit('basicInfo');
    console.log('data', data);
  };
  return (
    <Box className="basic-detail--profile">
      <Box className="avatar--wrapper">
        <Box className="personal-detail--profile">
          <Avatar
            className="personal-detail--profile-avtar"
            // need to be replaced when APi integration.
            src="/images/png/submit_profile.png"
          />
          <Box className="profile-pic-edit">
            <CameraAltOutlinedIcon />
          </Box>
        </Box>
      </Box>
      <Box className="basic-details--form">
        <Box className="basic-details--heading">
          <Typography variant="h3" textAlign={'start'}>
            Basic details
          </Typography>
        </Box>
        <form className="basic-field--wrapper" onSubmit={handleSubmit(handleBasicForm)}>
          <Box className="basic-name--field-wrapper">
            <TextField
              type="email"
              id="firstName"
              label="First Name"
              defaultValue={firstName}
              {...register('firstName')}
              disabled
            />
            <TextField
              type="email"
              id="lastName"
              label="Last Name"
              defaultValue={lastName}
              {...register('lastName')}
              disabled
            />
          </Box>
          <Box>
            <TextField
              type="email"
              id="phone"
              label="Phone"
              defaultValue={phone}
              {...register('phone')}
              disabled
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              type="email"
              id="username"
              label="User Name"
              defaultValue={username}
              {...register('username')}
              disabled
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              type="email"
              id="company_email"
              label="Email Address"
              defaultValue={company_email}
              {...register('company_email')}
              disabled
              fullWidth
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default BasicInfo;
