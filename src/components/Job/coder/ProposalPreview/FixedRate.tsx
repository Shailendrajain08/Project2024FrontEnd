import { Box, Grid, Typography } from '@mui/material';
import { mapFixedPropsalData } from '../../../Job/coder/utils';
import { DataGrid } from '@mui/x-data-grid';
import './index.css';
import TotalMilestoneData from '../Proposal/FixedJobProposal/TotalBudget';

interface IFixedRate {
  totalTime: number;
  totalBudget: number;
  hireCoderFee: number;
  hireCoderFeePercentage: string;
  fixedProposalData: any;
}

const columns = [
  {
    field: 'milestone',
    headerName: 'Milestone',
    flex: 1,
    disableColumnFilter: true,
    renderCell: (params: any) => {
      const milestone = params.row.milestone;
      return <Typography className="milestone-col">{milestone}</Typography>;
    }
  },
  {
    field: 'time',
    headerName: 'Time',
    flex: 1,
    disableColumnFilter: true,
    renderCell: (params: any) => {
      const time = params.row.time;
      return <Typography className="milestone-col">{time} Days</Typography>;
    }
  },
  {
    field: 'milestoneAmount',
    headerName: 'Milestone Amount',
    width: 142,
    disableColumnFilter: true,
    headerClassName: 'custom-header',
    renderCell: (params: any) => {
      const milestoneAmount = params.row.milestoneAmount;
      return <Typography className="milestone-col">${milestoneAmount}</Typography>;
    }
  }
];

const FixedRate = ({ totalTime, totalBudget, hireCoderFeePercentage, fixedProposalData }: any) => {
  const mapFixedData = mapFixedPropsalData(fixedProposalData);

  const generateUniqueID = () => Math.random().toString(36).substring(2, 11);

  const tabledata = mapFixedData.map((milestone: any) => ({
    id: generateUniqueID(),
    milestone: milestone.milestone,
    time: milestone.time,
    milestoneAmount: milestone.fundsReleased
  }));

  return (
    <>
      <Box>
        <DataGrid
          className="proposal-table"
          rows={tabledata}
          columns={columns}
          getRowId={tabledata.id}
          hideFooterPagination={true}
          hideFooter={true}
          rowHeight={54}
        />
      </Box>
      <Box paddingTop={'20px'} paddingRight={'24px'} paddingLeft={'24px'}>
        <TotalMilestoneData
          totalTime={totalTime}
          totalBudget={totalBudget}
          hireCoderFee={hireCoderFeePercentage}
        />
      </Box>
    </>
  );
};

export default FixedRate;
