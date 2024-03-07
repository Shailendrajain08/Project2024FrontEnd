import React, { lazy, Suspense } from 'react';
import { SpinnerLoader } from '../../components/Common';
import { Box, Container } from '@mui/material';
const CoderDashboard = lazy(() => import('../../components/CoderDashboard'));

const CoderDashboardPage: React.FC = () => {
  return (
    <Box className="body--box" pt={6.25} pb={8.75}>
      <Container className="">
        <Suspense fallback={<SpinnerLoader />}>
          <CoderDashboard />
        </Suspense>
      </Container>
    </Box>
  );
};

export default CoderDashboardPage;
