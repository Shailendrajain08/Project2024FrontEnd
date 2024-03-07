import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Avatar, Badge, Button } from '@mui/material';
import { paymentsMockData } from './types';
import './index.css';
import { IPayment } from './paymentData.d';

const PaymentsPage = () => {
  const navigate = useNavigate();

  const handleCodersDetailsClick = (item: IPayment) => {
    navigate(`/payment/${item.id}`, {
      state: { ...item }
    });
  };

  return (
    <>
      {paymentsMockData.map((item: any, index: number) => {
        return (
          <Box key={item.id} className="fixed-price-main-data">
            <Box className="fixed-price-coder-data">
              <Box>
                <Badge
                  color="primary"
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  variant="dot">
                  <Avatar
                    onClick={() => handleCodersDetailsClick(item)}
                    className="fixed-price-coder-image"
                    alt=""
                    src="/images/png/_Avatar_1.png"
                  />
                </Badge>
              </Box>

              <Box className="fixed-price-coder-name-desig">
                <Box
                  display={'flex'}
                  columnGap={'4px'}
                  alignItems={'baseline'}
                  marginBottom={'4px'}>
                  <Typography variant="subtitle2">
                    {item.first_name} {item.last_name}
                  </Typography>
                  <Typography color={'rgba(0, 0, 0, 0.60)'} variant="caption">
                    ({item.identity})
                  </Typography>
                </Box>

                <Typography variant="body2">{item.bio}</Typography>
              </Box>
            </Box>
            <Box>
              <Typography color={'rgba(0, 0, 0, 0.38)'} variant="body2">
                {item.created ? (
                  <>
                    {item.created.split('T')[0]} &nbsp;&nbsp;
                    {item.created.split('T')[1].split('.')[0]}
                  </>
                ) : (
                  'Not available'
                )}
              </Typography>
            </Box>
            <Box display={'flex'}>
              <Typography variant="body2" marginRight={'4px'}>
                $ {item.amount.toFixed(2)}
              </Typography>
            </Box>

            <Box>
              <Button className="payment-page--button--wrapper" variant="outlined">
                {item.status}
              </Button>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default PaymentsPage;
