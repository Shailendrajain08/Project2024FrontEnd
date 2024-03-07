import React, { Fragment, lazy, Suspense } from 'react';
import { SpinnerLoader } from '../../components/Common';
const AdminManageDashBoard = lazy(() => import('../../components/Admin/Manage'));

const AdminManagePage: React.FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<SpinnerLoader />}>
        <AdminManageDashBoard />
      </Suspense>
    </Fragment>
  );
};

export default AdminManagePage;
