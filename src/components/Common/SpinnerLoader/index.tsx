import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../index.css';

const SpinnerLoader = () => {
  return (
    <Box className="spinner-loader">
      <CircularProgress size={60} thickness={4} />
    </Box>
  );
};

export default SpinnerLoader;
