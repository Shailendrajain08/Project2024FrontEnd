import { Box, Typography } from '@mui/material';
import loginCardLogo from '../../../assets/images/login-card-logo.png';
import { CardCircleSvg } from '../../../assets/svg/CardCircle';
import { LoginCardDesignSvg } from '../../../assets/svg/LoginCardDesign';
import './index.css';

const LoginCard = () => {
  return (
    <Box className="login-card--box">
      <Box className="login-card-circle">
        <CardCircleSvg />
      </Box>
      <Box textAlign="start">
        <Typography component="h2" className="login-card-title">
          Marvin McKinney
        </Typography>
        <Box display="flex" alignItems="center" mt={1} columnGap={1}>
          <LoginCardDesignSvg />
          <Typography variant="subtitle2" className="login-card--design">
            Senior Java React Developer
          </Typography>
        </Box>
      </Box>

      <Box className="login-card--logo-box">
        <Typography variant="caption" className="login-card--previous-text">
          Previously at
        </Typography>
        <img src={loginCardLogo} alt="" />
      </Box>
    </Box>
  );
};
export default LoginCard;
