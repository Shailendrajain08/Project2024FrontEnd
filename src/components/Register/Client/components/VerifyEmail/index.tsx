import { useDispatch } from 'react-redux';
import { Grid, Button, Box, Typography, Backdrop, CircularProgress } from '@mui/material';
import {
  resendVerifyEmail,
  resetVerifyEmailStatus,
  resetdigitalPresenceStatus
} from '../../../../../store/actions/register';
import { FromPropsI } from '../../../type';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import './index.css';
import { useSelector } from 'react-redux';
import SnackBarComponent from '../../../../Common/SnackBar';
import configVerifyEmail from './verifyEmailConfig';
import useSnackBarMessage from '../../../../../helper/customHooks/useFetchMessage';

const VerifyEmail = ({ setFormType }: FromPropsI) => {
  const resndEmailData = useSelector((state: any) => state?.resendVerifyEmailReducer);
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state?.register?.data?.data);
  const [seconds, setSeconds] = useState(0);
  const email = userData?.user?.email;
  const [showMessages, setShowMessages]: any = useSnackBarMessage(
    resndEmailData?.resendEmailStatus,
    resndEmailData?.resendEmailData?.detail,
    resndEmailData?.error
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);
  const handleVerfication = () => {
    setShowMessages({ showSnackBar: false });
    setSeconds(configVerifyEmail.seconds);
    const payload = { email };
    dispatch(resendVerifyEmail(payload));
  };
  const handleBackdropClose = () => {
    dispatch(resetVerifyEmailStatus());
  };
  return (
    <Box className="verify-container">
      <Grid container rowGap={'40px'}>
        <Grid item xs={12}>
          <Typography variant="h1" padding={'0px 10px'}>
            Verification link has been Sent to your registered Email address
          </Typography>
        </Grid>
        <Box component="div" className="verify-container">
          <Typography variant="subtitle1">Please Check Your Email</Typography>
          <Box className="verify-url--link">
            {seconds > 0 ? (
              <Box className="verify-email-timer">
                Please wait {seconds} seconds before resending the verification link.
              </Box>
            ) : (
              <>
                <Box className="message--icon">
                  <MessageOutlinedIcon />
                </Box>
                <Link to={''} className="reset-email--url" onClick={handleVerfication}>
                  Resend Verification Email
                </Link>
              </>
            )}
          </Box>
        </Box>

        <Box component="div" className="verify-btn-container">
          <Button
            type="reset"
            className="client-outlined-btn"
            onClick={() => {
              dispatch(resetdigitalPresenceStatus());
              setFormType('digitalPresence');
            }}
            variant="outlined"
            size="large">
            Back
          </Button>
        </Box>
      </Grid>
      <Box>
        <Backdrop
          className="transparentBackdrop"
          open={resndEmailData?.loading}
          onClick={handleBackdropClose}>
          <CircularProgress color="secondary" />
        </Backdrop>
      </Box>
      <Box>
        {showMessages?.showSnackBar && (
          <SnackBarComponent
            isOpen={showMessages?.showSnackBar}
            isClose={(prev: any) => ({
              ...prev,
              showSnackBar: false
            })}
            message={showMessages?.snackBarMessage}
            messageType={showMessages?.messageType}
          />
        )}
      </Box>
    </Box>
  );
};

export default VerifyEmail;
