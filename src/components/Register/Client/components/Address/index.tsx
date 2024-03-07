import { Controller, useForm } from 'react-hook-form';
import {
  Grid,
  Button,
  Box,
  Typography,
  CircularProgress,
  Autocomplete,
  TextField
} from '@mui/material';
import { Input } from '../../../../Common';
import { FromPropsI } from '../../../type';
import { yupResolver } from '@hookform/resolvers/yup';
import { clientaddressForm, coder } from '../../../validationSchema';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  createAddress,
  resetCompanyStatus,
  updateAddress
} from '../../../../../store/actions/register';
import { useEffect, useState } from 'react';
import SnackBarComponent from '../../../../Common/SnackBar';
import { countries } from '../../../country';

const AddressDetail = ({ setFormType, role }: FromPropsI) => {
  const dispatch = useDispatch();
  const addressData = useSelector((state: any) => state?.addressReducer);
  const userId = addressData?.addressdetails?.id;
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, dirtyFields }
  } = useForm({
    resolver: yupResolver(role === 'CODER' ? coder.addressForm : clientaddressForm),
    defaultValues: {
      address_line_1: addressData?.addressdetails?.address_line_1
        ? addressData?.addressdetails?.address_line_1
        : '',
      address_line_2: addressData?.addressdetails?.address_line_2
        ? addressData?.addressdetails?.address_line_2
        : '',
      city: addressData?.addressdetails?.city ? addressData?.addressdetails?.city : '',
      state: addressData?.addressdetails?.state ? addressData?.addressdetails?.state : '',
      zip_code: addressData?.addressdetails?.zip_code ? addressData?.addressdetails?.zip_code : '',
      country: addressData?.addressdetails?.country ? addressData?.addressdetails?.country : ''
    }
  });

  const [showMessages, setShowMessages] = useState({
    showSnackBar: false,
    snackBarMessage: '',
    messageType: ''
  });

  useEffect(() => {
    if (addressData?.addressStatus) {
      setFormType('digitalPresence');
    } else {
      if (addressData?.error) {
        setShowMessages((prev) => ({
          ...prev,
          showSnackBar: true,
          snackBarMessage: addressData?.error,
          messageType: 'error'
        }));
      }
    }
  }, [addressData, setFormType]);
  const handleAddress = (data: any) => {
    if (addressData?.addressdetails?.id?.length > 0) {
      if (
        dirtyFields.address_line_1 ||
        dirtyFields.address_line_2 ||
        dirtyFields.city ||
        dirtyFields.state ||
        dirtyFields.zip_code ||
        dirtyFields.country
      ) {
        dispatch(updateAddress(data, userId));
      } else {
        setFormType('digitalPresence');
      }
    } else {
      dispatch(createAddress(data));
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(handleAddress)} className="form-container">
        <Box className="heading-wrapper">
          <Typography variant="h1">Address</Typography>
        </Box>
        <Grid container className="grid-container">
          <Grid item xs={12} className="grid-wrapper">
            <Controller
              name="country"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  value={countries.find((c) => c.label === value) || null} // Find the country object that matches the form value or null
                  options={countries}
                  getOptionLabel={(option) => (option ? option.label : '')}
                  onChange={(_, item) => {
                    // When an item is selected, update the form's value with the item's code (or label if preferred)
                    onChange(item ? item.label : '');
                  }}
                  isOptionEqualToValue={(option: any, value) => option.label === value}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={`${'Country'}${role === 'CODER' ? ' *' : ''}`}
                      error={!!errors.country}
                      helperText={errors.country?.message}
                    />
                  )}
                  renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                      <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                      />
                      {option.label} ({option.code})
                    </Box>
                  )}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} className="grid-wrapper">
            <Input
              type="text"
              id="state"
              name="state"
              label={`${'State'}${role === 'CODER' ? ' *' : ''}`}
              isRequired={false}
              register={register}
              error={errors}
              className="state-select"
            />
          </Grid>
          <Grid item xs={12} className="grid-wrapper">
            <Input
              type="text"
              id="city"
              name="city"
              label={`${'City'}${role === 'CODER' ? ' *' : ''}`}
              isRequired={false}
              register={register}
              error={errors}
              className="city-select"
            />
          </Grid>
          <Grid item xs={12} className="grid-wrapper">
            <Input
              type="text"
              id="zip_code"
              name="zip_code"
              label={`${'Zipcode'}${role === 'CODER' ? ' *' : ''}`}
              isRequired={false}
              register={register}
              error={errors}
              placeholder="zip_code"
              className="zip-field"
            />
          </Grid>
          <Grid item xs={12} className="grid-wrapper">
            <Input
              type="text"
              id="address_line_1"
              name="address_line_1"
              label={`${'Address line 1'}${role === 'CODER' ? ' *' : ''}`}
              isRequired={false}
              register={register}
              error={errors}
              placeholder="Address line 1"
              className={`address-field `}
            />
          </Grid>
          <Grid item xs={12} className="grid-wrapper">
            <Input
              type="text"
              id="address_line_2"
              name="address_line_2"
              label="Address line 2"
              isRequired={false}
              register={register}
              placeholder="Address line 2"
              error={errors}
              className="address-field"
            />
          </Grid>
        </Grid>

        <Box className="btn-wrapper">
          {role === 'CLIENT' && (
            <Box>
              <Button
                type="submit"
                size="medium"
                className="skip-btn"
                onClick={() => {
                  setFormType('digitalPresence');
                }}>
                Skip
              </Button>
            </Box>
          )}
          <Box className={role === 'CLIENT' ? 'handle-btn' : 'handle-btn-coder'}>
            <Button
              size="large"
              variant="outlined"
              onClick={() => {
                dispatch(resetCompanyStatus());
                if (role === 'CLIENT') {
                  setFormType('compnayDetails');
                } else {
                  setFormType('educationForm');
                }
              }}>
              Back
            </Button>
            <Button variant="contained" type="submit" size="large">
              {addressData.loading ? (
                <CircularProgress size={30} color="secondary" style={{ position: 'absolute' }} />
              ) : (
                <>Next</>
              )}
            </Button>
          </Box>
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

export default AddressDetail;
