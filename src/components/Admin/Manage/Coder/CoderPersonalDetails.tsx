import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Modal } from '../../../Common';
import '../index.css';

type CoderAdminProfileProps = {
  selectedRow: object;
};

const CoderAdminProfile = ({ selectedRow }: CoderAdminProfileProps) => {
  const [data, setData] = useState<any>();
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    setData(selectedRow);
  }, [selectedRow]);

  const handelPopup = () => {
    alert('feature coming soon');
  };

  return (
    <>
      <Box className="personal-admin-detail-basic-form">
        <Box className="personal-detail-admin--profile-section">
          <Box className="personal-detail--profile">
            <Avatar
              className="personal-detail--profile-avtar"
              // need to be replaced
              src="/images/png/submit_profile.png"
            />
            <Box className="coder-detail-name-section">
              <Box className="coder-personal--name-username">
                <Typography variant="h2" className="user-name">
                  {data?.first_name}
                </Typography>
                <Typography variant="h2" className="user-name">
                  {data?.last_name}
                </Typography>
                <Typography variant="body1" className="profile--username">
                  {data?.username}
                </Typography>
              </Box>
              <Box display={'flex'} columnGap={'4px'}>
                <Typography variant="subtitle1">Working as: </Typography>
                <Typography variant="body1">{data?.identity}</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Button
              onClick={handelPopup}
              className="coder-outline-btn"
              variant="outlined"
              size="large">
              Edit Profile
            </Button>
          </Box>
        </Box>
      </Box>

      {showPopUp && (
        <Modal
          open={showPopUp}
          onClose={() => {
            setShowPopUp(false);
          }}
          modalBodyWidth="auto">
          <Box>
            <Typography variant="subtitle1" color={'#14A800'}>
              {' '}
              This feature is coming soon
            </Typography>
          </Box>
        </Modal>
      )}

      <Box className="admin-coder-section">
        <Box display={'flex'} flexDirection={'column'} rowGap={'6px'}>
          <Typography variant="subtitle1">
            Company Email Address
            {data?.message && (
              <Typography component={'span'} variant="subtitle1" color={'#14A800'} ml={'4px'}>
                (Verified)*
              </Typography>
            )}
          </Typography>
          <Typography variant="body1" color={'rgba(0, 0, 0, 0.60)'}>
            {data?.email}
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} rowGap={'6px'}>
          <Typography variant="subtitle1">Phone Number (With Country Code)</Typography>
          <Typography variant="body1" color={'rgba(0, 0, 0, 0.60)'}>
            {data?.phone}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box p={'24px'} textAlign={'start'}>
        <Typography variant="subtitle1"> Company Details </Typography>
        <Box className="admin-basic-info-company-details">
          <Typography variant="subtitle2">{data?.company_name}</Typography>
          <Typography variant="body2" color={'rgba(0, 0, 0, 0.60)'}>
            {data?.company_website}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CoderAdminProfile;
