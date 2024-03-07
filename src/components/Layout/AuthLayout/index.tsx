import React, { Fragment, lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { SpinnerLoader } from '../../Common';
import { Box } from '@mui/material';
const Header = lazy(() => import('./components/Header'));

const AuthLayout: React.FC<any> = () => {
  return (
    <Fragment>
      <Suspense fallback={<SpinnerLoader />}>
        <Header />
        <Box flex={1}>
          <Outlet />
        </Box>
        <Box>
          <Footer />
        </Box>
      </Suspense>
    </Fragment>
  );
};

export default AuthLayout;
