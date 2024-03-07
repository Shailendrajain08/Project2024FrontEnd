import React, { Fragment, lazy, Suspense } from 'react';
import { SpinnerLoader } from '../../components/Common';
const ClientDashboard = lazy(() => import('../ClientDashboardPage'));

const ClientDashboardPage: React.FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<SpinnerLoader />}>
        <ClientDashboard />
      </Suspense>
    </Fragment>
  );
};

export default ClientDashboardPage;
