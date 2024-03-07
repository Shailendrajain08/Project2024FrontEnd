import { Button, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Fragment } from 'react';

const handleButtonClick = (data: any) => {
  console.log(data);
};

export const TimesheetColumn = [
  { field: 'mileStone', headerName: 'Milestone', flex: 1 },
  { field: 'dueDate', headerName: 'Due Date', width: 150 },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 150,
    renderCell: (params: any) => <div>{`$${params?.row?.amount}`}</div>
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: (params: any) => (
      <>
        {!params?.row?.status && (
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained">Approve</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="error">
                Reject
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="warning">
                Revise
              </Button>
            </Grid>
          </Grid>
        )}
        {params?.row?.status === 'paid' && <div style={{ color: 'green' }}>PAID</div>}
        {params?.row?.status === 'processing' && <Button variant="contained">Processing</Button>}
      </>
    )
  },
  { field: 'transactionId', headerName: 'Transaction Id', width: 200 }
];
