import { Box, Button, Typography } from '@mui/material';
import { IWalletBalance } from '../type';

const WalletBalance = ({ wallet_balance = '0.00' }: IWalletBalance) => {
  return (
    <Box className="wallet-balance--section">
      <Box className="wallet-balance--header">
        <Box className="wallet-balance--heading">
          <Typography variant="h4" className="wallet-heading">
            Balance
          </Typography>
        </Box>
        <Box className="wallet-balance--sub-heading">
          <Typography variant="body1">{`Your balance is $${wallet_balance}`}</Typography>
        </Box>
      </Box>
      <Box className="wallet-balance--pay-btn">
        <Button variant="outlined" size="medium">
          Pay Now
        </Button>
      </Box>
    </Box>
  );
};

export default WalletBalance;
