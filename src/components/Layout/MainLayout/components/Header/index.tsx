import React, { Fragment, useState } from 'react';
import { AppBar, Box, Button, Container, Drawer, Toolbar } from '@mui/material';
import MenuList from './components/MenuLIist';
import { useMediaQuery } from '@mui/material';
import { RootState } from '../../../../Store../../../store/reducers';
import MenuIcon from '@mui/icons-material/Menu';
import './index.css';
import SearchBox from './components/Search';
import NotificationBox from './components/Notification';
import LogoBox from './components/Logo';
import { EmailIconSvg, SuccessManagerSvg } from '../../../../../assets/svg';
import { useSelector } from 'react-redux';
import ProfileBox from './components/Profile';
import { useNavigate } from 'react-router-dom';
import MobileNavBar from './components/MobileNavbar';
import { useNav } from '../../../../../context/NavContext';
import SearchBoxDrawer from './components/Search/SearchDrawer';
import { TUserLoginData, INavProviderValue } from './type';

const Header: React.FC = () => {
  const userLoginData: TUserLoginData = useSelector((state: RootState) => state?.userLoginData);
  const navigate = useNavigate();
  const { setValue, handleClose }: INavProviderValue = useNav();
  const isMobileView = useMediaQuery('(max-width:600px)');
  const [role, setRole] = React.useState('');
  const [isToggle, setIsToggle] = useState(false);
  const [showSearchDrawer, setShowSearchDrawer] = useState(false);
  const currentPath = window?.location?.pathname;
  const isHideHeader = isToggle || showSearchDrawer;
  React.useEffect(() => {
    const userRole = localStorage.getItem('role') || '';
    setRole(userRole);
  }, [userLoginData]);

  const handleToggleClose = () => {
    setIsToggle(false);
  };

  const handlePostClick = () => {
    handleClose();
    if (currentPath && currentPath === '/clientDashboard') navigate('/jobPost');
  };

  return (
    <Fragment>
      <AppBar position="sticky" className={`header-container ${isHideHeader ? 'z-index_-1' : ''}`}>
        <Toolbar className="header-bar">
          <Container className="header--container">
            {' '}
            {isMobileView ? (
              <Fragment>
                <Box display="flex" justifyContent="space-between" width={1}>
                  <Box>
                    <LogoBox />
                  </Box>
                  <Box className="header-mobile--icon-box">
                    <Box>
                      <SearchBox role={role} setShowSearchDrawer={setShowSearchDrawer} />
                    </Box>
                    <Box onClick={() => setIsToggle(true)}>
                      <MenuIcon />
                    </Box>
                  </Box>
                </Box>
              </Fragment>
            ) : (
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <LogoBox />
                </Box>
                <Box className="header--right-box">
                  <Box>
                    <MenuList role={role} />
                  </Box>
                  <Box className="header--right-middle-box">
                    <SearchBox role={role} setShowSearchDrawer={setShowSearchDrawer} />
                    <Box className="icon-box">
                      <Box onClick={() => handleClose()} className="main-header--icon-box">
                        <NotificationBox notification={[]} />
                      </Box>
                      <Box onClick={() => handleClose()} className="main-header--icon-box">
                        <EmailIconSvg />
                      </Box>
                      {role === 'CLIENT' && (
                        <Box
                          onClick={() => {
                            setValue({ showSuccessManager: true });
                          }}>
                          <SuccessManagerSvg />
                        </Box>
                      )}
                      <ProfileBox userLoginData={userLoginData} role={role} />
                    </Box>
                  </Box>
                  {role === 'CLIENT' && currentPath === '/clientDashboard' && (
                    <Box display="flex" alignItems="center">
                      <Box className="button-box">
                        <Button variant="contained" onClick={handlePostClick}>
                          Post New Job
                        </Button>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            )}
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isToggle} onClose={handleToggleClose} className="nav-drawer">
        <MobileNavBar
          role={role}
          handleToggleClose={handleToggleClose}
          currentPath={currentPath}
          navigate={navigate}
          handleClose={handleClose}
          setValue={setValue}
        />
      </Drawer>
      <Drawer
        anchor="top"
        open={showSearchDrawer}
        onClose={() => setShowSearchDrawer(false)}
        className="search-drawer">
        <SearchBoxDrawer setShowSearchDrawer={setShowSearchDrawer} />
      </Drawer>
    </Fragment>
  );
};

export default Header;
