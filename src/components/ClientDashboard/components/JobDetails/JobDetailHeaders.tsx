import React, { useEffect, useState } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../../../store/actions/jobs';
import { JobStatus } from '../../../../constants/job';
import { useJobDetails } from './UseJobDetails';

export interface DetailHeaderProps {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

export const DetailHeader: React.FC<DetailHeaderProps> = ({ setStatus }) => {
  const { job } = useJobDetails();
  setStatus(job.status);

  return (
    <Box className="job-detail-job-headlines">
      <Box className="job-detail-desc">
        <Typography className="job-detail-job-headline" variant="h3">
          {job.title}
        </Typography>
        {job.status === JobStatus.INPROGRESS ? (
          <Chip className="coder-detail-chip-top" label={job.status} />
        ) : (
          <Chip className="chip-top" label={job.status} />
        )}
      </Box>

      <Typography className="job-detail-coder-hired" variant="subtitle1">
        Hired coders- 4
      </Typography>
    </Box>
  );
};

export const CoderHeader = () => {
  const { job } = useJobDetails();

  return (
    <Box className="job-detail-job-headlines">
      <Box className="job-detail-desc">
        <Typography className="job-detail-job-headline" variant="h3">
          {job.title}
        </Typography>
        {job.status === JobStatus.INPROGRESS ? (
          <Chip className="coder-detail-chip-top" label={job.status} />
        ) : (
          <Chip className="chip-top" label={job.status} />
        )}
      </Box>

      <Typography className="job-detail-coder-hired" variant="subtitle1">
        Hired coders- 4
      </Typography>
    </Box>
  );
};

export const PaymentHeader = () => {
  const { job } = useJobDetails();

  return (
    <Box className="job-detail-job-headlines">
      <Box className="job-detail-desc">
        <Typography className="job-detail-job-headline" variant="h3">
          {job.title}
        </Typography>
        {job.status === JobStatus.INPROGRESS ? (
          <Chip className="coder-detail-chip-top" label={job.status} />
        ) : (
          <Chip className="chip-top" label={job.status} />
        )}
      </Box>
      <Typography className="job-detail-coder-hired" variant="subtitle1">
        Hired coders- 4
      </Typography>
    </Box>
  );
};
