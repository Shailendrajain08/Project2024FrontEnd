import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PersonalDetails from './PersonalDetails';
import PaymentDetail from './PaymentDetail';
import Security from './Security';
import { EditI } from './type';
import { personalDetail, clientMenu } from './constant';
import CompanyDetail from './PersonalDetails/CompanyDetail';
import AddressDetail from './PersonalDetails/Address';
import DigitalPresence from './PersonalDetails/DigitalPresence';
import BasicInfo from './PersonalDetails/BasicInfo';
import ProfileSideMenu from '../common/ProfileSideMenu';
import { useDispatch } from 'react-redux';
import { getClientProfileData } from '../../../store/actions/clientProfile';
import { usePersonalDetailHook } from './PersonalDetails/PersonalDetailsHook';
import { fetchCoderAddress } from '../../../store/actions/profile/coder.actionCreators';
import './index.css';

const ClientProfile = () => {
  const { companyDetail } = personalDetail;
  const [selectedMenu, setSelectedMenu] = React.useState(1);
  const [edit, setEdit] = React.useState<EditI>({});

  const dispatch = useDispatch();
  const { clientProfileData } = usePersonalDetailHook();

  useEffect(() => {
    dispatch(getClientProfileData());
    dispatch(fetchCoderAddress());
  }, []);

  const handleEdit = () => {
    setEdit((prevEdit) => ({ isEdit: !prevEdit.isEdit }));
  };

  return (
    <Box className="client-profile--container">
      <Box className="client-profile-menu--container">
        <Box className="client-profile-sidemenu--content">
          <ProfileSideMenu
            menu={clientMenu}
            getSelectedMenu={(id: number) => setSelectedMenu(id)}
          />
        </Box>
      </Box>
      <Box className="profile--container">
        <Box className="menu-wrapper">
          {selectedMenu !== 5 && selectedMenu !== 6 && selectedMenu !== 1 && (
            <PersonalDetails
              edit={edit}
              handleEdit={handleEdit}
              personalDetail={{
                basicInfo: clientProfileData?.basicInfo
              }}
            />
          )}
          {selectedMenu == 1 && (
            <>
              {Object.keys(clientProfileData).length > 0 && (
                <BasicInfo {...clientProfileData?.basicInfo} edit={edit} handleEdit={handleEdit} />
              )}
            </>
          )}
          {selectedMenu == 2 && (
            <>
              <CompanyDetail
                {...clientProfileData?.companyDetail}
                edit={edit}
                handleEdit={handleEdit}
              />
            </>
          )}
          {selectedMenu == 3 && (
            <>
              <AddressDetail
                address={clientProfileData?.address}
                edit={edit}
                handleEdit={handleEdit}
              />
            </>
          )}
          {selectedMenu == 4 && (
            <>
              <DigitalPresence
                {...clientProfileData?.digitalPresence}
                edit={edit}
                handleEdit={handleEdit}
              />
            </>
          )}
          {selectedMenu == 5 && (
            <>
              <PaymentDetail edit={edit} handleEdit={handleEdit} />
            </>
          )}
          {selectedMenu == 6 && (
            <>
              <Security />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientProfile;
