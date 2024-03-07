import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from '@mui/material';
import { AttachmentOutlined, CloseOutlined, FileOpenOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { Modal } from '../../../../../Common';

const RenderDetailCellPopUp = (params: GridRenderCellParams) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState<any>(null);
  const showbButton = false;

  const handleClickOpen = () => {
    setSelectedRowData(params.row);
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box className="muiDataGrid-cellContent">
      <Box className="muidatagrid-pop-icon">
        <FileOpenOutlined onClick={handleClickOpen} />
      </Box>

      {/* Popup Dialog */}
      <Modal open={isDialogOpen} onClose={handleClose} modalBodyWidth="722px">
        <Box p={'8px'}>
          <Box className="top-header-fixed-pop-up">
            <Typography variant="h2">Details of Milestone</Typography>
            <CloseOutlined onClick={handleClose} />
          </Box>

          {selectedRowData && (
            <Box display={'flex'} flexDirection={'column'} mt={'24px'} rowGap={'20px'}>
              <TextField
                label={'Milestone'}
                value={selectedRowData.title}
                disabled
                fullWidth
                variant="outlined"
                margin="dense"
              />

              <TextField
                label={'Descriptiopn'}
                value={'Full time work'}
                disabled
                fullWidth
                variant="outlined"
                margin="dense"
              />

              <Box display={'flex'} columnGap={'16px'}>
                <TextField
                  label={'Time'}
                  value={'7 Days'}
                  disabled
                  fullWidth
                  variant="outlined"
                  margin="dense"
                />
                <TextField
                  label={'Fund Released'}
                  value={selectedRowData.amount}
                  disabled
                  fullWidth
                  variant="outlined"
                  margin="dense"
                />
              </Box>
              {showbButton && (
                <Box>
                  <Button className="attach-file-btn">
                    <AttachmentOutlined />
                    <Typography className="attach-file-desc">Attach a file</Typography>
                  </Button>
                  <Box className="fixed-pop-up-btn-group">
                    <Button size="large" variant="contained">
                      Save
                    </Button>
                    <Button size="large" variant="outlined">
                      Cancel
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export const fixedColumns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'Milestone',
    flex: 1,
    renderCell: (params: any) => {
      const title = params.row.title;
      return <Box className="muiDataGrid-cellContent">{title}</Box>;
    }
  },
  {
    field: 'due_date',
    headerName: 'Due Date',
    flex: 1,
    renderCell: (params: any) => {
      const date = new Date(params.row.due_date);
      const formatedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      return <Box className="muiDataGrid-cellContent">{formatedDate}</Box>;
    }
  },
  {
    field: 'amount',
    headerName: 'Amount',
    flex: 1,
    renderCell: (params: any) => {
      const amount = params.row.amount;
      return <Box className="muiDataGrid-cellContent">{amount}</Box>;
    }
  },
  {
    field: 'detail',
    headerName: 'Milestone details',
    flex: 1,
    renderCell: RenderDetailCellPopUp
  },
  {
    field: 'payment_status',
    headerName: 'Payment Status',
    flex: 1,
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
        case 'REQUESTED':
          label = 'Request Sent';
          styleChip = 'chip--approved';
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
    field: 'milestone_status',
    headerName: 'Milestone Status',
    flex: 1,
    renderCell: (params: any) => {
      const payment_status = params.row.payment_status;
      let label = '';
      let styleChip = '';

      switch (payment_status) {
        case 'PAID':
          label = 'Completed';
          styleChip = 'chip--approved';
          break;
        case 'REQUESTED':
          label = 'Pending';
          styleChip = 'chip--processing';
          break;
        default:
          '';
      }

      return (
        <Box pl={'12px'}>
          <Chip label={label} className={styleChip} />
        </Box>
      );
    }
  }
];
