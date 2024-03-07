import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IAdminCoderProfile } from './types';
import { Pagination } from '../../../Common';
import '../JobsPosting/Tables/index.css';
import constant from '../../../../constants/constant.json';
import paginationOptions from '../../../../constants/PaginationOption';
interface ITable {
  data: IAdminCoderProfile[];
}

const Coders: React.FC<ITable> = ({ data }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const column1: GridColDef[] = [
    {
      field: 'full_name',
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
            {phoneNo === null ? 'Not available' : phoneNo}
          </Typography>
        );
      }
    },

    {
      field: 'job_title',
      headerName: 'Job worked/ working',
      width: 170,
      renderCell: (params: any) => {
        const jobTitle = params.row.job_posts.map((item: any, index: number) => item.title);
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {jobTitle}
          </Typography>
        );
      }
    },

    {
      field: 'status',
      headerName: 'Job Status',
      width: 154,
      renderCell: (params: any) => {
        const jobStatus = params.row.job_posts.map((item: any, index: number) => item.status);
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {jobStatus}
          </Typography>
        );
      }
    },

    {
      field: 'skill',
      headerName: 'Skills',
      width: 124,
      renderCell: (params: any) => {
        const skills = params.row.skill;
        if (skills.length > 1) {
          const truncatedSkills =
            skills
              .slice(0, 1)
              .map((skill: any) => skill.technology.name)
              .join(', ') + ', ...';
          return (
            <Typography className="data-grid-row--items" variant="caption">
              {truncatedSkills}
            </Typography>
          );
        } else {
          const singleSkill = skills.map((skill: any) => skill.technology.name).join(', ');
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
      headerName: 'Status',
      renderCell: (params: any) => {
        const status = params.row.is_active;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {status ? 'Active' : 'Inactive'}
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

export default Coders;
