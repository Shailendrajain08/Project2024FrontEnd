import React, { Fragment, lazy, Suspense } from 'react';
import { SpinnerLoader } from '../../components/Common';
const CoderHomeComponent = lazy(() => import('../../components/Home/Coder'));

const CoderHomePage: React.FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<SpinnerLoader />}>
        <CoderHomeComponent />
      </Suspense>
    </Fragment>
  );
};

export default CoderHomePage;
