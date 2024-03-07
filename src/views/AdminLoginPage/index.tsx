import React, { Fragment, lazy, Suspense } from 'react';
import { SpinnerLoader } from '../../components/Common';
const AdminLogin = lazy(() => import('../../components/Admin/Login'));

const AdminLoginPage: React.FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<SpinnerLoader />}>
        <AdminLogin />
      </Suspense>
    </Fragment>
  );
};

export default AdminLoginPage;
