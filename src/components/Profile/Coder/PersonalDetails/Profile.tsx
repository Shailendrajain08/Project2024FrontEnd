import { Avatar, Box, Button, Typography } from '@mui/material';
import { EditI, IBasicInfo } from '../type';
import { useState } from 'react';
import { Modal } from '../../../Common';
import '../index.css';
import { personalDetail } from '../constant';
import { CoderProfile } from '../../../../types/shared.types';
interface ProfileEditProps extends CoderProfile {
  selectedMenu?: number;
  setEdit: (edit: EditI) => void;
}

const Profile = ({
  first_name,
  last_name,
  email,
  selectedMenu,
  phone,
  setEdit
}: ProfileEditProps) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const { coder_basicInfo } = personalDetail;

  const onhandlePopUp = () => setShowPopUp(!showPopUp);
  return (
    <>
      <Box className="personal-detail-basic-form">
        <Box className="personal-detail--profile-section">
          <Box className="personal-detail--profile">
            <Avatar
              className="personal-detail--profile-avtar"
              // need to be replaced
              src="/images/png/submit_profile.png"
            />
            <Box className="coder-detail-name-section">
              <Box className="coder-personal--name-username">
                <Typography variant="h2" className="user-name">
                  {first_name}
                  {last_name}
                </Typography>

                {/* Will be used later----------------- */}
                {/* <Typography variant="body1" className="profile--username">
                  {email}
                </Typography> */}
              </Box>
              <Typography component={'div'} fontWeight={400}>
                Working as:{' '}
                <Typography component={'span'} variant="body1" fontWeight={500}>
                  Individual
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box>
            {/* if you want to edit all the field remove selectmenu condition */}
            {selectedMenu == 1 ? (
              <Button
                onClick={onhandlePopUp}
                className="coder-outline-btn"
                variant="outlined"
                size="large">
                Edit Profile
              </Button>
            ) : (
              <Button
                onClick={onhandlePopUp}
                className="coder-outline-btn"
                variant="outlined"
                size="large">
                Edit Profile
              </Button>
            )}
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
      {selectedMenu == 1 ? (
        <Box display={'flex'} justifyContent={'space-between'} mt={'24px'} textAlign={'start'}>
          <Box display={'flex'} flexDirection={'column'} rowGap={'6px'}>
            <Typography variant="subtitle1">
              Company Email Address
              {coder_basicInfo.isEmailVerifed && (
                <Typography component={'span'} variant="subtitle1" color={'#14A800'} ml={'4px'}>
                  (Verified)*
                </Typography>
              )}
            </Typography>
            <Typography variant="body1" color={'rgba(0, 0, 0, 0.60)'}>
              {email}
            </Typography>
          </Box>
          <Box display={'flex'} flexDirection={'column'} rowGap={'6px'}>
            <Typography variant="subtitle1">Phone Number (With Country Code)</Typography>
            <Typography variant="body1" color={'rgba(0, 0, 0, 0.60)'}>
              {phone}
            </Typography>
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default Profile;
