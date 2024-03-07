import { Box, Typography, Button } from '@mui/material';

const AddCoderProposal = ({ setIsShowModal, handleCloseModal }: any) => {
  return (
    <Box>
      <Typography variant="h5">Do you want more coder for this ?</Typography>
      <Box p={2} display={'flex'} justifyContent={'space-evenly'}>
        <Button variant="contained" color="success" onClick={handleCloseModal}>
          Yes
        </Button>
        <Button variant="contained" color="error" onClick={() => setIsShowModal(false)}>
          No
        </Button>
      </Box>
    </Box>
  );
};

export default AddCoderProposal;
