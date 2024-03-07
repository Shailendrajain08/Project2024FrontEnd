import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import { SpinnerLoader } from '../../components/Common';
const ProposalList = lazy(() => import('../../components/Proposal/Client/ProposalList'));

const ClientProposalListPage: React.FC = () => {
  return (
    <Box className="body--box">
      <Suspense fallback={<SpinnerLoader />}>
        <ProposalList />
      </Suspense>
    </Box>
  );
};

export default ClientProposalListPage;
