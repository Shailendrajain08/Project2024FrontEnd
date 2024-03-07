import React, { useState, useEffect } from 'react';
import { Pagination } from '../../../../Common';
import { Box, Switch } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import '../Client/index.css';

const ClientData: React.FC<any> = ({ clientsData }) => {
  const [checked, setChecked] = React.useState(true); // for switch manage//

  const [clientPostData, setClientPostData] = React.useState<any>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const columnClientData: any = [
    {
      field: 'first_name',
      headerName: 'Name',
      width: 160,
      renderCell: (params: any) => (
        <div className="full_name">{`${params.row.first_name} ${params.row.last_name}`}</div>
      )
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 160
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      width: 160
    },
    {
      field: 'company',
      headerName: 'Company Name',
      width: 160
    },
    {
      field: 'address',
      headerName: 'Country',
      width: 150
    },
    {
      field: 'message',
      headerName: 'Jobs Worked On',
      width: 176,
      renderCell: (params: any) => (
        <>
          <ol id="list">
            {params.row.message ? (
              params.row.message.map((message: any) => (
                <li key={message.id}>{message.job_description}</li>
              ))
            ) : (
              <div>No messages</div>
            )}
          </ol>
        </>
      )
    },
    {
      field: 'is_active',
      headerName: 'Status',
      width: 160,
      renderCell: (params: any) => (
        <Box id="switch">
          <Switch
            value={params.value}
            onChange={(event) => {
              setChecked(event.target.checked);
            }}
          />
        </Box>
      )
    }
  ];
  const handlePaginationClientTab = (e: any, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (clientPostData.length === 0) {
      setClientPostData(clientsData.codersClientTab);
    }
  }, []);

  return (
    <>
      <Box className="job-posting-tables">
        <Box id="clientTable_Data">
          <DataGrid
            rows={clientPostData}
            columns={columnClientData}
            autoHeight
            hideFooterPagination={true}
            hideFooter={true}
            rowHeight={72}
          />
        </Box>
      </Box>

      <Box mt={'30px'}>
        <Pagination
          defaultOption={{ label: 5, value: 5 }}
          options={[{ label: 5, value: 5 }]}
          pageCount={10}
          currentPage={currentPage}
          handlePageChange={handlePaginationClientTab}
        />
      </Box>
    </>
  );
};

export default ClientData;
