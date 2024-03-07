import {
  CheckCircleOutlined,
  KeyboardDoubleArrowRightOutlined,
  ErrorOutline,
  CheckOutlined
} from '@mui/icons-material';

import { Card, CardContent, CardMedia, Button, Typography, Link, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IMediaCard {
  heading: string;
  messageLine1: string;
  messageLine2?: string;
  path?: string;
  linkText?: string;
  isError?: boolean;
}

const MessageCard = ({
  heading,
  messageLine1,
  messageLine2,
  path,
  linkText,
  isError = false
}: IMediaCard) => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate('/coder/dashboard');
  };

  return (
    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} p={'8px'}>
      <Box display={'flex'} justifyContent={'center'}>
        {!isError ? (
          <Box className="submit-proposal-confirm">
            <CheckOutlined className="confirm" />
          </Box>
        ) : (
          <ErrorOutline color="error" />
        )}
      </Box>
      <Box display={'flex'} justifyContent={'center'} textAlign={'center'} mt={'24px'} mb={'24px'}>
        <Typography variant="h2" fontSize={'24px'} fontWeight={400}>
          You have successfully submitted you proposal
        </Typography>
      </Box>
      <Button
        onClick={handelClick}
        variant="contained"
        fullWidth
        className="button-view-submit-proposal">
        {' '}
        OK{' '}
      </Button>
    </Box>
  );
};

export default MessageCard;
