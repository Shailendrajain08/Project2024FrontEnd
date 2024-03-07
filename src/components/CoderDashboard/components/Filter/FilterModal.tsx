import React, { Fragment, useState } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  ListSubheader,
  Typography,
  Grid,
  Button
} from '@mui/material';
import { filterData } from '../../../../constants/dashboard';
import { CloseIconSvg } from '../../../../assets/svg';
import './index.css';

const FilterModal: React.FC<any> = ({ onClose, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<any>([]);
  const [selectedfilterData, setfilterData] = useState<any>([]);
  const handleFilterChange = (filter: any, key: string) => {
    filter.key = key;
    const updatedFilterData = selectedfilterData.includes(filter)
      ? selectedfilterData.filter((data: any) => data !== filter)
      : [...selectedfilterData, filter];
    setfilterData(updatedFilterData);
    const updatedFilters = selectedFilters.includes(filter.category)
      ? selectedFilters.filter((selectedFilter: any) => selectedFilter !== filter.category)
      : [...selectedFilters, filter.category];
    setSelectedFilters(updatedFilters);
  };

  const applyFilter = () => {
    onFilterChange(selectedfilterData);
    onClose();
  };
  return (
    <Box p={1}>
      {' '}
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box textAlign={'start'}>
          <FormControl className="">
            <Grid container>
              {filterData.map((option: any) => {
                return (
                  <Grid item xs={6} md={4} key={option?.label} textAlign={'start'}>
                    <Box className="filter-modal--list-sub-header-box">
                      <ListSubheader className="filter-modal--list-sub-header-text">
                        {option?.label}
                      </ListSubheader>
                    </Box>
                    <FormGroup className="">
                      {option.data.map((value: any) => (
                        <Fragment key={value.id}>
                          <FormControlLabel
                            key={value.id}
                            className="filter-modal--form-control-label"
                            control={
                              <Checkbox
                                checked={selectedFilters.includes(value?.category)}
                                onChange={() => handleFilterChange(value, option?.key)}
                              />
                            }
                            label={
                              <Box display={'flex'} columnGap={1}>
                                <Typography>{value?.category}</Typography>
                                {value?.count && (
                                  <Typography className="">{value?.count}</Typography>
                                )}
                              </Box>
                            }
                          />
                        </Fragment>
                      ))}
                    </FormGroup>
                  </Grid>
                );
              })}
            </Grid>
          </FormControl>
        </Box>
        <Box onClick={onClose}>
          <CloseIconSvg />
        </Box>
      </Box>
      <Box className="filter-modal--btn-box">
        <Button variant="contained" onClick={applyFilter}>
          Apply filters
        </Button>
      </Box>
    </Box>
  );
};

export default FilterModal;
