// ParentComponent.jsx
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography
} from '@mui/material';
import TableComponent from './Table';
import { admin_coder_data } from '../../../constant';
import { Codercolumns } from './Coulmn';
import { CSVLink } from 'react-csv';
import { Pagination } from '../../../../Common';
import CoderAdminProfile from '../CoderPersonalDetails';
import AdminCoderSkills from '../AdminCoderSkill';
import AdminCoderEducationDetails from '../AdminCoderEducation';
import AdminCoderPayement from '../AdminCoderPayement';
import { ICoderData } from '../../../type';
import CoderTable from '../../../CoderTable';

const CoderJobProposal = () => {
  const columns = Codercolumns;
  const data = useMemo(() => admin_coder_data, []);
  const [location, setLocation] = useState('USA');
  const [filterValue, setFilterValue] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState<ICoderData>();

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    if (activeTab === 1) {
      setFilterValue(data); // Reset the filter to show all data
    }
  }, [activeTab]);

  const handleDataFiltering = (event: SelectChangeEvent | number) => {
    let filterCriteria = '';
    let newSelectedLocation = '';

    if (typeof event === 'number') {
      // Handle tab click
      setActiveTab(event);
      switch (event) {
        case 1:
          filterCriteria = 'All';
          break;
        case 2:
          filterCriteria = 'ACTIVE';
          break;
        case 3:
          filterCriteria = 'INACTIVE';
          break;
        default:
          filterCriteria = 'All';
      }
      newSelectedLocation = location; // Use the current state of location
    } else {
      // Handle location change
      newSelectedLocation = event.target.value as string;
      setLocation(newSelectedLocation);
      filterCriteria = activeTab === 1 ? 'All' : activeTab === 2 ? 'ACTIVE' : 'INACTIVE';
    }

    const filteredData = data.filter((row: any) => {
      const isActive =
        filterCriteria === 'All' ||
        (filterCriteria === 'ACTIVE' && row.is_active) ||
        (filterCriteria === 'INACTIVE' && !row.is_active);

      let isInLocation = true;
      if (newSelectedLocation === 'ALL') {
        isInLocation = true;
      } else if (newSelectedLocation === 'USA') {
        isInLocation = row.country === 'USA';
      } else if (newSelectedLocation) {
        isInLocation = row.country !== 'USA';
      }

      return isActive && isInLocation;
    });

    setFilterValue(filteredData);
  };
  // ============== Pagination

  const pageCount = Math.ceil(filterValue.length / 3);
  const indexOfLastItem = currentPage * 3;
  const indexOfFirstItem = indexOfLastItem - 3;
  const currentCoders =
    filterValue.length > 0 ? filterValue.slice(indexOfFirstItem, indexOfLastItem) : [];

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const handleRowSelected = (row: ICoderData) => {
    setSelectedRow(row);
    // Additional logic with the selected row
  };
  const pageOption = [
    { label: 3, value: 3 },
    { label: 6, value: 6 },
    { label: 9, value: 9 }
  ];
  const paginationProps = {
    defaultOption: pageOption[0],
    options: pageOption,
    pageCount,
    currentPage,
    handlePageChange
  };
  const tableProps = {
    columns,
    data: currentCoders
  };

  return (
    <>
      <Box display={'flex'} flexDirection={'column'}>
        <Paper className="coder-table-main-container">
          <Box className="coderTable-container">
            <Box p={'24px'} textAlign={'left'}>
              <Typography variant="h3" mb={'24px'}>
                Coders
              </Typography>
              <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                <Box className="coderTabel-btn-grp">
                  <FormControl fullWidth>
                    <Select
                      className="select-admin-coder"
                      labelId="location-select-label"
                      id="location-select"
                      placeholder="USA"
                      value={location}
                      onChange={handleDataFiltering}>
                      <MenuItem value="ALL">All</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                      <MenuItem value="ANYWHERE">ANYWHERE</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <CSVLink filename="transaction-history.csv" data={'csvData'}>
                  <Button className="btn-dwnld-csv-admin" variant="contained">
                    Downlod CSV
                  </Button>
                </CSVLink>
              </Box>
            </Box>
            <Grid container>
              <Grid item xs={8}>
                {' '}
                <Box
                  className="tabs-filter-admin-coders"
                  display={'flex'}
                  justifyContent={'space-around'}
                  borderColor={'divider'}>
                  <Button
                    fullWidth
                    disableRipple={true}
                    className="tabs_button_group"
                    size={'large'}
                    variant={activeTab === 1 ? 'outlined' : 'text'}
                    onClick={() => handleDataFiltering(1)}>
                    All
                  </Button>
                  <Button
                    fullWidth
                    disableRipple={true}
                    className="tabs_button_group"
                    variant={activeTab === 2 ? 'outlined' : 'text'}
                    onClick={() => handleDataFiltering(2)}>
                    Active
                  </Button>
                  <Button
                    fullWidth
                    disableRipple={true}
                    className="tabs_button_group"
                    variant={activeTab === 3 ? 'outlined' : 'text'}
                    onClick={() => handleDataFiltering(3)}>
                    Inactive
                  </Button>
                </Box>
                <Divider />
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <TextField className="date-feild"> </TextField>
                </Box>
              </Grid>
            </Grid>
            <Box>
              <TableComponent onRowSelected={handleRowSelected} {...tableProps} />
            </Box>
          </Box>
        </Paper>
        {data.length > 0 ? (
          <Box className="pagination-admin">
            <Pagination {...paginationProps} />
          </Box>
        ) : null}
        {selectedRow && Object.keys(selectedRow).length && (
          <Paper className="coder-detail-second-container ">
            <Box className="coder-data-container">
              <CoderAdminProfile selectedRow={selectedRow} />
            </Box>
            <Divider className="admin-seprater" />
            <Box p={'0px 24px'}>
              <AdminCoderSkills selectedRow={selectedRow} />
            </Box>
            <Box>
              <AdminCoderEducationDetails selectedRow={selectedRow} />
            </Box>
            <Box>
              <AdminCoderPayement data={selectedRow} />
            </Box>
            <CoderTable />
          </Paper>
        )}
      </Box>
    </>
  );
};

export default CoderJobProposal;
