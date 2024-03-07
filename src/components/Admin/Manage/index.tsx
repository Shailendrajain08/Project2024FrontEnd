import React from 'react';
import { Box } from '@mui/material';
import { adminclientMenu } from '../constant';
import AdminManageClient from '../Client';
import AdminSideMenu from './SideMenu';
import CoderDetails from './Coder';
import AdminDashboard from '../AdminDashboard';
import AdminManageJobs from './Jobs';

const AdminManageDashBoard = () => {
  const [selectedMenu, setSelectedMenu] = React.useState(0);

  return (
    <Box className="admin-dashboard--container">
      <Box className="admin-dashboard-menu--container">
        <Box className="admin-dashboard-sidemenu--content">
          <AdminSideMenu
            menu={adminclientMenu}
            getSelectedMenu={(id: number) => setSelectedMenu(id)}
          />
        </Box>
      </Box>
      <Box className="admin-dashboard-details--container">
        <Box className="menu-wrapper">
          {selectedMenu == 0 && <AdminDashboard />}
          {selectedMenu == 4 && <AdminManageClient />}
          {selectedMenu == 5 && <CoderDetails />}
          {selectedMenu == 6 && <AdminManageJobs />}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminManageDashBoard;
