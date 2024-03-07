import { Button, Grid } from '@mui/material';
import { handlePaymentClick } from '../../utils';
import { GridCellParams } from '@mui/x-data-grid';
import { handlePaymentStatusI } from '../../type';

export const TimesheetHourlyColumn = (handlePaymentStatus: handlePaymentStatusI) => {
  return [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'startTime', headerName: 'Start Time', width: 130 },
    { field: 'endTime', headerName: 'End Time', width: 130 },
    { field: 'totalHours', headerName: 'Total Hours', width: 130 },
    {
      field: 'status',
      headerName: 'Payment (Status)',
      flex: 1,
      renderCell: (params: GridCellParams) => (
        <>
          {!params?.row?.status && (
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={(e) =>
                    handlePaymentClick(e, 'approved', handlePaymentStatus, params?.row)
                  }>
                  Approve
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="error"
                  onClick={(e) =>
                    handlePaymentClick(e, 'rejected', handlePaymentStatus, params?.row)
                  }>
                  Reject
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={(e) =>
                    handlePaymentClick(e, 'revised', handlePaymentStatus, params?.row)
                  }>
                  Revise
                </Button>
              </Grid>
            </Grid>
          )}
          {params?.row?.status === 'approved' && <div style={{ color: 'green' }}>Approved</div>}
          {params?.row?.status === 'rejected' && <div style={{ color: 'red' }}>Rejected</div>}
          {params?.row?.status === 'revised' && <div style={{ color: 'orange' }}>Revised</div>}
        </>
      )
    }
  ];
};
