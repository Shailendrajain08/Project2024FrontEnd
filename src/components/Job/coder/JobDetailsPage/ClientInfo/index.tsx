import { Box, Card, CardContent, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import ClientPaymentSection from './ClientPaymentSection';
import ClientRatingSection from './ClientRatingSection';
import ClientDemographicsSection from './ClientDemographicsSection';
import ClientInsights from './ClientInsights';
import './index.css';
import { usePersonalDetailHook } from '../../../../Profile/Client/PersonalDetails/PersonalDetailsHook';

interface ClientInfoProps {
  clientInfo: {
    isPaymentVerified: boolean;
  };
}

const ClientInfo: React.FC<ClientInfoProps> = ({ clientInfo }: any) => {
  const { clientProfileData } = usePersonalDetailHook();
  return (
    <React.Fragment>
      <Paper variant="outlined" className="client-info">
        <Typography
          variant="h3"
          fontSize={'20px'}
          textAlign={'start'}
          ml={'24px'}
          mt={'14px'}
          mb={'9px'}
          fontWeight={500}>
          About the client
        </Typography>
        <Divider />
        <Box
          display={'flex'}
          flexDirection={'column'}
          textAlign={'start'}
          pt={'20px'}
          pb={'24px'}
          pl={'24px'}>
          {clientProfileData.is_payment_method_verified ? (
            <ClientPaymentSection />
          ) : (
            <Typography className="verified-desc">Payment method Not verified</Typography>
          )}
          <ClientRatingSection clientInfo={clientProfileData} />
          <ClientDemographicsSection clientInfo={clientProfileData} />
          <ClientInsights clientInfo={clientProfileData} />
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default ClientInfo;
