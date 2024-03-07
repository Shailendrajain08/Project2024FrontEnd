import React, { useState } from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IAdminCoderinvitedProfile } from './types';
import { Pagination } from '../../../Common';
import '../JobsPosting/Tables/index.css';
import constant from '../../../../constants/constant.json';
import paginationOptions from '../../../../constants/PaginationOption';

interface ITable {
  data: IAdminCoderinvitedProfile[];
}

const CodersInvited: React.FC<ITable> = ({ data }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
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
        const emailId = params?.row?.email;
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
        const phoneNo = params?.row?.phone;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {phoneNo === null || phoneNo === undefined ? 'Not available' : phoneNo}
          </Typography>
        );
      }
    },

    {
      field: 'skills',
      headerName: 'Skills',
      width: 124,
      renderCell: (params: any) => {
        const skills = params.row.skills;
        if (skills.length > 1) {
          const truncatedSkills = skills.slice(0, 1).join(', ') + ', ...';
          return (
            <Tooltip title={skills} arrow>
              <Typography className="data-grid-row--items" variant="caption">
                {truncatedSkills}
              </Typography>
            </Tooltip>
          );
        } else {
          const singleSkill = skills.join(', ');
          return (
            <Typography className="data-grid-row--items" variant="caption">
              {singleSkill}
            </Typography>
          );
        }
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
      renderCell: (params: any) => {
        const state = params.row.state;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {state}
          </Typography>
        );
      }
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

export default CodersInvited;
