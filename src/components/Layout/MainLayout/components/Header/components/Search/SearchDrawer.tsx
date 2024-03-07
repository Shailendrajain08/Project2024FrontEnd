import React, { useState, ChangeEvent } from 'react';
import {
  Box,
  Chip,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
  Container
} from '@mui/material';
import { SearchSvg, CloseIconSvg } from '../../../../../../../assets/svg';
import './index.css';
import { TSearchBoxDrawer } from '../../type';

const SearchBoxDrawer: React.FC<TSearchBoxDrawer> = ({ setShowSearchDrawer }) => {
  const [query, setQuery] = useState('');
  const recentSearchList = ['DataEntry', 'React'];
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleClose = () => {
    if (query) {
      setQuery('');
    } else {
      setShowSearchDrawer(false);
    }
  };
  return (
    <Container>
      <Box className="mobile-search-bar--top-box" onClick={handleClose}>
        <CloseIconSvg />
      </Box>
      <Box className="search-drawer--search-box">
        <FormControl variant="outlined" className="search-box-drawer--form-control">
          <OutlinedInput
            id="outlined-adornment-password"
            startAdornment={
              <InputAdornment position="start">
                <SearchSvg />
              </InputAdornment>
            }
            placeholder="Search"
            onChange={handleChange}
          />
        </FormControl>
      </Box>
      <Box mt={2}>
        <Typography variant="caption">Recent Search</Typography>
        <Box mt={2}>
          {recentSearchList.map((list: string) => {
            return <Chip key={list} label={list} className="recent-search--chip" />;
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default SearchBoxDrawer;
