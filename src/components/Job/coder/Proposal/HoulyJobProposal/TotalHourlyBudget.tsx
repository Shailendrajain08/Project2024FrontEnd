import { Grid, Box, Typography } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

interface ITotalHourlyBudget {
  hourlyRate: number;
  hireCoderFeePercentage: number;
}
const TotalHourlyBudget = ({ hourlyRate, hireCoderFeePercentage }: ITotalHourlyBudget) => {
  const hireCoderFee = ((hourlyRate ? hourlyRate : 0) * (hireCoderFeePercentage / 100)).toFixed(2);
  return (
    <Box display={'flex'} flexDirection={'column'}>
      {' '}
      <Box display={'flex'} alignItems={'center'}>
        {' '}
        <Typography variant="body1">{'HireCoder Fee '}</Typography>
        <Box paddingLeft={'4px'} paddingRight={'4px'} marginTop={'4px'}>
          {' '}
          <HelpOutlineOutlinedIcon className="help-icon-modif" />
        </Box>
        <Typography variant="subtitle1">{`: $${hireCoderFee}`}</Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        {' '}
        <Typography variant="body1">{'You will receive : '}</Typography>
        <Typography paddingLeft={'4px'} variant="subtitle1">{` $${(
          Number(hourlyRate) - Number(hireCoderFee)
        ).toFixed(2)}`}</Typography>
      </Box>
    </Box>
  );
};

export default TotalHourlyBudget;
