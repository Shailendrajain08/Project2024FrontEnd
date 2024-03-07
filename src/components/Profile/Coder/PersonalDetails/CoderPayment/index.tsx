import React, { useEffect, useState } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import {
  Box,
  FormControl,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Button,
  InputAdornment
} from '@mui/material';
import './index.css';
import { personalDetail } from '../../constant';
import { banks, countryOptions, tax_id_options, unique_id_options } from './config';

interface FormValues {
  documents: {
    unique_id_doc: string;
    unique_id: string;
    tax_id: string;
    tax_id_no: string;
  }[];
}

const PaymentDetail = () => {
  const { basicInfo, payment_details, coder_address } = personalDetail;
  const accountNumber = payment_details.account_no;
  const [taxIdValue, setTaxIdValue] = useState('');
  const [taxIdFocus, setTaxIdFocus] = useState(false);
  const [fieldFocus, setFieldFocus] = React.useState(false);
  const [fieldValue, setFieldValue] = React.useState('');
  const bankoptions = banks;
  const tax_id = tax_id_options;
  const country = countryOptions;
  const unique_id = unique_id_options;
  // React Hook Form setup
  const { control, handleSubmit, watch, register } = useForm({
    defaultValues: {
      account_no: accountNumber,
      first_name: basicInfo.firstName,
      last_name: basicInfo.lastName,
      bank_name: 'Bank Name',
      branchName: 'Branch Name',
      swift_code: 'Swift Code',
      ifsc_code: 'IFSC Code',
      address_line_1: coder_address.address_line_1,
      address_line_2: coder_address.address_line_2,
      country: coder_address.country,
      state: coder_address.state,
      city: coder_address.city,
      zip_code: coder_address.zip_code,
      unique_id_doc: 'Unique id Doc',
      unique_id: 'Unique Id',
      tax_id: 'Tax Id',
      tax_id_no: 'Enter yor Tax id',
      documents: [
        {
          unique_id_doc: 'Unique id Doc',
          unique_id: 'Unique Id',
          tax_id: 'Tax Id',
          tax_id_no: 'Enter yor Tax id'
        }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'documents'
  });

  const handleAddMore = () => {
    append({ unique_id_doc: '', unique_id: '', tax_id: '', tax_id_no: '' });
  };

  const onSubmit = (data: object) => {
    console.log(data);
  };

  const watchedTaxId = watch('tax_id_no');
  useEffect(() => {
    if (!taxIdFocus) {
      setTaxIdValue(watchedTaxId);
    }
  }, [watchedTaxId, taxIdFocus]);

  const handleFieldChange = (e: any) => {
    setFieldValue(e.target.value);
  };

  const getDisplayValue = (accountNumber: string) => {
    if (accountNumber.length > 4) {
      const visiblePart = accountNumber.substring(0, 4);
      const remainingLength = accountNumber.length - 4;
      const maskedPart = '*'.repeat(remainingLength);
      const maskedPartWithGaps = maskedPart.match(/.{1,4}/g)?.join(' ') || '';
      return `${visiblePart} ${maskedPartWithGaps}`;
    }
    return accountNumber;
  };

  const maskFunction = (taxId: any) => taxId.replace(/.(?=.{4})/g, '•');

  return (
    <Box className="coder-profile-payment" component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box className="coder-profile-payment-container">
        <Typography variant="h1" pb={'32px'}>
          Payment Information
        </Typography>
        <Box className="coder-profile-payment-bank-info-box">
          <Typography variant="h3">Bank Information</Typography>

          <Controller
            name="account_no"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className="coder-profile-payment-bank-info-box--input--field"
                label="Account Number"
                fullWidth
                variant="outlined"
                value={getDisplayValue(field.value)}
                disabled
              />
            )}
          />

          <Box display={'flex'} columnGap={'16px'}>
            <Controller
              name="first_name"
              control={control}
              render={({ field }) => (
                <TextField
                  className="coder-profile-payment-bank-info-box--input--field"
                  {...field}
                  label="FirstName"
                  fullWidth
                  variant="outlined"
                  disabled
                />
              )}
            />
            <Controller
              name="last_name"
              control={control}
              render={({ field }) => (
                <TextField
                  className="coder-profile-payment-bank-info-box--input--field"
                  {...field}
                  disabled
                  label="LastName"
                  fullWidth
                  variant="outlined"
                />
              )}
            />
          </Box>

          <FormControl fullWidth>
            <InputLabel id="bank-select-label">Bank Name</InputLabel>
            <Controller
              name="bank_name"
              control={control}
              render={({ field }) => (
                <Select
                  className="coder-profile-payment-bank-info-box--input--field"
                  {...field}
                  labelId="bank-select-label"
                  label="Bank Name"
                  disabled>
                  {bankoptions.map((bank) => (
                    <MenuItem key={bank.id} value={bank.id}>
                      {bank.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
          <Controller
            name="branchName"
            control={control}
            render={({ field }) => (
              <TextField
                // placeholder="Bank Branch Name"
                className="coder-profile-payment-bank-info-box--input--field"
                {...field}
                disabled
                label="Bank Branch Name"
                fullWidth
                variant="outlined"
              />
            )}
          />
          <Box display={'flex'} columnGap={'16px'}>
            <Controller
              name="swift_code"
              control={control}
              render={({ field }) => (
                <TextField
                  // placeholder="Swift Code"
                  className="coder-profile-payment-bank-info-box--input--field"
                  {...field}
                  disabled
                  label="Swift Code"
                  fullWidth
                  variant="outlined"
                />
              )}
            />
            <Controller
              name="ifsc_code"
              control={control}
              render={({ field }) => (
                <TextField
                  // placeholder="IFSC Code"
                  className="coder-profile-payment-bank-info-box--input--field"
                  {...field}
                  disabled
                  label="IFSC Code"
                  fullWidth
                  variant="outlined"
                />
              )}
            />
          </Box>
        </Box>
        <Box className="coder-profile-payment-bank-info-box">
          <Typography variant="h3">Address details</Typography>
          <Box display={'flex'} columnGap={'16px'}>
            <Controller
              name="address_line_1"
              control={control}
              render={({ field }) => (
                <TextField
                  className="coder-profile-payment-bank-info-box--input--field"
                  {...field}
                  disabled
                  label="FirstName"
                  fullWidth
                  variant="outlined"
                />
              )}
            />
            <Controller
              name="address_line_2"
              control={control}
              render={({ field }) => (
                <TextField
                  className="coder-profile-payment-bank-info-box--input--field"
                  {...field}
                  disabled
                  label="LastName"
                  fullWidth
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box display={'flex'} columnGap={'16px'}>
            <FormControl fullWidth>
              <InputLabel id="country-select-label">Country</InputLabel>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select
                    className="coder-profile-payment-bank-info-box--input--field"
                    {...field}
                    labelId="country-select-label"
                    label="Country"
                    disabled>
                    {country.map((country) => (
                      <MenuItem key={country.id} value={country.id}>
                        {country.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <TextField
                  className="coder-profile-payment-bank-info-box--input--field"
                  {...field}
                  label="State"
                  fullWidth
                  variant="outlined"
                  disabled
                />
              )}
            />
          </Box>
          <Box display={'flex'} columnGap={'16px'}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  className="coder-profile-payment-bank-info-box--input--field"
                  {...field}
                  label="City"
                  fullWidth
                  variant="outlined"
                  disabled
                />
              )}
            />
            <Controller
              name="zip_code"
              control={control}
              render={({ field }) => (
                <TextField
                  className="coder-profile-payment-bank-info-box--input--field"
                  {...field}
                  label="Zip code"
                  fullWidth
                  variant="outlined"
                  disabled
                />
              )}
            />
          </Box>
        </Box>
        <Box className="coder-profile-payment-bank-info-box">
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h3">Documents</Typography>
            <Button size="large" className="add-more-prfl-btn" onClick={handleAddMore}>
              Add More
            </Button>
          </Box>
          {fields.map((field, index) => (
            <Box display={'flex'} flexDirection={'column'} rowGap={'24px'} key={field.id}>
              {/* Render Select for unique_id_doc */}
              <Controller
                name={`documents[${index}].unique_id_doc` as any}
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id={`unique_id_doc-select-label-${index}`}>Unique Id</InputLabel>
                    <Select
                      className="coder-profile-payment-bank-info-box--input--field"
                      {...field}
                      label="Unique Id"
                      disabled>
                      {unique_id.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
              <TextField
                label="Unique ID"
                className="unique-id-text-field"
                fullWidth
                variant="outlined"
                {...register(`documents[${index}].unique_id` as any)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        className="unique-id-text-field-button"
                        component="label"
                        size="medium">
                        Choose File
                        <input type="file" hidden />
                      </Button>
                    </InputAdornment>
                  )
                }}
                disabled
              />
              <Controller
                name={`documents[${index}].tax_id` as any}
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id={`tax_id-select-label-${index}`}>Tax Id</InputLabel>
                    <Select
                      className="coder-profile-payment-bank-info-box--input--field"
                      {...field}
                      label="Tax id"
                      disabled>
                      {tax_id.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
              <Controller
                name={`documents[${index}].unique_id_doc` as any}
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Enter your Tax ID"
                    className="coder-profile-payment-bank-info-box--input--field"
                    fullWidth
                    variant="outlined"
                    value={fieldFocus ? fieldValue : maskFunction(fieldValue)}
                    onChange={(e) => {
                      handleFieldChange(e);
                      field.onChange(e.target.value);
                    }}
                    onFocus={() => setFieldFocus(true)}
                    onBlur={() => {
                      setFieldFocus(false);
                      field.onBlur();
                    }}
                    disabled
                  />
                )}
              />
              {fields.length > 1 && (
                <Button variant="outlined" onClick={() => remove(index)}>
                  Remove
                </Button>
              )}
            </Box>
          ))}
        </Box>
      </Box>
      <Box pb={' 100.28px'} className="company-detail-btn-wrapper">
        {/* <Button
          variant="outlined"
          className="profile-btn"
          size="large"
          onClick={() => console.log('')}>
          Cancel
        </Button>

        <Button type="submit" variant="contained" className="profile-btn" size="large">
          Update
        </Button> */}
      </Box>
    </Box>
  );
};

export default PaymentDetail;
