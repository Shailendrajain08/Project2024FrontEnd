import {
  Typography,
  Chip,
  Box,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Button,
  Tooltip
} from '@mui/material';
import './index.css';
import { reportTransactionMockData } from './types';

const headers = [
  'Date',
  'Description',
  'Start Time',
  'End Time',
  'Total Hours',
  'Amount',
  'Payment Status',
  'Timesheet Status'
];

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const generateTime = (value: Date): string => {
  const hours = (value.getHours() % 12 || 12).toString().padStart(2, '0');
  const minutes = value.getMinutes().toString().padStart(2, '0');
  const ampm = value.getHours() >= 12 ? 'pm' : 'am';
  return `${hours}:${minutes} ${ampm} EST`;
};

const calculateTimeDifference = (date1: Date, date2: Date): string => {
  const timeDiffMs = date2.getTime() - date1.getTime();
  const hoursElapsed = Math.floor(timeDiffMs / (1000 * 60 * 60))
    .toString()
    .padStart(2, '0');
  const minutesElapsed = Math.floor((timeDiffMs % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, '0');

  return parseInt(hoursElapsed) < 1
    ? `${hoursElapsed}:${minutesElapsed} minutes`
    : `${hoursElapsed}:${minutesElapsed} hours`;
};

export const PaymentTableData = () => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className="fixed-price-payment-table-row">
              {headers.map((header, index) => (
                <TableCell key={Math.random()}>
                  <Typography variant="subtitle2">{header}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {reportTransactionMockData.map((row: any, index: number) => {
              const date = new Date(row.created);
              const date2 = new Date(row.updated);
              const formattedDate = formatDate(date);
              const timeDiff = calculateTimeDifference(date, date2);

              return (
                <TableRow key={index} className="fixed-price-payment-table-row">
                  <TableCell>
                    <Typography className="fixed-price-light-color " variant="caption">
                      {formattedDate}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box className=" fixed-price-desc">
                      <Tooltip title={row.description} arrow>
                        <Typography className="fixed-price-light-color" variant="caption">
                          {' '}
                          {row.description.length <= 15
                            ? row.description
                            : row.description.substring(0, 15) + '...'}
                        </Typography>
                      </Tooltip>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Typography className="fixed-price-light-color" variant="caption">
                      {generateTime(date)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className="fixed-price-light-color" variant="caption">
                      {generateTime(date2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className="fixed-price-light-color" variant="caption">
                      {timeDiff}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className="fixed-price-light-color" variant="caption">
                      $ {row.amount.toFixed(2)}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="caption">
                      {row.transaction_status === 'PAID' ? (
                        <Chip
                          className="milestone-status-processing"
                          label={row.transaction_status}
                        />
                      ) : (
                        <Button className="proposal-detail-hired-label" variant="outlined">
                          {row.transaction_status}
                        </Button>
                      )}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="caption">
                      {' '}
                      {row.timesheet_status === 'APPROVED' ? (
                        <Chip className="milestone-status-completed" label={row.timesheet_status} />
                      ) : (
                        <Typography color={'rgba(0, 0, 0, 0.6)'} variant="caption">
                          {row.timesheet_status.charAt(0).toUpperCase() +
                            row.timesheet_status.slice(1).toLowerCase()}
                        </Typography>
                      )}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
