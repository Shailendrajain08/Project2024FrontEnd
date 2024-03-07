import WalletBalance from './WalletBalance';
import BillingDetail from './BillingDetail';
import { paymentDetail } from '../constant';
import { Box } from '@mui/material';
import './index.css';
import { EditI } from '../type';

interface paymentProps {
  edit: EditI;
  handleEdit: () => void;
}

const PaymentDetail = ({ edit, handleEdit }: paymentProps) => {
  const { walletBalance, billingDetail } = paymentDetail;
  return (
    <Box className="profile-management--payment">
      <WalletBalance {...walletBalance} />
      <BillingDetail edit={edit} handleEdit={handleEdit} {...billingDetail} />
    </Box>
  );
};

export default PaymentDetail;
