import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { PictureAsPdfOutlined } from '@mui/icons-material';
import { ICoderData } from '../../type';

interface SkillsDetailsProps {
  data: ICoderData;
}

const AdminCoderPayment: React.FC<SkillsDetailsProps> = ({ data }) => {
  const paymentDetails = [
    { label: 'First Name', value: data.first_name },
    { label: 'Unique ID', isButton: true, buttonText: 'Aadhar Card', fileSize: '3 MB' },
    { label: 'Last Name', value: data.last_name },
    { label: 'Swift Code', value: data.payment_details.swift_code },
    { label: 'Account Number', value: data.payment_details.account_no },
    { label: 'IFSC Code', value: data.payment_details.ifsc_code },
    { label: 'Bank Name', value: data.payment_details.bank_name },
    { label: 'Tax ID', value: data.payment_details.tax_id }
  ];

  return (
    <Container>
      <Box p={'24px 0px'} className="Admin-address--main-container">
        <Box textAlign={'start'}>
          <Typography mb={'16px'} variant="subtitle1">
            Payment Details
          </Typography>
          <Box className="admin-address--container">
            {paymentDetails.map((detail, index) => (
              <Box key={index} mb={'16px'} className={`admin-paymnet-box-${index}`}>
                <Typography variant="subtitle2">{detail.label}</Typography>
                {detail.isButton ? (
                  <Button className="id-button" variant="outlined" size="large">
                    <Box display={'flex'} alignItems={'center'} columnGap={'12px'}>
                      <PictureAsPdfOutlined />
                      <Box display={'flex'} flexDirection={'column'} textAlign={'start'}>
                        <Typography
                          textTransform={'none'}
                          variant="body2"
                          color={'rgba(0, 0, 0, 0.87)'}>
                          {detail.buttonText}
                        </Typography>
                        <Typography variant="caption" color={'rgba(0, 0, 0, 0.38)'}>
                          {detail.fileSize}
                        </Typography>
                      </Box>
                    </Box>
                  </Button>
                ) : (
                  <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
                    {detail.value}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminCoderPayment;
