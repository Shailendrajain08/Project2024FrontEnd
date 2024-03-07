import React, { Fragment } from 'react';
import { Box, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowDownSvg } from '../../../../../../../assets/svg';
import './index.css';
import MenuDropdownCard from '../MenuDropdown';
import { codersDropdown, reportDropdown } from '../../constant';
import { useNav } from '../../../../../../../context/NavContext';
import { INavProviderValue } from '../../type';

const MenuList: React.FC<any> = ({ role }) => {
  const { value, handleShowDropdown, handleClose }: INavProviderValue = useNav();
  return (
    <Box className="menu-list-box">
      <List className="menu-list--ul-box">
        <Fragment>
          <ListItem onClick={handleClose}>
            <Link to={'/jobs'}>Jobs</Link>
          </ListItem>
          {role === 'CLIENT' && (
            <ListItem
              className="coders-dropdown-list"
              onClick={() => handleShowDropdown({ coders: !value['coders'] })}>
              Coders <ArrowDownSvg />
              <MenuDropdownCard listItems={codersDropdown} showDropdown={value['coders']} />
            </ListItem>
          )}
          {/*Need to update on next iteration */}
          {!role && (
            <ListItem onClick={() => handleShowDropdown({ reports: !value['reports'] })}>
              Reports <ArrowDownSvg />
              <MenuDropdownCard listItems={reportDropdown} showDropdown={value['reports']} />
            </ListItem>
          )}
        </Fragment>
      </List>
    </Box>
  );
};

export default MenuList;
