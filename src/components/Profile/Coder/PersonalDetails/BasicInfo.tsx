import React from 'react';
import {
  Avatar,
  Box,
  Button,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  capitalize
} from '@mui/material';
import { personalDetail } from '../constant';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { EditI } from '../type';
import { Controller, useForm } from 'react-hook-form';
import { Select } from '../../../Common';

interface EducationDetailsProps {
  edit: EditI;
  handleEdit: () => void;
  setEdit: (edit: EditI) => void;
}

const CoderBasicInfo = ({ edit, handleEdit, setEdit }: EducationDetailsProps) => {
  const { companyDetail, coder_basicInfo } = personalDetail;
  const newCompanyDetail = { ...companyDetail };
  const newCoderBasicInfo = { ...coder_basicInfo };
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      type: newCoderBasicInfo.type,
      firstName: newCoderBasicInfo.first_name,
      lastName: newCoderBasicInfo.last_name,
      phone: newCoderBasicInfo.phone,
      username: newCoderBasicInfo.username,
      email: newCoderBasicInfo.email,
      company_name: newCompanyDetail.company_name,
      company_website: newCompanyDetail.company_website
    }
  });

  const handleBasicForm = (data: any) => {
    setEdit({ isEdit: false });
  };

  return (
    <Box className="basic-info-main-container">
      {edit.isEdit ? (
        <>
          <Box className="coder-basic-detail--profile">
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
              <form className="coder-basic-field--wrapper" onSubmit={handleSubmit(handleBasicForm)}>
                <Box display={'flex'} flexDirection={'column'} rowGap={'24px'}>
                  <Box className="basic-details--heading">
                    <Typography variant="h3" pb={'8px'}>
                      Basic details
                    </Typography>
                  </Box>
                  <Box className="basic-name--field-wrapper">
                    <TextField
                      type="text"
                      id="firstName"
                      label="First Name"
                      defaultValue
                      {...register('firstName', { required: 'Name is Required' })}
                    />
                    <TextField
                      type="text"
                      id="lastName"
                      label="Last Name"
                      defaultValue
                      {...register('lastName')}
                    />
                  </Box>
                  <Box>
                    <TextField
                      type="number"
                      id="phone"
                      label="Phone"
                      defaultValue
                      {...register('phone')}
                      fullWidth
                    />
                  </Box>
                  <Box>
                    <TextField
                      type="email"
                      id="username"
                      label="User Name"
                      defaultValue
                      {...register('username')}
                      fullWidth
                    />
                  </Box>
                  <Box>
                    <TextField
                      type="email"
                      id="company_email"
                      label="Email Address"
                      defaultValue
                      {...register('email')}
                      fullWidth
                    />
                  </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} rowGap={'24px'}>
                  <Box className="basic-details--heading">
                    <Typography variant="h3" pb={'8px'}>
                      Company details
                    </Typography>
                  </Box>
                  <Box>
                    <TextField
                      type="email"
                      id="company_name"
                      label="Company Name"
                      defaultValue
                      {...register('company_name')}
                      fullWidth
                    />
                  </Box>
                  <Box>
                    <TextField
                      type="text"
                      id="company_website"
                      label="Company Website"
                      defaultValue
                      {...register('company_website')}
                      fullWidth
                    />
                  </Box>
                  <Box>
                    <Select
                      id="type"
                      name="type"
                      defaultValue={newCoderBasicInfo.type}
                      label="Working as"
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
              </form>
              <Box className="company-detail-btn-wrapper">
                <Button
                  variant="outlined"
                  className="profile-btn"
                  size="large"
                  onClick={() => setEdit({ isEdit: false })}>
                  Cancel
                </Button>

                <Button type="submit" variant="contained" className="profile-btn" size="large">
                  Update
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      ) : null}
    </Box>
  );
};

export default CoderBasicInfo;
