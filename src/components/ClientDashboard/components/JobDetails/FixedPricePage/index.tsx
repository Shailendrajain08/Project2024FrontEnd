import React from 'react';
import './index.css';
import { paySumData } from './types';
import { Box, Typography, Avatar, Badge, TextField, Chip } from '@mui/material';
import { SearchSvg } from '../../../../../assets/svg';
import { TableData } from './TableData';
import { FilterListOutlined } from '../../../../../assets/svg/FilterListOutlined';
import { SaveIcon } from '../../../../../assets/svg/SaveIcon';
import { ShareIcon } from '../../../../../assets/svg/ShareIcon';
import { InfoOutlined } from '../../../../../assets/svg/InfoOutlined';

interface FixedPriceProps {
  status: string;
}

const PaymentDataKeys = Object.keys(paySumData[0]).map((key, index) => ({
  label: index === 0 ? 'Requested' : index === 1 ? 'In Progress' : 'Released to freelancer',
  key: paySumData[0][key as keyof (typeof paySumData)[0]]
}));

const FixedPrice: React.FC<FixedPriceProps> = ({ status }) => {
  const generateUniqueID = () => Math.random().toString(36).substring(2, 11);
  return (
    <>
      {status && status.toUpperCase() === 'OPEN' ? (
        <Box p={3}>
          <Typography variant="subtitle1">No Payment Found</Typography>
        </Box>
      ) : (
        <>
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
                  <Avatar
                    className="fixed-price-coder-image"
                    alt=""
                    src="/images/png/_Avatar_1.png"
                  />
                </Badge>
              </Box>

              <Box className="fixed-price-coder-name-desig">
                <Typography variant="subtitle1">Floyd Miles</Typography>

                <Typography className="fixed-price-light-color" variant="body2">
                  (Drupal Developer)
                </Typography>
              </Box>
            </Box>

            <Box className="fixed-price-save-share">
              <Avatar className="fixed-price-avatar-box">
                <SaveIcon />
              </Avatar>
              <Avatar className="fixed-price-avatar-box">
                <ShareIcon />
              </Avatar>
            </Box>
          </Box>

          <Box className="fixed-price-pay-sum-mile-pay">
            <Box display={'flex'} columnGap={'6px'}>
              <Box>
                {' '}
                <Typography fontSize={20} variant="h3" marginBottom={'16px'}>
                  Payment Summary
                </Typography>
              </Box>
              <Box marginTop={'8px'}>
                {' '}
                <InfoOutlined />
              </Box>
            </Box>
            <Box className="fixed-price-pay-sum">
              {PaymentDataKeys.map((pd) => (
                <Box key={generateUniqueID()}>
                  {' '}
                  <Typography variant="subtitle2">{pd.label}</Typography>
                  <Typography variant="body2" className="fixed-price-light-color">
                    $ {pd.key}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box className="fixed-price-mile-pay">
              <Box display={'flex'} columnGap={'6px'}>
                <Typography fontSize={20} variant="h3">
                  Milestone Payments
                </Typography>
                <Box marginTop={'6px'}>
                  <InfoOutlined />
                </Box>
              </Box>

              <Box className="fixed-price-filter-search">
                <Box className="fixed-price-filter-box">
                  <FilterListOutlined />
                  <Typography variant="caption">Filter</Typography>
                </Box>
                <Box className="fixed-price-search-box">
                  <TextField
                    size="small"
                    fullWidth
                    variant="outlined"
                    placeholder="Search"
                    InputProps={{
                      startAdornment: (
                        <Box marginRight={'6px'} marginTop={'5px'}>
                          <SearchSvg />
                        </Box>
                      )
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <TableData />
          </Box>
        </>
      )}
    </>
  );
};

export default FixedPrice;
