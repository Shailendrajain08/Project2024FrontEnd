import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@mui/material';

const SortBySelect: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>(''); // State to track the selected sorting option

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortBy(event.target.value);
    // You can perform additional actions based on the selected sorting option
  };

  return (
    <Box>
      <Box className="coderTabel-btn-grp">
        <FormControl fullWidth>
          <InputLabel className="input-label-sort-by-invite-coder">Sort by</InputLabel>
          <Select
            className="select-admin-coder"
            labelId="location-select-label"
            label="Sort by"
            id="location-select"
            placeholder="Latest"
            value={sortBy}
            onChange={handleSortChange}>
            <MenuItem value="ALL">Latest</MenuItem>
            <MenuItem value="USA">Max-Hourly</MenuItem>
            <MenuItem value="ANYWHERE">Min-Hourly</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SortBySelect;
