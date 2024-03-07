import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Container, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const NavBar: React.FC<any> = ({ handleHideNav, handleToggleSide, isToggle }: any) => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/login');
  };
  return (
    <AppBar position="relative" className="home-nav-bar--app-bar">
      <Toolbar className="home-nav-bar--toolbar">
        <Container className="home-nav-bar--container">
          <Box className="home-nav-bar--box">
            <Link to="/" className="home-nav-bar--logo-link-box">
              <img className="page_logo" src="images/svg/pagr_logo.svg" alt="logo" />
            </Link>
            <Box className="home-nav-bar--md-box">
              <Link className="home-nav-bar--link" to="/">
                Jobs
              </Link>
              <Link className="home-nav-bar--link" to="/coder">
                Coders
              </Link>
              <Button variant="outlined" onClick={handleSignIn} className="home-nav-bar--sign-in">
                Sign In
              </Button>
            </Box>
            <Box
              position={'fixed'}
              width={1}
              className={`overlay nav-bar-mobile ${
                isToggle ? 'show_nav  hc-nav-bar-mobile-height' : ''
              }`}
              overflow={isToggle ? 'hidden' : 'auto'}
              id="overlay">
              <Box
                position={'relative'}
                height={'100vh'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={2}
                width={1}>
                <Link
                  onClick={handleHideNav}
                  className="home-nav-bar--link-mobile nav_links"
                  to="/">
                  Jobs
                </Link>
                <Link
                  onClick={handleHideNav}
                  className="home-nav-bar--link-mobile nav_links"
                  to="/coder">
                  Coders
                </Link>
                <Button variant="outlined" onClick={handleSignIn} className="home-nav-bar--sign-in">
                  Sign In
                </Button>
                <Button variant="text" onClick={handleHideNav}>
                  <img
                    className="d-xl-none d-block"
                    src="images/svg/nav_cross_icon.svg"
                    alt="cross-icon"
                  />
                </Button>
              </Box>
            </Box>
            <IconButton
              size="large"
              onClick={handleToggleSide}
              edge="start"
              color="inherit"
              aria-label="menu"
              className="nav-bar-mobile menubar">
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
