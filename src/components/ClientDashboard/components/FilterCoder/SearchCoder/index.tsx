import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    // Perform actions with the search term, e.g., store it in state, send it to a server, etc.
  };

  return (
    <Box className="invitecoder--search">
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search--input-invite-coder"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" className="invite-coder-search-icon">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    </Box>
  );
};

export default SearchBar;
