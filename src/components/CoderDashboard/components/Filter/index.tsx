import React from 'react';
import { Box, Chip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import './index.css';

const Filter: React.FC<any> = ({ showDialog }) => {
  return (
    <Box onClick={showDialog} className="advanced-filter--box">
      <Chip
        icon={<FilterListIcon />}
        label="Advance Filter"
        variant="outlined"
        className="filter--chip"
      />
    </Box>
  );
};

export default Filter;
