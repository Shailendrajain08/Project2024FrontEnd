import React, { Fragment, lazy, Suspense } from 'react';
import { SpinnerLoader } from '../../components/Common';
const ClientHomeComponent = lazy(() => import('../../components/Home/Client'));

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<SpinnerLoader />}>
        <ClientHomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
