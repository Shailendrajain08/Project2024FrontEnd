import { Grid, Container } from '@mui/material';
import WorkHistory from './WorkHistory';
import ProfileHeader from './ProfileHeader';
import Summary from './Summary';
import EmploymentHistory from './EmploymentRecord';
import EducationRecord from './EducationRecord';
import Certifications from './Certifications';
import Skills from './Skills';
import Portfolio from './Portfolio';

const ClientDashboard = ({}) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item mt={3} xs={11}>
          <ProfileHeader />
        </Grid>
        <Grid item xs={12} md={7}>
          <Summary />
          <WorkHistory />
          <EmploymentHistory />
          <EducationRecord />
          <Certifications />
          <Skills />
        </Grid>
        <Grid item xs={12} md={4}>
          <Portfolio />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClientDashboard;
