import React from 'react';
import { Box, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { SearchOutlinedIconSvg } from '../../../../assets/svg';
import './index.css';

const SearchBox: React.FC<any> = ({ onSearch }) => {
  const handleInputChange = (e: any) => {
    setTimeout(() => {
      onSearch(e.target.value);
    }, 1000);
  };
  return (
    <Box width={1}>
      <FormControl variant="outlined" className="coder-dashboard-search-box--form-control">
        <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          fullWidth
          size="small"
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlinedIconSvg />
            </InputAdornment>
          }
          label="Search"
          onChange={handleInputChange}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBox;
