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
import { fixedPriceData } from './types';
import { FileIconOutlined } from '../../../../../assets/svg/FileIconOutlined';
import { PaymentStatus } from '../../../../../constants/paymentStatus';

const formatDate = (dueDate: string) => {
  const date = new Date(dueDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const TableData = () => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className="fixed-price-payment-table-row">
              <TableCell>
                <Typography variant="subtitle2">Date</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">Milestone</Typography>
              </TableCell>
              <TableCell className="fixed-price-payment-table-data">
                {' '}
                <Typography variant="subtitle2">Coder</Typography>
              </TableCell>
              <TableCell className="fixed-price-payment-table-data">
                <Typography variant="subtitle2">Milestone Details</Typography>
              </TableCell>
              <TableCell className="fixed-price-payment-table-data">
                <Typography variant="subtitle2">Milestone Status</Typography>
              </TableCell>
              <TableCell className="fixed-price-payment-table-data">
                <Typography variant="subtitle2">Amount</Typography>
              </TableCell>
              <TableCell className="fixed-price-payment-table-data">
                <Typography variant="subtitle2"> Payment Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fixedPriceData.map((row, index) => {
              const formattedDate = formatDate(row[0].due_date);

              return (
                <TableRow key={Math.random()} className="fixed-price-payment-table-row">
                  <TableCell className="fixed-price-payment-table-data">
                    <Typography className="fixed-price-light-color " variant="caption">
                      {formattedDate}
                    </Typography>
                  </TableCell>
                  <TableCell className="fixed-price-payment-table-data">
                    <Box className=" fixed-price-desc">
                      <Tooltip title={row[0].milestone_desc} arrow>
                        <Typography className="fixed-price-light-color" variant="caption">
                          {row[0].milestone_desc.length <= 15
                            ? row[0].milestone_desc
                            : row[0].milestone_desc.substring(0, 15) + '...'}
                        </Typography>
                      </Tooltip>
                    </Box>
                  </TableCell>
                  <TableCell className="fixed-price-payment-table-data">
                    <Typography className="fixed-price-light-color" variant="caption">
                      {' '}
                      {row[0].coder_name}
                    </Typography>
                  </TableCell>

                  <TableCell className="fixed-price-payment-table-data">
                    {' '}
                    <Avatar className="fixed-price-avatar-box">
                      {' '}
                      <FileIconOutlined />
                    </Avatar>
                  </TableCell>
                  <TableCell className="fixed-price-payment-table-data">
                    <Typography variant="caption">
                      <Chip
                        className={
                          row[0].milestone_status === 'Completed'
                            ? 'milestone-status-completed'
                            : 'milestone-status-processing'
                        }
                        label={row[0].milestone_status}
                      />
                    </Typography>
                  </TableCell>
                  <TableCell className="fixed-price-payment-table-data">
                    <Typography className="fixed-price-light-color" variant="caption">
                      {' '}
                      $ {row[0].amount.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell className="fixed-price-payment-table-data">
                    {row[0].payment_status === PaymentStatus.Done ||
                    row[0].payment_status === PaymentStatus.Processing ? (
                      <Chip
                        className={`milestone-status-${row[0].payment_status.toLowerCase()}`}
                        label={row[0].payment_status}
                      />
                    ) : (
                      <Button size="small" variant="outlined" className="fixed-price-hired-label">
                        {row[0].payment_status}
                      </Button>
                    )}
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
