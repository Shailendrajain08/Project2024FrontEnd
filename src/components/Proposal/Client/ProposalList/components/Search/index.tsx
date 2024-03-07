import React from 'react';
import { Box, FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import { SearchSvg } from '../../../../../../assets/svg';

const SearchBar: React.FC<TSearchBar> = ({ onSearch }) => {
  const handleInputChange = (e: any) => {
    setTimeout(() => {
      onSearch(e.target.value);
    }, 1000);
  };

  return (
    <Box className="">
      <FormControl variant="outlined" className="" size="small" fullWidth>
        <OutlinedInput
          id="outlined-adornment-password"
          startAdornment={
            <InputAdornment position="start">
              <SearchSvg />
            </InputAdornment>
          }
          placeholder="Search"
          onChange={handleInputChange}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
