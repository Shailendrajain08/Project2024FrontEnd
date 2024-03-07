import { QuestionMarkOutlined } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { number } from 'yup';
import './index.css';
// import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

interface ITotalMilestoneData {
  totalTime: number;
  totalBudget: number;
  hireCoderFee: string;
}
const TotalMilestoneData = ({ totalTime, totalBudget, hireCoderFee }: ITotalMilestoneData) => {
  return (
    <Box mt={2}>
      <Box className="project-cost-section">
        <Box>
          <Typography variant="body1" fontSize={16} fontWeight={400} lineHeight={'24px'}>
            {'Total Project Cost :'}{' '}
            <Typography component={'span'} fontSize={16} fontWeight={500}>{`$${totalBudget.toFixed(
              2
            )}`}</Typography>{' '}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" fontSize={16} fontWeight={400} lineHeight={'24px'}>
            {'Estimated Time(In Days) : '}{' '}
            <Typography component={'span'} fontSize={16} fontWeight={500}>
              {totalTime}
            </Typography>{' '}
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box mt={1.8}>
          {' '}
          <Box display={'flex'} alignItems={'center'} columnGap={0.5}>
            <Box>
              <Typography variant="body1" fontSize={16} fontWeight={400} lineHeight={'24px'}>
                Hire Coder Fee
              </Typography>
            </Box>
            <Box className="question-icon">
              <QuestionMarkOutlined />
            </Box>
            <Box>
              <Typography variant="body1" fontSize={16} fontWeight={500}>
                {` : $${hireCoderFee}`}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box mt={1.8}>
          {' '}
          <Typography variant="body1" fontSize={16} fontWeight={400} lineHeight={'24px'}>
            {'You Will Receive : '}
            <Typography component={'span'} fontSize={16} fontWeight={500}>
              {`$${(Number(totalBudget) - Number(hireCoderFee)).toFixed(2)}`}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TotalMilestoneData;
