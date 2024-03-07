import { Box, Grid, Typography } from '@mui/material';
import TotalHourlyBudget from '../Proposal/HoulyJobProposal/TotalHourlyBudget';

interface IHourlyRate {
  hourlyRate: number;
  availblity?: number;
  totalWorkHours?: number;
  hireCoderFeePercentage?: number;
}

const HourlyRate = ({ hourlyRate, availblity }: any) => {
  return (
    <Box display={'flex'} mt={'20px'} ml={'24px'} mr={'24px'} mb={'24px'} flexDirection={'column'}>
      <Typography display={'flex'} columnGap={'4px'} fontSize={'16px'} fontWeight={400}>
        Your Hourly Rate (USD/Hour) :{' '}
        <Typography variant="subtitle1" fontSize={'16px'} fontWeight={500}>
          {' '}
          ${hourlyRate}
        </Typography>
      </Typography>
      <Typography display={'flex'} columnGap={'4px'} fontSize={'16px'} fontWeight={400} mt={'10px'}>
        Availblity :{' '}
        <Typography variant="subtitle1" fontSize={'16px'} fontWeight={500}>
          {' '}
          ${availblity}/hr week
        </Typography>
      </Typography>
    </Box>
  );
};

export default HourlyRate;
