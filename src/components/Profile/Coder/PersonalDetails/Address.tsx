import React, { useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { personalDetail } from '../constant';
import { EditI } from '../type';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoderAddress } from '../../../../store/actions/profile/coder.actionCreators';
import { SpinnerLoader } from '../../../Common';
import { isObjectEmpty } from '../../../../helper/utils';
import { RootState } from '../../../../store/reducers';

interface SkillsDetailsProps {
  edit: EditI;
  handleEdit: () => void;
}

const AddressDetail: React.FC<SkillsDetailsProps> = ({ edit, handleEdit }) => {
  const dispatch = useDispatch();
  const { address: coder_address, loading } = useSelector(
    (state: RootState) => state.profile.coderAddressReducer
  );

  useEffect(() => {
    if (isObjectEmpty(coder_address)) {
      dispatch(fetchCoderAddress());
    }
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Container>
      <Box className="address--main-container">
        <Box textAlign={'start'}>
          <Typography mb={'16px'} variant="subtitle1">
            Address
          </Typography>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Box>
              <Box mb={'16px'} className="address-detail-box">
                <Typography variant="subtitle2">Address Line 1</Typography>
                <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
                  {coder_address.address_line_1}
                </Typography>
              </Box>
              <Box className="address-detail-box">
                <Typography variant="subtitle2">Country</Typography>
                <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
                  {coder_address.country}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box mb={'16px'} className="address-detail-box">
                <Typography variant="subtitle2">Address Line 2</Typography>
                <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
                  {coder_address.address_line_2}
                </Typography>
              </Box>
              <Box className="address-detail-box">
                <Typography variant="subtitle2">State</Typography>
                <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
                  {coder_address.state}
                </Typography>
              </Box>
            </Box>
            <Box className="address-main-detail-box">
              <Box className="address-detail-box">
                <Typography variant="subtitle2">City </Typography>
                <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
                  {coder_address.city}
                </Typography>
              </Box>
            </Box>
            <Box className="address-main-detail-box">
              <Box className="address-detail-box">
                <Typography variant="subtitle2">Zip Code</Typography>
                <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
                  {coder_address.zip_code}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display={'flex'} flexDirection={'row'} columnGap={'148px'}></Box>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}></Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AddressDetail;
