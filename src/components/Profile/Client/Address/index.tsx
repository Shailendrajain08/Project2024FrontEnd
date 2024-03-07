import { Typography, Box, TextField, Button } from '@mui/material';
import { IAddress } from '../type';
import { Fragment } from 'react';
import './index.css';

const Address = ({ title, edit = {}, handleEdit, address, register }: IAddress) => {
  const { address_line1, address_line2, city, state = '', country = '', zipcode } = address;

  return (
    <Fragment>
      <Box className="personal-detail--basic-form-heading">
        <Typography variant="h5" className="address-heading">
          {title}
        </Typography>
      </Box>
      <Box className="address-field--wrapper">
        {edit.isEdit ? (
          <>
            <Box className="address-field--section">
              <Box className="address-field--section-left">
                <TextField
                  type="text"
                  id="addressLine1"
                  label="Address line 1"
                  defaultValue={address_line1}
                  {...register('addressLine1')}
                />
                <TextField
                  type="text"
                  id="addressLine2"
                  label="Address line 2"
                  defaultValue={address_line2}
                  {...register('addressLine2')}
                />
                <TextField
                  type="text"
                  id="country"
                  name="country"
                  label="Country"
                  defaultValue={country}
                  {...register('country')}
                />
              </Box>
              <Box className="address-field--section-right">
                <TextField
                  type="text"
                  id="state"
                  label="State"
                  defaultValue={state}
                  {...register('state')}
                />
                <TextField
                  type="text"
                  id="city"
                  label="City"
                  defaultValue={city}
                  {...register('city')}
                />
                <TextField
                  type="text"
                  id="zipcode"
                  label="Zipcode"
                  defaultValue={zipcode}
                  {...register('zipcode')}
                />
              </Box>
            </Box>
            <Box className="company-detail-btn-wrapper">
              <Button variant="outlined" className="outline-profile-btn" size="large">
                Cancel
              </Button>

              <Button variant="contained" className="profile-btn" size="large">
                Update
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Box className="address-field--section">
              <Box className="address-field--section-left">
                <TextField
                  type="text"
                  id="addressLine1"
                  label="Address line 1"
                  defaultValue={address_line1}
                  {...register('addressLine1')}
                  disabled
                />
                <TextField
                  type="text"
                  id="addressLine2"
                  label="Address line 2"
                  defaultValue={address_line2}
                  {...register('addressLine2')}
                  disabled
                />
                <TextField
                  type="text"
                  id="country"
                  name="country"
                  label="Country"
                  defaultValue={country}
                  {...register('country')}
                  disabled
                />
              </Box>
              <Box className="address-field--section-right">
                <TextField
                  type="text"
                  id="state"
                  label="State"
                  defaultValue={state}
                  {...register('state')}
                  disabled
                />
                <TextField
                  type="text"
                  id="city"
                  label="City"
                  defaultValue={city}
                  {...register('city')}
                  disabled
                />
                <TextField
                  type="text"
                  id="zipcode"
                  label="Zipcode"
                  defaultValue={zipcode}
                  {...register('zipcode')}
                  disabled
                />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Fragment>
  );
};

export default Address;
