import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapse,
  Container,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { CloseIconSvg } from '../../../../../../../assets/svg';
import './index.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../../../../store/actions/login';
import { IMobileNavBar, TData } from '../../type';

const MobileNavBar: React.FC<IMobileNavBar> = ({
  handleToggleClose,
  role,
  currentPath,
  navigate,
  handleClose,
  setValue
}) => {
  const [isShow, setIsSHow] = useState(false);
  const [showDropdown, setShowDropdown] = useState<TData>({});
  const dispatch = useDispatch();
  const handleDropdown = (value: TData) => {
    setShowDropdown(value);
  };

  const handleRouteClick = (path: string) => {
    if (path) navigate(path);
    handleClose();
  };
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    navigate('/login');
  };
  return (
    <Container className="header-mobile-container">
      <Box onClick={handleToggleClose} className="mobile-nav-bar--top-box">
        <CloseIconSvg />
      </Box>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton onClick={() => handleDropdown({ profile: !showDropdown['profile'] })}>
          <ListItemText primary="Profile" />
          {showDropdown['profile'] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={showDropdown['profile']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="padding_left--20">
            <ListItemButton onClick={() => handleRouteClick('/profile')}>
              <ListItemText primary="Profile Management Page" />
            </ListItemButton>
            <ListItemButton onClick={() => handleRouteClick('/clientDashboard')}>
              <ListItemText primary="My Dashboard" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={() => handleRouteClick('/jobs')}>
          <ListItemText primary="Jobs" />
        </ListItemButton>
        <ListItemButton onClick={() => handleDropdown({ coders: !showDropdown['coders'] })}>
          <ListItemText primary="Coders" />
          {showDropdown['coders'] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={showDropdown['coders']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="padding_left--20">
            <ListItemButton onClick={() => handleRouteClick('/findCoder')}>
              <ListItemText primary="Find a coder" />
            </ListItemButton>
            <ListItemButton onClick={() => handleRouteClick('/saveCoder')}>
              <ListItemText primary="Save coder" />
            </ListItemButton>
            <ListItemButton onClick={() => handleRouteClick('/myCoder')}>
              <ListItemText primary="My coder" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={() => handleDropdown({ reports: !showDropdown['reports'] })}>
          <ListItemText primary="Reports" />
          {showDropdown['reports'] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={showDropdown['reports']} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="padding_left--20">
            <ListItemButton onClick={() => handleRouteClick('/reports/transaction-history')}>
              <ListItemText primary="Transaction history" />
            </ListItemButton>
            <ListItemButton onClick={() => setIsSHow(!isShow)}>
              <ListItemText primary="Timesheets" />
              {isShow ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={isShow} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="padding_left--36">
            <ListItemButton onClick={() => handleRouteClick('/reports/timesheets/fixedPrice')}>
              <ListItemText primary="Fixed price" />
            </ListItemButton>
            <ListItemButton onClick={() => handleRouteClick('/reports/timesheets/hourly')}>
              <ListItemText primary="Hourly rate" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={() => handleRouteClick('')}>
          <ListItemText primary="Notifications" />
        </ListItemButton>
        <ListItemButton onClick={() => handleRouteClick('')}>
          <ListItemText primary="Messages" />
        </ListItemButton>
        {role === 'CLIENT' && (
          <ListItemButton
            onClick={() => {
              setValue({ showSuccessManager: true });
            }}>
            <ListItemText primary="Help & support" />
          </ListItemButton>
        )}

        <ListItemButton onClick={handleLogout}>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
      {role === 'CLIENT' && currentPath === '/clientDashboard' && (
        <Box className="mobile-header--post-new-job-btn">
          <Button variant="contained" onClick={() => handleRouteClick('/jobPost')}>
            Post a Job
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default MobileNavBar;
