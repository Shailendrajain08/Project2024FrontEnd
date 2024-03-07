import React from 'react';
import { Box } from '@mui/material';
import { useNav } from '../../../../../../../context/NavContext';
import MenuDropdownCard from '../MenuDropdown';
import { ProfileIconSvg } from '../../../../../../../assets/svg';
import { profileDropdown } from '../../constant';
import './index.css';
import { IProfileBox, INavProviderValue } from '../../type';

const ProfileBox: React.FC<IProfileBox> = ({ userLoginData, role }) => {
  const { value, handleShowDropdown }: INavProviderValue = useNav();

  return (
    <Box onClick={() => handleShowDropdown({ profile: !value['profile'] })}>
      {userLoginData?.profile ? (
        <img src={userLoginData?.profile} alt="Profile pic" loading="lazy" />
      ) : (
        <ProfileIconSvg />
      )}

      <MenuDropdownCard
        listItems={profileDropdown[role]}
        showDropdown={value['profile']}
        className={`profile-dropdown ${role === 'CODER' ? 'right_0' : ''}`}
      />
    </Box>
  );
};

export default ProfileBox;
