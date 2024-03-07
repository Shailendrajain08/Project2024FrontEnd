import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import Address from '../Address';

const AddressDetail = ({ address, edit, handleEdit }: any) => {
  const { register, handleSubmit, getValues, watch } = useForm();
  const handleAddress = (data: any) => {
    if (handleEdit) handleEdit('address');
    console.log('data', data);
  };
  return (
    <Box className="address--main-wrapper">
      <form onSubmit={handleSubmit(handleAddress)}>
        <Address
          address={address}
          edit={edit}
          handleEdit={handleEdit}
          title="Address details"
          register={register}
        />
      </form>
    </Box>
  );
};

export default AddressDetail;
