import { Fragment, lazy, Suspense } from 'react';
import { SpinnerLoader } from '../../components/Common';
const CoderProfile = lazy(() => import('../../components/Profile/Coder'));

const CoderProfilePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<SpinnerLoader />}>
        <CoderProfile />
      </Suspense>
    </Fragment>
  );
};

export default CoderProfilePage;
