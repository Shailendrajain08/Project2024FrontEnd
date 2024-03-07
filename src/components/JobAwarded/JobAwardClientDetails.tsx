import { Card, Typography, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const JobAwardClientDetails = () => {
  return (
    <Card sx={{ m: 1, p: 3 }}>
      <Stack sx={{ mb: 3 }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 16 }}>About the client</Typography>
      </Stack>
      <Stack sx={{ mb: 2 }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>Payment Method Verified</Typography>
        <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 15 }}>
          <StarIcon /> <StarIcon /> 4.99 of 2 reviews
        </Typography>
      </Stack>
      <Stack sx={{ mb: 2 }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>United Kingdom</Typography>
        <Typography sx={{ fontSize: 15 }}>Banbridge 4:17 pm</Typography>
      </Stack>
      <Stack sx={{ mb: 2 }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>6 Jobs Posted</Typography>
      </Stack>
      <Stack sx={{ mb: 2 }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>$14K total spent</Typography>
        <Typography sx={{ fontSize: 15 }}>4 hires, 1 active</Typography>
      </Stack>
      <Stack sx={{ mb: 2 }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>
          $24.93/hr avg hourly rate paid
        </Typography>
        <Typography sx={{ fontSize: 15 }}>355 hours</Typography>
      </Stack>
      <Stack sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: 15 }}>Mid-sized company (10-99 people)</Typography>
      </Stack>
      <Stack sx={{ mb: 2 }}>
        <Typography sx={{ fontSize: 14 }}>Member since Sep 18, 2019</Typography>
      </Stack>
    </Card>
  );
};

export default JobAwardClientDetails;
