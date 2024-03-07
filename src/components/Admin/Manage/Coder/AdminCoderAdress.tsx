import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { ICoderData } from '../../type';

interface SkillsDetailsProps {
  data: ICoderData;
}

const AdminCoderAddressDetail: React.FC<SkillsDetailsProps> = ({ data }) => {
  const addressDetails = [
    { label: 'Address Line 1', value: data.address.address_line_1 },
    { label: 'Country', value: data.country },
    { label: 'Address Line 2', value: data.address.address_line_2 },
    { label: 'State', value: data.state },
    { label: 'City', value: data.city },
    { label: 'Zip Code', value: data.address.zip_code }
  ];

  return (
    <>
      <Box pb={'24px'} className="Admin-address--main-container">
        <Box textAlign={'start'}>
          <Typography mb={'16px'} variant="subtitle1">
            Address
          </Typography>
          <Box className="admin-address--container">
            {addressDetails.map((detail, index) => (
              <Box key={index} mb={'16px'} className={`admin-address-box-${index}`}>
                <Typography variant="subtitle2">{detail.label}</Typography>
                <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
                  {detail.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminCoderAddressDetail;
