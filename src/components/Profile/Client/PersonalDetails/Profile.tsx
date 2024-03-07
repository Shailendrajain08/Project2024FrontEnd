import { Avatar, Box, Button, Typography } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { IBasicInfo } from '../type';
import { useState } from 'react';
import { Modal } from '../../../Common';

const Profile = ({ firstName, lastName, username, edit, handleEdit }: IBasicInfo) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const onhandlePopUp = () => setShowPopUp(!showPopUp);
  return (
    <>
      <Box className="personal-detail-basic-form">
        <Box className="personal-detail--profile-section">
          <Box className="personal-detail--profile">
            <Avatar
              className="personal-detail--profile-avtar"
              // need to be replaced when API integration
              src="/images/png/submit_profile.png"
            />
            <Box className="profile-pic-edit">
              <CameraAltOutlinedIcon />
            </Box>
            <Box className="personal-detail-name-section">
              <Typography variant="h2" className="user-name">
                {firstName}
                {lastName}
              </Typography>
              {/* <Typography variant="body1" className="profile--username">
                {username}
              </Typography> */}
            </Box>
          </Box>
          <Box>
            <Button
              onClick={onhandlePopUp}
              variant="outlined"
              size="large"
              className="profile-edit-btn">
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
    </>
  );
};

export default Profile;
