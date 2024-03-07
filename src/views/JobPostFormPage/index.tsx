import React, { Fragment, lazy, Suspense } from 'react';
import { SpinnerLoader } from '../../components/Common';
const JobPostForm = lazy(() => import('../../components/Job/client/jobPostForm'));

const ClientDashboardPage: React.FC = () => {
  console.log('ClientDashboardPage');
  return (
    <Fragment>
      <Suspense fallback={<SpinnerLoader />}>
        <JobPostForm />
      </Suspense>
    </Fragment>
  );
};

export default ClientDashboardPage;
