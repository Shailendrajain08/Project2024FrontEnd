import React, { useState } from 'react';
import { Tabs } from '../../../Common';
import { Box, Switch, Typography, Link, Avatar } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IClientMockData, clientMockData } from './types';
import { Pagination } from '../../../Common';
import { LinkedinLogo } from '../../../../assets/svg/LinkedInLogo';
import IndividualClientDetail from '../ClientDetail';
import DatePickerValue from './DatePicker';
import { Dayjs } from 'dayjs';
import constant from '../../../../constants/constant.json';
import paginationOptions from '../../../../constants/PaginationOption';
import './index.css';

const ClientsTable: React.FC<
  ITable & { setCSVData: React.Dispatch<React.SetStateAction<any[]>> }
> = ({ data, setCSVData }) => {
  const [switchStates, setSwitchStates] = useState(
    data.map((job: any) => ({ id: job.linkedin_url, checked: job.is_active }))
  );

  const [selectedClient, setSelectedClient] = useState<IClientMockData | null>(null);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [clickedRows, setClickedRows] = useState<{ [key: string]: boolean }>({});

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const handleNameClick = (rowData: IClientMockData) => {
    setSelectedClient(rowData);
    setClickedRows({ [rowData.linkedin_url]: true });
  };

  const handleChange = (id: string) => {
    setSwitchStates((prevSwitchStates) =>
      prevSwitchStates.map((switchState) =>
        switchState.id === id ? { ...switchState, checked: !switchState.checked } : switchState
      )
    );
  };

  const column1: GridColDef[] = [
    {
      field: 'full_name',
      headerName: 'Name',
      width: 156,
      renderCell: (params: any) => {
        const { first_name, last_name } = params.row;
        const clientName = last_name ? `${first_name} ${last_name}` : first_name;
        const isClicked = clickedRows[params.row.linkedin_url];
        return (
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNameClick(params.row);
            }}
            className={`${isClicked ? 'client-name--clicked' : 'client-name--not-clicked'}`}
            variant="caption"
            underline="none">
            {clientName}
          </Link>
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
      field: 'company_name',
      headerName: 'Company',
      width: 154,
      renderCell: (params: any) => {
        const company = params?.row?.company_name;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {company}
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
      field: 'company_website',
      headerName: 'Website',
      width: 154,
      renderCell: (params: any) => {
        const website = params.row.company_website;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {website}
          </Typography>
        );
      }
    },

    {
      field: 'country',
      headerName: 'Country',
      width: 154,
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
      width: 154,
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
      field: 'linkedin_url',
      headerName: 'Linkedin',
      width: 154,
      renderCell: (params: any) => {
        const linkedinId = params.row.linkedin_url;
        return (
          <Link href={linkedinId} target="_blank" rel="noopener noreferrer">
            <Avatar className="client-table---linkedin--logo">
              <LinkedinLogo />
            </Avatar>
          </Link>
        );
      }
    },

    {
      field: 'is_active',
      headerName: 'Status',
      renderCell: (params: any) => (
        <Switch
          size="small"
          checked={
            switchStates.find((switchState) => switchState.id === params.row.linkedin_url)
              ?.checked || false
          }
          onChange={() => handleChange(params.row.linkedin_url)}
        />
      )
    },

    {
      field: 'date_joined',
      headerName: 'Onboarding Date',
      width: 154,
      headerClassName: 'custom-header',
      renderCell: (params: any) => {
        const date = new Date(params.row.date_joined);
        const formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {formattedDate}
          </Typography>
        );
      }
    }
  ];

  const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  // Use setCSVData to update the CSV data when needed
  const getCsvData = () => {
    setCSVData(paginatedData);
    return paginatedData;
  };

  return (
    <>
      <Box className="clients---table">
        <Box className="clients---table--divider-box" />

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

      <Box>{selectedClient && <IndividualClientDetail client={selectedClient} />}</Box>
    </>
  );
};

export default ClientsTable;

const tabList = [
  { id: 1, label: 'All' },
  { id: 2, label: 'Active' },
  { id: 3, label: 'Inactive' }
];

export const ClientTableTab: React.FC<{
  setCSVData: React.Dispatch<React.SetStateAction<any[]>>;
}> = ({ setCSVData }) => {
  const [value, setValue] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);
  };

  const getCsvData = () => {
    // Use the selected data based on the active tab
    const data = value === 0 ? clientMockData : value === 1 ? activeData : inactiveData;
    setCSVData(data);
    return data;
  };

  // Filter data based on is_active condition
  const activeData = clientMockData.filter((item) => item.is_active);
  const inactiveData = clientMockData.filter((item) => !item.is_active);

  return (
    <>
      <Box className="client---tablist" display={'flex'}>
        <Tabs tabList={tabList} callBackFnc={handleChange}>
          {value === 0 && <ClientsTable data={clientMockData} setCSVData={setCSVData} />}{' '}
          {value === 1 && <ClientsTable data={activeData} setCSVData={setCSVData} />}{' '}
          {value === 2 && <ClientsTable data={inactiveData} setCSVData={setCSVData} />}{' '}
        </Tabs>
        <Box className="client-table-date-picker-container">
          <DatePickerValue onDateChange={handleDateChange} />
        </Box>
      </Box>
    </>
  );
};

interface ITable {
  data: IClientMockData[];
}
