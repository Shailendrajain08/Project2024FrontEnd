import { Fragment } from 'react';
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MenuDropdown from '../../Common/MenuDropdown';

export const TransactionColumn = (
  handleViewClick: any,
  handleDownloadInvoice: any,
  handleTypeFilter: any
) => {
  return [
    { field: 'date', headerName: 'Date' },
    { field: 'job', headerName: 'Job', width: 250 },
    { field: 'coder', headerName: 'Coder' },
    { field: 'description', headerName: 'Description', width: 270 },
    {
      field: 'type',
      renderHeader: () => (
        <MenuDropdown
          title="Type"
          menuList={[{ name: 'Debit' }, { name: 'Credit' }, { name: 'Failed' }]}
          sx={{ color: 'Black' }}
          callBackFnc={handleTypeFilter}
        />
      ),
      width: 130
    },
    { field: 'amount', headerName: 'Amount' },
    { field: 'transactionId', headerName: 'Transaction Id', width: 150 },
    {
      field: 'invoice',
      headerName: 'Invoice',
      width: 150,
      renderCell: (params: any) => (
        <Fragment>
          <Button onClick={() => handleViewClick(params.row)}>
            <VisibilityIcon />
          </Button>
          <Button onClick={() => handleDownloadInvoice(params.row)}>
            <FileDownloadIcon />
          </Button>
        </Fragment>
      )
    }
  ];
};
