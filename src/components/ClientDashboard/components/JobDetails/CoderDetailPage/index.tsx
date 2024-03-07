import React, { useState } from 'react';
import { Stack, Box, Typography, Tab, Chip, Tabs } from '@mui/material';
import HiredCoderCard from './HiredCoderCard';
import ProposalCard from './ProposalCard';
import { FilterListOutlined } from '../../../../../assets/svg/FilterListOutlined';
import './index.css';
interface CoderDetailProps {
  status: string;
}
const CoderDetail: React.FC<CoderDetailProps> = ({ status }) => {
  return (
    <>
      {status && status.toUpperCase() === 'OPEN' ? (
        <Box p={3}>
          <Typography variant="subtitle1">No Coder Found</Typography>
        </Box>
      ) : (
        <>
          <Box className="coder-detail-menu">
            <Box>
              <Typography className="coder-detail-heading" variant="h3">
                Hired Coder
              </Typography>
            </Box>
            <Box>
              <Chip
                className="coder-detail-filter"
                label="More Filter"
                icon={<FilterListOutlined />}
              />
            </Box>
          </Box>
          <HiredCoderCard />

          <Box className="coder-detail-proposal-heading">
            <Typography variant="h3" className="proposal-heading">
              Proposals
            </Typography>
          </Box>

          <ProposalCard />
        </>
      )}
    </>
  );
};

export default CoderDetail;
