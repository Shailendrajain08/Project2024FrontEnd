import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Input, Select } from '../Common';
import { useForm } from 'react-hook-form';

interface PaymentInformationProps {
  isEdit?: boolean;
  toggleEditMode?: any;
}
export default function PaymentInformation({
  toggleEditMode,
  isEdit = false
}: PaymentInformationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const updateFormData = () => {
    toggleEditMode();
  };
  return (
    <form onSubmit={handleSubmit(updateFormData)}>
      <Grid container direction="column" spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Account Number
          </Typography>
        </Grid>
        {isEdit ? (
          <Input
            type="text"
            id="accountNumber"
            name="accountNumber"
            label="Account Number"
            isRequired={false}
            register={register}
            error={errors}
            defaultValue={'1234567890'}
          />
        ) : (
          <Grid item xs={10} textAlign={'start'}>
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>1234567890</Typography>
          </Grid>
        )}
      </Grid>
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={2} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                First Name(As mentioned in the bank)
              </Typography>
            </Grid>
            {isEdit ? (
              <Input
                type="text"
                id="firstName"
                name="firstName"
                label="First Name"
                isRequired={false}
                register={register}
                error={errors}
                defaultValue={'Varma'}
              />
            ) : (
              <Grid item xs={10} textAlign={'start'}>
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Varma</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={2} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Last Name(As mentioned in the bank)
              </Typography>
            </Grid>
            {isEdit ? (
              <Input
                type="text"
                id="lastName"
                name="lastName"
                label="Last Name"
                isRequired={false}
                register={register}
                error={errors}
                defaultValue={'Sharma'}
              />
            ) : (
              <Grid item xs={10} textAlign={'start'}>
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Sharma</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            Bank Name
          </Typography>
        </Grid>
        {isEdit ? (
          <Select
            id="bankName"
            name="bankName"
            label="Bank Name"
            isRequired={false}
            register={register}
            defaultValue={'aus'}
            error={errors}
            options={[{ value: 'aus', label: 'Australian Bank' }]}
          />
        ) : (
          <Grid item xs={10} textAlign={'start'}>
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Australian Bank</Typography>
          </Grid>
        )}
      </Grid>
      <Grid container direction="column" spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={2} textAlign={'start'}>
          <Typography sx={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
            StackOverFlow
          </Typography>
        </Grid>
        {isEdit ? (
          <Select
            id="bankBranchName"
            name="bankBranchName"
            label="Bank Branch Name"
            isRequired={false}
            register={register}
            defaultValue={'perth'}
            error={errors}
            options={[{ value: 'perth', label: 'Perth' }]}
          />
        ) : (
          <Grid item xs={10} textAlign={'start'}>
            <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Perth</Typography>
          </Grid>
        )}
      </Grid>

      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={2} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                SWIFT Code
              </Typography>
            </Grid>
            {isEdit ? (
              <Input
                type="text"
                id="swiftCode"
                name="swiftCode"
                label="SWIFT Code"
                isRequired={false}
                register={register}
                error={errors}
                defaultValue={'123'}
              />
            ) : (
              <Grid item xs={10} textAlign={'start'}>
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>123</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={2} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                IFSC Code
              </Typography>
            </Grid>
            {isEdit ? (
              <Input
                type="text"
                id="ifscCode"
                name="ifscCode"
                label="IFSC Code"
                isRequired={false}
                register={register}
                error={errors}
                defaultValue={'AUS123'}
              />
            ) : (
              <Grid item xs={10} textAlign={'start'}>
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>AUS123</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={12} alignContent={'center'}>
          <Typography sx={{ fontSize: 17, fontWeight: '900' }}>Address</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={2} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Address Line 1
              </Typography>
            </Grid>
            {isEdit ? (
              <Input
                type="text"
                id="address1"
                name="address1"
                label="Address Line 1"
                isRequired={false}
                register={register}
                error={errors}
                defaultValue={'Test Address 1'}
              />
            ) : (
              <Grid item xs={10} textAlign={'start'}>
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Test Address 1</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={2} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Address Line 2
              </Typography>
            </Grid>
            {isEdit ? (
              <Input
                type="text"
                id="address2"
                name="address2"
                label="Address Line 2"
                isRequired={false}
                register={register}
                error={errors}
                defaultValue={'Test Address 2'}
              />
            ) : (
              <Grid item xs={10} textAlign={'start'}>
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Test Address 2</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={3}>
          {' '}
          <Grid container direction={'column'} spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Country
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={'start'}>
              {isEdit ? (
                <Select
                  id="country"
                  name="country"
                  label="Country"
                  isRequired={false}
                  register={register}
                  defaultValue={'usa'}
                  error={errors}
                  options={[{ value: 'usa', label: 'USA' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>USA</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction={'column'} spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                State
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={'start'}>
              {isEdit ? (
                <Select
                  id="state"
                  name="state"
                  label="State"
                  isRequired={false}
                  register={register}
                  defaultValue={'newyork'}
                  error={errors}
                  options={[{ value: 'newyork', label: 'New York' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>New York</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction={'column'} spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                City
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={'start'}>
              {isEdit ? (
                <Select
                  id="city"
                  name="city"
                  label="City"
                  isRequired={false}
                  register={register}
                  defaultValue={'kingston'}
                  error={errors}
                  options={[{ value: 'kingston', label: 'Kingston' }]}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>Kingston</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction={'column'} spacing={2} sx={{ mb: 8 }}>
            <Grid item xs={12} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Zip Code
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign={'start'}>
              {isEdit ? (
                <Input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  label="Zipcode"
                  isRequired={false}
                  register={register}
                  error={errors}
                  defaultValue={' 12041'}
                />
              ) : (
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>12041</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={2} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Unique ID
              </Typography>
            </Grid>
            {isEdit ? (
              <Select
                id="uniqueId"
                name="uniqueId"
                label="Unique ID"
                isRequired={false}
                register={register}
                defaultValue={'pan'}
                error={errors}
                options={[
                  { value: 'pan', label: 'PAN' },
                  { value: 'itin', label: 'ITIN' },
                  { value: 'ein', label: 'EIN' }
                ]}
              />
            ) : (
              <Grid item xs={10} textAlign={'start'}>
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>PAN</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={2} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Tax ID Value
              </Typography>
            </Grid>
            {isEdit ? (
              <Input
                type="text"
                id="taxIdValue"
                name="taxIdValue"
                label="Tax ID Value"
                isRequired={false}
                register={register}
                error={errors}
                defaultValue={'BTNPA6575'}
              />
            ) : (
              <Grid item xs={10} textAlign={'start'}>
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>BTNPA6575</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mb: 8 }}>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={2} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Tax ID
              </Typography>
            </Grid>
            {isEdit ? (
              <Select
                id="taxId"
                name="taxId"
                label="Tax ID"
                isRequired={false}
                register={register}
                defaultValue={'pan'}
                error={errors}
                options={[
                  { value: 'pan', label: 'PAN' },
                  { value: 'itin', label: 'ITIN' },
                  { value: 'ein', label: 'EIN' }
                ]}
              />
            ) : (
              <Grid item xs={10} textAlign={'start'}>
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>PAN</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={2} textAlign={'start'}>
              <Typography
                sx={{
                  fontSize: 16,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  mb: 1
                }}>
                Tax ID Value
              </Typography>
            </Grid>
            {isEdit ? (
              <Input
                type="text"
                id="taxIdValue"
                name="taxIdValue"
                label="Tax ID Value"
                isRequired={false}
                register={register}
                error={errors}
                defaultValue={'BTNPA6575'}
              />
            ) : (
              <Grid item xs={10} textAlign={'start'}>
                <Typography sx={{ fontSize: 15, textAlign: 'left' }}>BTNPA6575</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      {isEdit ? (
        <Grid container spacing={2} sx={{ mb: 8 }}>
          <Grid item xs={12} textAlign={'right'}>
            <Button type="submit" variant="contained">
              Update
            </Button>
          </Grid>
        </Grid>
      ) : null}
    </form>
  );
}
