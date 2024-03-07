import React, { Fragment, useState } from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  ListSubheader,
  Typography
} from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import './index.css';

const FilterFacet: React.FC<TFilterFacet> = ({ facetData, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<any>([]);
  const handleFilterChange = (filter: any) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((selectedFilter: any) => selectedFilter !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <Box ml={18.75} mr={6.875}>
      <Box className="filter-title-box">
        <Typography variant="h3">Filter By</Typography>
        <FilterListOutlinedIcon />
      </Box>
      <Box textAlign={'start'}>
        <FormControl className="filter-facet-form-control">
          {facetData.map((option: any) => {
            return (
              <Fragment key={option?.label}>
                <ListSubheader className="filter-facet-label">{option?.label}</ListSubheader>
                <FormGroup className="filter-facet--form-group">
                  {option.data.map((value: any) => (
                    <Fragment key={value.id}>
                      <FormControlLabel
                        key={value.id}
                        control={
                          <Checkbox
                            checked={selectedFilters.includes(value?.category)}
                            onChange={() => handleFilterChange(value?.category)}
                          />
                        }
                        label={
                          <Box display={'flex'} columnGap={1}>
                            <Typography>{value?.category}</Typography>
                            {value?.count && (
                              <Typography className="filter-facet--count">
                                {value?.count}
                              </Typography>
                            )}
                          </Box>
                        }
                      />
                    </Fragment>
                  ))}
                </FormGroup>
              </Fragment>
            );
          })}
        </FormControl>
      </Box>
    </Box>
  );
};

export default FilterFacet;
