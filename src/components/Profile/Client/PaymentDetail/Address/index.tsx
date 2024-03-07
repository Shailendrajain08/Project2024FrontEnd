import { Box, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Select } from '../../../../Common';
import { EditI } from '../../type';

interface AddressDetailsProp {
  edit: EditI;
  handleEdit: () => void;
}
const AddressDetails = ({ edit, handleEdit }: AddressDetailsProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <Box className="payment-address--wrapper">
      <Box>
        <Typography variant="h5" className="payment-address--title">
          Billing Address
        </Typography>
      </Box>
      {edit.isEdit ? (
        <Box className="payment-address--fields">
          <Select
            id="country"
            name="country"
            label="Country"
            isRequired={false}
            register={register}
            defaultValue={''}
            error={errors}
            options={[{ value: '', label: '' }]}
          />
          <Select
            id="state"
            name="state"
            label="State"
            isRequired={false}
            register={register}
            defaultValue={''}
            error={errors}
            options={[{ value: '', label: '' }]}
          />
          <Select
            id="city"
            name="city"
            label="City"
            isRequired={false}
            register={register}
            defaultValue={''}
            error={errors}
            options={[{ value: '', label: '' }]}
          />
          <TextField
            type="text"
            id="zipcode"
            label="Zipcode"
            // defaultValue={zipcode}
            {...register('zipcode')}
          />
          <TextField
            type="text"
            id="addressLine1"
            label="Address line 1"
            // defaultValue={address_line1}
            {...register('addressLine1')}
          />
          <TextField
            type="text"
            id="addressLine2"
            label="Address line 2"
            // defaultValue={address_line2}
            {...register('addressLine2')}
          />
        </Box>
      ) : (
        <Box className="payment-address--fields disable">
          <Select
            id="country"
            name="country"
            label="Country"
            isRequired={false}
            register={register}
            defaultValue={''}
            error={errors}
            options={[{ value: '', label: '' }]}
          />
          <Select
            id="state"
            name="state"
            label="State"
            isRequired={false}
            register={register}
            defaultValue={''}
            error={errors}
            options={[{ value: '', label: '' }]}
          />
          <Select
            id="city"
            name="city"
            label="City"
            isRequired={false}
            register={register}
            defaultValue={''}
            error={errors}
            options={[{ value: '', label: '' }]}
          />
          <TextField
            type="text"
            id="zipcode"
            label="Zipcode"
            // defaultValue={zipcode}
            {...register('zipcode')}
            disabled
          />
          <TextField
            type="text"
            id="addressLine1"
            label="Address line 1"
            // defaultValue={address_line1}
            {...register('addressLine1')}
            disabled
          />
          <TextField
            type="text"
            id="addressLine2"
            label="Address line 2"
            // defaultValue={address_line2}
            {...register('addressLine2')}
            disabled
          />
        </Box>
      )}
    </Box>
  );
};

export default AddressDetails;
