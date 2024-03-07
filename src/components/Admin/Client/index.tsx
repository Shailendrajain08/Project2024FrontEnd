import React from 'react';
import { Box } from '@mui/material';
import './index.css';
import ClientHeaderSection from './ClientTableSection';

const AdminManageClient = () => {
  return (
    <Box className="admin--main-container">
      <Box>
        <ClientHeaderSection />
      </Box>
    </Box>
  );
};

export default AdminManageClient;
