import { Box, Button, Chip } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

interface Hourly_timesheet {
  id: string;
  user: string;
  description: string;
  job_contract: string;
  start_time: string;
  end_time: string;
  total_hours: number;
  amount: number;
  payment_status: string;
  timesheet_status: string;
  created: string;
  updated: string;
}

const TimesheetHourlyColumns: GridColDef<Hourly_timesheet>[] = [
  {
    field: 'created',
    headerName: 'Created',
    width: 101,
    renderCell: (params: any) => {
      const date = new Date(params.row.created);
      const formatedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      return <Box className="muiDataGrid-cellContent">{formatedDate}</Box>;
    }
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 208,
    renderCell: (params: any) => {
      const description = params.row.description;
      return <Box className="muiDataGrid-cellContent-desc">{description}</Box>;
    }
  },
  {
    field: 'start_time',
    headerName: 'Start Time',
    width: 128,
    renderCell: (params: any) => {
      const startTime = new Date(`2000-01-01T${params.row.start_time}`);
      const formattedTime = startTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });

      return <Box className="muiDataGrid-cellContent">{formattedTime}</Box>;
    }
  },
  {
    field: 'end_time',
    headerName: 'End Time',
    width: 119,
    renderCell: (params: any) => {
      const endtime = new Date(`2000-01-01T${params.row.end_time}`);
      const formattedTime = endtime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });

      return <Box className="muiDataGrid-cellContent">{formattedTime}</Box>;
    }
  },
  {
    field: 'total_hours',
    headerName: 'Total Hours',
    type: 'number',
    width: 135,
    renderCell: (params: any) => {
      const total_hours = params.row.total_hours;
      return <Box className="muiDataGrid-cellContent-amount">{total_hours} hours</Box>;
    }
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 113,
    renderCell: (params: any) => {
      const amount = params.row.amount;
      return <Box className="muiDataGrid-cellContent-amount">${amount}</Box>;
    }
  },
  {
    field: 'payment_status',
    headerName: 'Payment Status',
    width: 165,
    renderCell: (params: any) => {
      const payment_status = params.row.payment_status;
      let label = '';
      let styleChip = '';
      switch (payment_status) {
        case 'PAID':
          label = 'Paid';
          styleChip = 'chip--paid';
          break;
        case 'REJECTED':
          label = 'Rejected';
          styleChip = 'chip--rejected';
          break;
        case 'PROCESSING':
          label = 'Pending';
          styleChip = 'chip--processing';
          break;
        default:
          styleChip = '';
      }

      return (
        <Box pl={'12px'}>
          <Chip label={label} className={styleChip} />
        </Box>
      );
    }
  },
  {
    field: 'timesheet_status',
    headerName: 'Timesheet Status',
    width: 147,
    renderCell: (params: any) => {
      const timesheetStatus = params.row.timesheet_status;

      if (timesheetStatus === 'APPROVED') {
        return (
          <Box pl={'10px'}>
            <Chip label="Approved" className="chip--approved" />
          </Box>
        );
      } else if (timesheetStatus === 'RESUBMIT') {
        return (
          <Box pl={'10px'}>
            <Button className="table--buttons" variant="outlined">
              RESUBMIT
            </Button>
          </Box>
        );
      } else if (timesheetStatus === 'SUBMIT HOURS') {
        return (
          <Box pl={'10px'}>
            <Button className="table--buttons" variant="outlined">
              SUBMIT HOURS
            </Button>
          </Box>
        );
      }
      return null;
    }
  }
];

export default TimesheetHourlyColumns;
