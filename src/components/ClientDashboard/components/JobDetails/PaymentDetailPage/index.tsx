import React from 'react';
import './index.css';
import { Box, Typography, Avatar, Badge, TextField, Button } from '@mui/material';
import { paySumData } from '../FixedPricePage/types';
import { SearchSvg } from '../../../../../assets/svg';
import { PaymentTableData } from './PaymentTable';
import { FilterListOutlined } from '../../../../../assets/svg/FilterListOutlined';
import { InfoOutlined } from '../../../../../assets/svg/InfoOutlined';
import TabRenderer from '../TabRenderer';
import { PaymentHeader } from '../JobDetailHeaders';
import { paymentsMockData } from '../PaymentsPage/types';
const PaymentDetailsPage = () => {
  const { id, first_name, last_name, identity, amount, status } = paymentsMockData[0];
  return (
    <Box className="job--details--main--container">
      <PaymentHeader />
      <Box className="job-detail-tab-box">
        <TabRenderer active={false} activeTab={1} />
      </Box>
      <Box className="fixed-price-main-data">
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
              <Avatar className="fixed-price-coder-image" alt="" src="/images/png/_Avatar_1.png" />
            </Badge>
          </Box>

          <Box className="fixed-price-coder-name-desig">
            <Typography variant="subtitle1">
              {first_name} {last_name}
            </Typography>

            <Typography className="fixed-price-light-color" variant="body2">
              ({identity})
            </Typography>
          </Box>
        </Box>
        <Box display={'flex'}>
          <Typography variant="subtitle2" marginRight={'4px'}>
            $ {amount} USD
          </Typography>
          <Typography variant="subtitle2" color={'rgba(0, 0, 0, 0.38)'}>
            in last 1 week
          </Typography>
        </Box>
      </Box>

      <Box className="fixed-price-pay-sum-mile-pay">
        <Box display={'flex'} justifyContent={'space-between'}>
          <Box display={'flex'} columnGap={'6px'}>
            <Box>
              {' '}
              <Typography marginBottom={'16px'} variant="h3">
                Payment Summary
              </Typography>
            </Box>
            <Box marginTop={'8px'}>
              {' '}
              <InfoOutlined />
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle2" color={'#D32F2F'}>
              End Project
            </Typography>
          </Box>
        </Box>

        {paySumData.map((it: any, index: number) => (
          <Box display={'flex'} justifyContent={'space-between'} key={index}>
            <Box className="fixed-price-pay-sum">
              <Box>
                <Typography variant="subtitle2">Requested</Typography>
                <Typography variant="body2" className="fixed-price-light-color">
                  $ {it.req_amt}
                </Typography>
              </Box>
              <Box>
                {' '}
                <Typography variant="subtitle2">In Progress</Typography>
                <Typography variant="body2" className="fixed-price-light-color">
                  $ {it.in_progress_amt}
                </Typography>
              </Box>
              <Box>
                {' '}
                <Typography variant="subtitle2">Released to freelancer</Typography>
                <Typography variant="body2" className="fixed-price-light-color">
                  $ {it.released_amt}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button className="payment-details--download-button" variant="contained">
                DOWNLOAD INVOICE
              </Button>
            </Box>
          </Box>
        ))}

        <Box className="fixed-price-mile-pay">
          <Box display={'flex'} columnGap={'6px'}>
            <Typography variant="subtitle1">Timesheet Details</Typography>
          </Box>

          <Box className="fixed-price-filter-search">
            <Box className="fixed-price-filter-box">
              <FilterListOutlined />
              <Typography variant="caption">Filter</Typography>
            </Box>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <Box marginRight={'6px'} marginTop={'5px'}>
                    {' '}
                    <SearchSvg />
                  </Box>
                )
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <PaymentTableData />
      </Box>
    </Box>
  );
};

export default PaymentDetailsPage;
