import React, { lazy, Suspense } from 'react';
import { Box, Container } from '@mui/material';
import { SpinnerLoader } from '../../components/Common';
const ViewProposal = lazy(() => import('../../components/Proposal/Client/ViewProposal'));

const ClientViewProposalPage: React.FC = () => {
  return (
    <Box className="body--box" pt={6.5} pb={12}>
      <Container className="">
        <Suspense fallback={<SpinnerLoader />}>
          <ViewProposal />
        </Suspense>
      </Container>
    </Box>
  );
};

export default ClientViewProposalPage;
