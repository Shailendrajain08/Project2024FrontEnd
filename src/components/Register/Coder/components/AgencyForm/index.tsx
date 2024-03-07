import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import './index.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../../../Common';
import * as yup from 'yup';

interface AgencyProps {
  setFormType: (data: string) => void;
}

const schema = yup.object().shape({
  agencyname: yup.string().required('Name is required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Enter a valid phone number'),
  country: yup.string(),
  state: yup.string(),
  city: yup.string(),
  zipcode: yup.string(),
  address_line1: yup.string(),
  address_line2: yup.string()
});

const AgencySkill = ({ setFormType }: AgencyProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) as any });

  const onSubmit = (data: any) => {
    console.log(data);
    setFormType('skillsForm');
  };

  return (
    <Box className="main_container_agency_form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography className="heading-style" variant="h3">
          Agency
        </Typography>

        <Box display="flex" flexDirection="column" rowGap="24px">
          <Input
            type="agencyname"
            id="agencyname"
            name="agencyname"
            label="Agency Name"
            isRequired={true}
            register={register}
            error={errors}
          />
          <Input
            type="website"
            id="website"
            name="website"
            label="Website"
            isRequired={true}
            register={register}
            error={errors}
          />
          <Input
            type="contactNo"
            id="contactNo"
            name="contactNo"
            label="Contact No"
            isRequired={true}
            register={register}
            error={errors}
          />

          <Box className="address-country">
            <Input
              type="country"
              id="country"
              name="country"
              label="Country"
              isRequired={true}
              register={register}
              error={errors}
            />
            <Input
              type="state"
              id="state"
              name="state"
              label="State"
              isRequired={true}
              register={register}
              error={errors}
            />
            <Input
              type="city"
              id="city"
              name="city"
              label="City"
              isRequired={true}
              register={register}
              error={errors}
            />
            <Input
              type="zipcode"
              id="zipcode"
              name="zipcode"
              label="Zip Code"
              isRequired={true}
              register={register}
              error={errors}
            />
          </Box>

          <Input
            type="address_line1"
            id="address_line1"
            name="address_line1"
            label="Address line 1"
            isRequired={true}
            register={register}
            error={errors}
          />
          <Input
            type="address_line2"
            id="address_line1"
            name="address_line1"
            label="Address line 2"
            isRequired={true}
            register={register}
            error={errors}
          />
        </Box>

        <Box className="agency_button_style">
          <Button className="submit-btn" variant="contained" type="submit">
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AgencySkill;
