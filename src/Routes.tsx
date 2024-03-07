import { useState } from 'react';
import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PageNotFound from './components/ErrorBoundary/PageNotFound';
import ClientJobDetail from './components/Job/client';
import ClientDashboard from './components/ClientDashboard';
import CoderProfile from './views/CoderProfilePage';
import CoderDashboardPage from './views/CoderDashboardPage';
import ClientProfile from './components/Profile/Client';
import CoderList from './components/CoderList';
import TransactionHistory from './components/Reports/TransactionHistory';
import TimeSheet from './components/Reports/TimeSheets';
import TimeSheetHourly from './components/Reports/TimeSheets/Hourly';
import ClientProposalListPage from './views/ClientProposalListPage';
import JobAwarded from './components/JobAwarded';
import { JobDetailPage, CoderProposalPreview } from './components/Job/coder';
import Chat from './components/Chat';
import ClientViewProposalPage from './views/ClientViewProposalPage';
import MainLayout from './components/Layout/MainLayout';
import ClientHomePage from './views/ClientHomePage';
import CoderDetails from './components/CoderDetails';
import ForgotPassword, { PasswordReset, SetNewPassword } from './components/ForgotPassword';
import AuthLayout from './components/Layout/AuthLayout';
import CoderProfileDetails from './components/ClientDashboard/components/CoderProfile';
import FilterCoder from './components/ClientDashboard/components/FilterCoder';
import JobDetailTimeSheet from './components/Job/coder/JobDetailsPage/JobDetailTimeSheet';
import InviteCoder from './components/ClientDashboard/components/InviteCoder';
import CoderHomePage from './views/CoderHomePage';
import CoderProfilePage from './views/CoderProfilePage';
import CoderApplyProposalPage from './views/CoderApplyProposalPage';
import JobDetails from './components/ClientDashboard/components/JobDetails';

//Admin
import AdminLoginPage from './views/AdminLoginPage';

import { Modal } from './components/Common';
import { Box, Button, Typography } from '@mui/material';

import AdminManagePage from './views/AdminManageClientPage';
import PaymentDetailsPage from './components/ClientDashboard/components/JobDetails/PaymentDetailPage';
import TermsConditionHelper from './components/TermsConditions/TermsConditions';

interface roleBaseInterfce {
  roles: Array<string>;
}

// roles variables we need to move .env file
const ROLE_CLIENT = 'CLIENT';
const ROLE_CODER = 'CODER';
const ROLE_ADMIN = 'ADMIN';
const ROLE_SUPER_ADMIN = 'SUPER-ADMIN';

// Procted route with token
const ProtectedRoute = () => {
  const token = localStorage.getItem('token');
  return !token ? <Navigate to="/login" /> : <Outlet />;
};

// Procted route with role
const RoleBaseRoute = ({ roles }: roleBaseInterfce) => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(true);
  const role = localStorage.getItem('role');
  const newRole = role ? role : '';
  const titleRole = `Your are login as a ${newRole.toLowerCase()}`;
  return roles.includes(newRole) ? (
    <Outlet />
  ) : (
    <div>
      <Modal
        open={isModalOpen}
        onClose={() => {
          setModalOpen(false);
          navigate(-1);
        }}
        closeIcon={true}
        title={titleRole}
        modalBodyWidth="380px"
        closeIconCustomWidth="success-manager-close-icon">
        <Box display={'flex'} justifyContent={'space-between'}>
          <Box>Please login as a {role === ROLE_CLIENT ? 'coder' : 'client'}</Box>
          <Button variant="contained" onClick={() => navigate('/login')}>
            Logout
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

const AppRoutes = ({ headerProps }: any) => {
  return (
    <Routes>
      <Route path="/" element={<ClientHomePage />} />
      <Route path="/coder" element={<CoderHomePage />} />
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset-confirm" element={<PasswordReset />} />
        <Route path="/password-change" element={<SetNewPassword />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route element={<MainLayout {...headerProps} />}>
        <Route element={<ProtectedRoute />}>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT]} />}>
            <Route path="/clientDashboard" element={<ClientDashboard />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CODER]} />}>
            <Route path="/coder/dashboard" element={<CoderDashboardPage />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CODER]} />}>
            <Route path="/feedback/coder" element={<CoderProfileDetails />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CODER]} />}>
            <Route path="/coderList" element={<CoderList />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT]} />}>
            <Route path="/client/job-post" element={<ClientJobDetail />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT]} />}>
            <Route path="/client/job/:id/detail" element={<JobDetails />} />
            <Route path="/payment/:id" element={<PaymentDetailsPage />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CODER]} />}>
            <Route path="/coder/:id/details" element={<CoderDetails />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CODER]} />}>
            <Route path="/coders/profile" element={<CoderProfilePage />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CODER]} />}>
            <Route path="/coders/profile" element={<CoderProfile />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT]} />}>
            <Route path="/client/profile" element={<ClientProfile />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT]} />}>
            <Route path="/jobPost" element={<ClientJobDetail />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CODER]} />}>
            <Route path="/coders/profile" element={<CoderProfile />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT]} />}>
            <Route path="/client/profile" element={<ClientProfile />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT, ROLE_CODER]} />}>
            <Route path="/reports/transaction-history" element={<TransactionHistory />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT, ROLE_CODER]} />}>
            <Route path="/reports/timesheets/fixedPrice" element={<TimeSheet />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT, ROLE_CODER]} />}>
            <Route path="/reports/timesheets/hourly" element={<TimeSheetHourly />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT, ROLE_CODER]} />}>
            <Route path="/job/:id/details" element={<JobDetailPage />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT]} />}>
            <Route path="/jobs/:id/proposals" element={<ClientProposalListPage />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT, ROLE_CODER]} />}>
            <Route path="/reports/timesheets/fixedPrice" element={<TimeSheet />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT, ROLE_CODER]} />}>
            <Route path="/jobs/:id" element={<JobDetailPage />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CODER]} />}>
            <Route path="/jobs/:id/proposal" element={<CoderApplyProposalPage />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CODER]} />}>
            <Route path="/jobs/:id/proposalPreview" element={<CoderProposalPreview />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT]} />}>
            <Route path="/jobs/:id/proposals/:proposalId" element={<ClientViewProposalPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT, ROLE_CODER]} />}>
            <Route path="/jobs/awarded" element={<JobAwarded />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT, ROLE_CODER]} />}>
            <Route path="/chat" element={<Chat />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT]} />}>
            <Route path="/filtercoder" element={<FilterCoder />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CODER]} />}>
            <Route path="/jobs/:id/timesheet" element={<JobDetailTimeSheet />} />
          </Route>

          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT]} />}>
            <Route path="/invitecoder" element={<InviteCoder />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_ADMIN, ROLE_SUPER_ADMIN]} />}>
            <Route path="/admin/dashboard" element={<AdminManagePage />} />
          </Route>
          <Route element={<RoleBaseRoute roles={[ROLE_CLIENT, ROLE_CODER]} />}>
            <Route path="/terms-conditions" element={<TermsConditionHelper />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
