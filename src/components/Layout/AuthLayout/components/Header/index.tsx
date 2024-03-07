import React, { Fragment } from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import LogoBox from '../../../MainLayout/components/Header/components/Logo';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/reducers';

const Header: React.FC = () => {
  const currentPath = window?.location?.pathname;
  const userRegisterData = useSelector((state: RootState) => state?.register);

  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <AppBar position="sticky" className="header-auth--app-bar">
      <Toolbar className="header-auth--tool-bar">
        <Box>
          <LogoBox />
        </Box>
        <Box>
          {!(currentPath.indexOf('admin') > -1) && (
            <Fragment>
              {currentPath === '/register' ? (
                <Fragment>
                  {!userRegisterData?.data?.data?.access_token && (
                    <Button variant="contained" onClick={() => handleClick('/login')}>
                      Login
                    </Button>
                  )}
                </Fragment>
              ) : (
                <Fragment>
                  <Button variant="contained" onClick={() => handleClick('/register')}>
                    Sign Up
                  </Button>
                </Fragment>
              )}
            </Fragment>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
