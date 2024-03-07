import { Box, Typography, Link } from '@mui/material';
import './index.css';
import { LogoSuccessSvg } from '../../../assets/svg';
interface ICongratulationCard {
  message: string;
}

const CongratulationCard = ({ message }: ICongratulationCard) => {
  return (
    <Box className="congratulation-card--main-wrapper">
      <Box className="congratulation-card--content-box">
        <Typography variant="h1" className="congratulation-card--title">
          Congratulations!
        </Typography>
        <Typography variant="body1" className="congratulation-card--body1">
          {message}
        </Typography>
        <Typography variant="subtitle1" className="congratulation-card--link-text">
          Please
          <Link href="/login" variant="subtitle1" className="congratulation-card--link">
            {' '}
            Log in{' '}
          </Link>{' '}
          now
        </Typography>
      </Box>
      <Box className="congratulation-card--logobox-wrapper">
        <Box className="congratulation-card--logobox">
          <Box className="congratulation-card--svg">
            <LogoSuccessSvg />
          </Box>
          <Box>
            <Typography variant="h6" className="congratulation-card--logo-text">
              Video chat & Remote Coder OnDemand
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CongratulationCard;
