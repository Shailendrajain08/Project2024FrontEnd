import React, { lazy, Suspense } from 'react';
import { Box, Container } from '@mui/material';
import { SpinnerLoader } from '../../components/Common';
const CoderProposal = lazy(() => import('../../components/Job/coder/Proposal'));

const CoderApplyProposalPage: React.FC = () => {
  return (
    <Box className="body--box" pt={6.5} pb={12}>
      <Container className="">
        <Suspense fallback={<SpinnerLoader />}>
          <CoderProposal />
        </Suspense>
      </Container>
    </Box>
  );
};

export default CoderApplyProposalPage;
