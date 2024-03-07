import { Box, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CODERS_LIST } from '../../../CoderList/Mockups';
import './index.css';

import CoderCard from './FilteredCoder';
import SearchBar from './SearchCoder';
import SortBySelect from './Sort';
import FilterComponent from './FilteredOptionsSideBar';
import FilteredChips from './FilteredChipSelection';
import { useSelector } from 'react-redux';
import { Pagination } from '../../../Common';

const FilterCoder: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tech = useSelector((state: any) => state?.technology?.name);
  const [chipTech, setChipTech] = useState<any>();
  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
  };
  const itemsPerPage = 6;
  const availableCoder = CODERS_LIST.map((coder) => coder);
  const pageCount = Math.ceil(availableCoder.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const pageOption = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 15, value: 15 }
  ];
  const paginationProps = {
    defaultOption: pageOption[0],
    options: pageOption,
    pageCount,
    currentPage,
    handlePageChange
  };
  const currentCoders =
    availableCoder.length > 0 ? availableCoder?.slice(indexOfFirstItem, indexOfLastItem) : [];

  const handleDelete = (chipToDelete: string) => {
    setChipTech(chipTech.filter((skill: any) => skill !== chipToDelete));
  };

  useEffect(() => {
    setChipTech([tech]);
  }, [tech]);

  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <FilterComponent />
        </Grid>
        <Grid className="filter-coder-screen" item xs={9}>
          <Paper elevation={0} className="filterd-coder">
            <Box className="filter-coder-screen-box">
              <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                mt={'20px'}
                ml={'20px'}
                mr={'20px'}>
                <Box width={'548px'}>
                  <SearchBar />
                </Box>
                <Box className="sort_field">
                  <SortBySelect />
                </Box>
              </Box>
              <Box className="filtered_selected_chips">
                <FilteredChips skills={chipTech} onDelete={handleDelete} />
              </Box>
              {currentCoders.map((coder) => (
                <CoderCard key={coder.username} coder={coder} />
              ))}
            </Box>
          </Paper>
          <Box className="pagination_box">
            <Pagination {...paginationProps} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default FilterCoder;
