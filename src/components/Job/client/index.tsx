import { Fragment } from 'react';
import JobPostForm from './jobPostForm';
import { memo } from 'react';

const ClientJobDetail = () => {
  return (
    <Fragment>
      <JobPostForm />
    </Fragment>
  );
};

export default memo(ClientJobDetail);
