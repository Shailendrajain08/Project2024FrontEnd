import { useEffect } from 'react';
import { getTnC } from '../../store/actions/tnc';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Box, Container, Typography } from '@mui/material';
import './tnc.css';
import { SpinnerLoader } from '../Common';

const TermsConditions = () => {
  const dispatch = useDispatch();
  const tncReducer = useSelector((state: any) => state.tncReducer);
  const { tncData, loading } = tncReducer;

  useEffect(() => {
    dispatch(getTnC());
  }, []);

  return (
    <Container>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <Box>
          <Typography className="tnctitle">Terms and Conditions</Typography>
          <Typography className="tnccontent">{tncData.content}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default TermsConditions;
