import React, { Fragment, lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { NavProvider } from '../../../context/NavContext';
import { SpinnerLoader } from '../../Common';
import { useNav } from '../../../context/NavContext';
import { Box } from '@mui/material';
const Header = lazy(() => import('./components/Header'));

const MainLayout: React.FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<SpinnerLoader />}>
        <NavProvider>
          <Header />
          <RouterOutlet />
          <Footer />
        </NavProvider>
      </Suspense>
    </Fragment>
  );
};

export default MainLayout;

const RouterOutlet = () => {
  const { handleClose }: any = useNav();
  return (
    <Box onClick={handleClose}>
      <Outlet />
    </Box>
  );
};
