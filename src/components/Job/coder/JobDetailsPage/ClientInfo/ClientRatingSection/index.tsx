import { Box, Rating, Typography } from '@mui/material';
import React from 'react';

interface ClientRatingSectionProps {
  clientInfo: {
    rating: number;
    reviews: number;
  };
}

const ClientRatingSection: React.FC<ClientRatingSectionProps> = ({ clientInfo }: any) => {
  console.log('clientInfo', clientInfo);
  return (
    <React.Fragment>
      {clientInfo && (
        <Box display={'flex'} columnGap={'10px'} alignItems={'center'}>
          <Rating name="read-only" className="client-rating" value={clientInfo?.rating} readOnly />
          <Typography variant="body2" className="rating-desc">
            {clientInfo?.rating ?? 1} of {clientInfo?.reviews ?? 10}
            reviews
          </Typography>
        </Box>
      )}
    </React.Fragment>
  );
};

export default ClientRatingSection;
