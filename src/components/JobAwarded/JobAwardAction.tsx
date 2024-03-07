import { Button } from '@mui/material';

const JobAwardAction = () => {
  return (
    <>
      <Button variant="contained" color="error" sx={{ ml: 1 }}>
        Decline
      </Button>
      <Button variant="contained" sx={{ ml: 1 }}>
        Request Revision
      </Button>
      <Button variant="contained" color="success" sx={{ ml: 1 }}>
        Accept
      </Button>
    </>
  );
};

export default JobAwardAction;
