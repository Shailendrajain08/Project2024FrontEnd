import { Box, Button, TextField, Typography, Divider, IconButton } from '@mui/material';
import './index.css';
import { AppleLogo } from '../../../../assets/svg/AppleLogo';

const PayNow = () => {
  return (
    <Box className="pay-now--main-wrapper">
      <Box className="pay-now--payment-heading">
        <Box>
          <Typography variant="h2" className="pay-now--payment-heading1">
            Payment
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" className="pay-now--payment-heading2">
            Total amount : $600
          </Typography>
        </Box>
      </Box>
      <Button variant="contained" size="large" className="pay-now--pay-button">
        <IconButton color="inherit">
          <AppleLogo />
        </IconButton>
      </Button>
      <Box className="pay-now--or">
        <Divider>
          {' '}
          <Typography variant="caption">OR</Typography>
        </Divider>
      </Box>
      <Box className="sd">
        <TextField
          className="pay-now-text-field"
          size="medium"
          variant="outlined"
          label="Name on card"
          placeholder="John doe"
          fullWidth
        />

        <TextField
          className="pay-now-text-field"
          size="medium"
          variant="outlined"
          label="Card information"
          placeholder="XXXX XXXX XXXX 1238"
          inputProps={{
            maxLength: 16
          }}
          fullWidth
        />
      </Box>
      <Box className="pay-now--secret-card-details">
        <TextField
          size="medium"
          type="password"
          variant="outlined"
          label="MM/YY"
          placeholder="*****"
          inputProps={{
            maxLength: 5
          }}></TextField>
        <TextField
          size="medium"
          type="password"
          variant="outlined"
          label="CVC"
          placeholder="***"
          inputProps={{
            maxLength: 3,
            inputMode: 'numeric'
          }}></TextField>
      </Box>
      <Box className="pay-now--pay-now-button-box">
        <Button
          variant="contained"
          className="pay-now--pay-now-button"
          color="success"
          size="large">
          PAY NOW
        </Button>
      </Box>
    </Box>
  );
};

export default PayNow;
