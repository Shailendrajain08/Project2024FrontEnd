import { useState } from 'react';
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useForm } from 'react-hook-form';

import { EditI } from '../type';

import AddressDetails from './Address';
import Document from './Document';
import { VisaCardSvg } from './Svgs/VisaCardSvg';
import { MasterCardSvg } from './Svgs/MasterCardSvg';
import { AmericanExpressSvg } from './Svgs/AmericanExpressSvg';
import './index.css';

interface BillingProps {
  edit: EditI;
  handleEdit: () => void;
}

const BillingDetail = ({ edit, handleEdit }: BillingProps) => {
  const {
    register,
    getValues,
    setValue,
    formState: { errors }
  } = useForm();
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardNumber, setCardNumber] = useState<string>('4321123456785678');
  const [cvvNumber, setCVVNumber] = useState<string>('4321');

  const onhandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
    setCVVNumber(e.target.value);
  };

  // masking function for card default value
  // Note use this function when api integration implement
  const maskCardNumber = (input: string): string => {
    const visibleDigits = Math.min(4, input.length);
    const maskedPart = '*'.repeat(Math.max(0, input.length - visibleDigits));
    return input.slice(0, visibleDigits) + maskedPart;
  };

  const maskCVV = (cvv: string): string => {
    // Assuming CVV length is 3 or 4
    const visibleDigits = Math.min(0, cvv.length);
    const maskedPart = '*'.repeat(Math.max(0, cvv.length - visibleDigits));
    return cvv.slice(0, visibleDigits) + maskedPart;
  };

  return (
    <Box className="billing-detail--container">
      <Box className="billing-details--header">
        <Typography variant="h5" className="billing-details--heading">
          Add a billing method
        </Typography>
      </Box>
      <Box className="billing-detail--form-field-wrapper">
        <Box className="billing--card-details-section">
          <Box className="payment-detail--card-select">
            <Box className="payment-detail-cards">
              <VisaCardSvg />
            </Box>
            <Box className="payment-detail-cards">
              <MasterCardSvg />
            </Box>
            <Box className="payment-detail-cards">
              <AmericanExpressSvg />
            </Box>
          </Box>
          <Box className="payment-detail--card-field">
            <form className="payment-detail--card-field-wrapper">
              {edit.isEdit ? (
                <Box className="Payment-edit--field">
                  <TextField
                    id="cardNumber"
                    {...register('cardnumber')}
                    label="Card Number"
                    fullWidth
                    inputProps={{
                      maxLength: 16
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreditCardIcon />
                        </InputAdornment>
                      )
                    }}
                    onChange={onhandleChange}
                  />
                  <TextField
                    id="cardHolderName"
                    label=" Card Holder Name"
                    {...register('cardholdername')}
                  />
                  <Box className="payment-section--date-cvv-wrapper">
                    <Box className="payement-section--date">
                      <TextField
                        id="expireDate"
                        label="Expiration date"
                        placeholder="MM / YY"
                        {...register('expiredate')}
                      />
                    </Box>
                    <Box className="payement-section--date">
                      <TextField id="cvv" label="CVC / CVC2" {...register('cvv')} />
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Box className="Payment-edit--field">
                  <TextField
                    id="cardNumber"
                    {...register('cardnumber')}
                    label="Card Number"
                    defaultValue={maskCardNumber(cardNumber)}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreditCardIcon />
                        </InputAdornment>
                      )
                    }}
                    disabled
                  />
                  <TextField
                    id="cardHolderName"
                    {...register('cardholdername')}
                    defaultValue="John Doe"
                    disabled
                  />
                  <Box className="payment-section--date-cvv-wrapper">
                    <Box className="payement-section--date">
                      <TextField
                        id="expireDate"
                        defaultValue="MM / YY"
                        {...register('expiredate')}
                        disabled
                      />
                    </Box>
                    <Box className="payement-section--date">
                      <TextField
                        id="cvv"
                        defaultValue={maskCVV(cvvNumber)}
                        {...register('cvv')}
                        disabled
                      />
                    </Box>
                  </Box>
                </Box>
              )}
            </form>
          </Box>
        </Box>
        <Box>
          <AddressDetails edit={edit} handleEdit={handleEdit} />
        </Box>
        <Box>
          <Document
            name="uniquefile"
            title="Documents"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
            edit={edit}
            handleEdit={handleEdit}
          />
        </Box>
        <Box className="payment-detail--button">
          <Box className="profile-management-detail--button">
            <Button variant="outlined" size="large" className="profile-payment--outline-btn">
              Cancel
            </Button>
            {edit.isEdit ? (
              <Button variant="contained" className="update-btn" size="large" onClick={handleEdit}>
                Save Changes
              </Button>
            ) : (
              <Button variant="contained" className="update-btn" size="large" onClick={handleEdit}>
                Edit Profile
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BillingDetail;
