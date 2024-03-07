import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { CSVLink } from 'react-csv';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TabListsCommon from '../common/TabListsCommon';
import { Pagination } from '../../../../Common';
import './index.css';

const menuList = [
  { label: 'All', value: 'ALL' },
  { label: 'USA', value: 'USA' },
  { label: 'ANYWHERE', value: 'ANYWHERE' }
];

const AdminJobTable = () => {
  const [location, setLocation] = useState('USA');
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const pageOption = [
    { label: 3, value: 3 },
    { label: 6, value: 6 },
    { label: 9, value: 9 }
  ];
  const paginationProps: any = {
    defaultOption: pageOption[0],
    options: pageOption,
    currentPage,
    handlePageChange
  };
  const handleDataFiltering = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  return (
    <Box className="Admin-Manage_table-main-container">
      <Box className="Admin-job--container--section">
        <Typography variant="h3" className="Admin-table--heading-section">
          Jobs
        </Typography>
        <Box className="admin-download-csv--btn">
          <Box>
            <FormControl fullWidth>
              <Select
                className="select-admin-option"
                labelId="location-select-label"
                id="location-select"
                placeholder="USA"
                value={location}
                onChange={handleDataFiltering}>
                {menuList.map((item, id) => {
                  return (
                    <MenuItem key={id} value={item.value}>
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <CSVLink filename="transaction-history.csv" data={'csvData'}>
            <Button className="btn-dwnld-csv-admin" variant="contained">
              Downlod CSV
            </Button>
          </CSVLink>
        </Box>
        <Box className="admin--mange--tab-container">
          <TabListsCommon />
          <Box className="admin-calendar--section">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker orientation="portrait" />
            </LocalizationProvider>
          </Box>
        </Box>
      </Box>
      <Box className="pagination--wrapper">
        <Pagination {...paginationProps} />
      </Box>
    </Box>
  );
};

export default AdminJobTable;
