import React from 'react';
import { Box } from '@mui/material';
// import PersonalDetails from './PersonalDetails';
// import PaymentDetail from './PaymentDetail';
// import Security from './Security';
import { EditI } from './type';
// import { personalDetail } from './constant';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import ProfileSideMenu from '../common/ProfileSideMenu';
import PersonalDetails from './PersonalDetails';
import './index.css';
import EducationScreen from './PersonalDetails/EducationScreen';
import { personalDetail } from './constant';
import CoderSkills from './PersonalDetails/Skill';
import SocialDigitalPresence from './PersonalDetails/SocialDigitalPresence';
import CoderBasicInfo from './PersonalDetails/BasicInfo';
import AddressDetail from './PersonalDetails/Address';
import PaymentDetail from './PersonalDetails/CoderPayment';

const CoderProfile = () => {
  const {
    coder_basicInfo,
    educationDetails,
    address,
    digitalPresence,
    coderskills,
    coder_address
  } = personalDetail;
  const [selectedMenu, setSelectedMenu] = React.useState(1);

  const [edit, setEdit] = React.useState<EditI>({});

  const handleEdit = () => {
    setEdit((prevEdit) => ({ isEdit: !prevEdit.isEdit }));
  };

  const CoderMenu = [
    {
      id: 1,
      icon: PersonOutlineOutlinedIcon,
      label: 'Personal Details',
      children: [
        {
          id: 1,
          icon: null,
          label: 'Basic Details',
          isDisable: false
        },
        {
          id: 2,
          icon: null,
          label: 'Skills',
          isDisable: false
        },
        {
          id: 3,
          icon: null,
          label: 'Education Details',
          isDisable: false
        },
        {
          id: 4,
          icon: null,
          label: 'Address',
          isDisable: false
        },
        {
          id: 5,
          icon: null,
          label: 'Social digital presence',
          isDisable: false
        }
        // {
        //   id: 6,
        //   icon: null,
        //   label: 'Employment',
        //   isDisable: true
        // }
      ]
    },
    { id: 7, icon: AttachMoneyOutlinedIcon, label: 'Payment Information' },
    { id: 8, icon: SecurityOutlinedIcon, label: '' }
  ];

  return (
    <Box className="client-profile--container">
      <Box className="client-profile-menu--container">
        <Box className="client-profile-sidemenu--content">
          <ProfileSideMenu menu={CoderMenu} getSelectedMenu={(id: number) => setSelectedMenu(id)} />
        </Box>
      </Box>
      <Box className="profile--container">
        <Box className="menu-wrapper">
          {/* pass a flag to handle based on if agency inside personaldetails */}
          {selectedMenu !== 7 && selectedMenu !== 8 && (
            <PersonalDetails
              edit={edit}
              isRole="Coder"
              selectedMenu={selectedMenu}
              setEdit={setEdit}
            />
          )}
          {selectedMenu == 3 && (
            <>
              <EducationScreen {...educationDetails} edit={edit} handleEdit={handleEdit} />
            </>
          )}
          {selectedMenu == 2 && (
            <>
              <CoderSkills {...coderskills} edit={edit} handleEdit={handleEdit} />
            </>
          )}
          {selectedMenu == 5 && (
            <>
              <SocialDigitalPresence {...digitalPresence} edit={edit} handleEdit={handleEdit} />
            </>
          )}
          {selectedMenu == 1 && (
            <>
              <CoderBasicInfo
                {...coder_basicInfo}
                edit={edit}
                handleEdit={handleEdit}
                setEdit={setEdit}
              />
            </>
          )}
          {selectedMenu == 4 && (
            <>
              <AddressDetail {...coder_address} edit={edit} handleEdit={handleEdit} />
            </>
          )}
          {selectedMenu == 7 && (
            <>
              <PaymentDetail />
            </>
          )}
          {/* {selectedMenu == 1 && (
            
          )}
          {/* 
          {selectedMenu == 2 && (
            <>
              <CompanyDetail
                {...companyDetail}
                edit={edit}
                handleEdit={handleEdit}
              />
            </>
          )}
         
          {selectedMenu == 4 && (
            <>
              <DigitalPresence
                {...digitalPresence}
                edit={edit}
                handleEdit={handleEdit}
              />
            </>
          )}
          {selectedMenu == 7 && (
            <>
              <PaymentDetail edit={edit} handleEdit={handleEdit} />
            </>
          )}
          {selectedMenu == 6 && (
            <>
              <Security />
            </>
          )} */}
        </Box>
      </Box>
    </Box>
  );
};

export default CoderProfile;
