import { Typography } from '@mui/material';
import React from 'react';

interface ClientDemographicsSectionProps {
  clientInfo: {
    country: string;
    province?: string;
    time?: string;
  };
}

const ClientDemographicsSection: React.FC<ClientDemographicsSectionProps> = ({
  clientInfo
}: any) => {
  return (
    <React.Fragment>
      {clientInfo && (
        <Typography component={'div'} mt={'14px'}>
          <Typography variant="subtitle1">{clientInfo?.country}</Typography>
          <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
            {clientInfo?.state ?? ' '}
            {clientInfo?.time ?? ' 4:30pm'}
          </Typography>
        </Typography>
      )}
    </React.Fragment>
  );
};

export default ClientDemographicsSection;
