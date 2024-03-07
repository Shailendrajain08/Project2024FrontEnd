import React, { useState } from 'react';
import { Box, Switch, Typography, Tooltip } from '@mui/material';
import { Pagination } from '../../../Common';
import paginationOptions from '../../../../constants/PaginationOption';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IAdminCoworkerProfile } from './types';
import '../JobsPosting/Tables/index.css';
import constant from '../../../../constants/constant.json';

interface ITable {
  data: IAdminCoworkerProfile[];
}

const Coworkers: React.FC<ITable> = ({ data }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const [switchStates, setSwitchStates] = useState(
    data.map((job: any) => ({ id: job.linkedin_url, checked: job.is_active }))
  );

  const handleChange = (id: string) => {
    setSwitchStates((prevSwitchStates) =>
      prevSwitchStates.map((switchState) =>
        switchState.id === id ? { ...switchState, checked: !switchState.checked } : switchState
      )
    );
  };
  const column1: GridColDef[] = [
    {
      field: 'first_name',
      headerName: 'Name',
      width: 156,
      renderCell: (params: any) => {
        const { first_name, last_name } = params.row;
        const coderName = last_name ? `${first_name} ${last_name}` : first_name;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {coderName}
          </Typography>
        );
      }
    },

    {
      field: 'email',
      headerName: 'Email',
      width: 154,
      renderCell: (params: any) => {
        const emailId = params.row.email;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {emailId}
          </Typography>
        );
      }
    },

    {
      field: 'phone',
      headerName: 'Phone Number',
      width: 154,
      renderCell: (params: any) => {
        const phoneNo = params.row.phone;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {phoneNo === null || phoneNo === undefined ? 'Not available' : phoneNo}
          </Typography>
        );
      }
    },

    {
      field: 'position',
      headerName: 'Position',
      width: 154,
      renderCell: (params: any) => {
        const position = params.row.position;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {position}
          </Typography>
        );
      }
    },

    {
      field: 'message',
      headerName: 'Message',
      width: 154,
      renderCell: (params: any) => {
        const message = params.row.message;
        const truncatedMessage = message.length > 15 ? `${message.slice(0, 15)}...` : message;
        return (
          <Tooltip title={message} arrow>
            <Typography className="data-grid-row--items" variant="caption">
              {truncatedMessage}
            </Typography>
          </Tooltip>
        );
      }
    },

    {
      field: 'country',
      headerName: 'Country',
      width: 110,
      renderCell: (params: any) => {
        const country = params.row.country;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {country}
          </Typography>
        );
      }
    },

    {
      field: 'state',
      headerName: 'State',
      width: 110,
      renderCell: (params: any) => {
        const state = params.row.state;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {state}
          </Typography>
        );
      }
    },

    {
      field: 'is_active',
      headerName: 'Manage',
      renderCell: (params: any) => (
        <Switch
          size="small"
          checked={
            switchStates.find((switchState) => switchState.id === params.row.linkedin_url)
              ?.checked || false
          }
          onChange={() => handleChange(params.row.linkedin_url)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      )
    }
  ];

  const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <>
      <Box
        className="data--grid--other--tables"
        border={'1px solid rgba(0, 0, 0, 0.12)'}
        borderTop={'none'}
        borderRadius={'0px 0px 8px 8px'}>
        <DataGrid
          rows={paginatedData}
          columns={column1}
          hideFooterPagination={true}
          hideFooter={true}
          rowHeight={constant.datagrid.rowHeight}
          getRowId={(row) => row.linkedin_url}
        />
      </Box>

      <Box paddingBottom={'32px'} paddingTop={'32px'} bgcolor={'#F9F9F9'}>
        <Pagination
          defaultOption={{ value: rowsPerPage.toString(), label: rowsPerPage.toString() }}
          options={paginationOptions}
          pageCount={Math.ceil(data.length / rowsPerPage)}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default Coworkers;
