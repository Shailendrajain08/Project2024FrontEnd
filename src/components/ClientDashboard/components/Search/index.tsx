import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputAdornment,
  List,
  ListItem,
  OutlinedInput,
  Typography
} from '@mui/material';
import { SearchSvg, ArrowDownSvg } from '../../../../assets/svg';
import './index.css';
import { handleDebounce } from '../../../../helper/utils';

const Search: React.FC<any> = ({ searchOptionList = [], onSearch }) => {
  const [showOptionList, setShowOptionList] = useState(false);
  const [query, setQuery] = useState('');
  const [value, setValue] = useState('All');
  const handleSelect = (value: any) => {
    setValue(value);
    setShowOptionList(false);
  };
  const debouncedSearch = handleDebounce(onSearch, 300);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempQuery = e.target.value;
    setQuery(tempQuery);
    debouncedSearch(tempQuery, 300);
  };
  return (
    <FormControl variant="outlined" className="client-dashboard--search-box">
      <OutlinedInput
        className="client-dashboard--search-input"
        id="outlined-adornment-password"
        startAdornment={
          <InputAdornment position="start">
            <SearchSvg />
          </InputAdornment>
        }
        placeholder="Search"
        onChange={handleChange}
        value={query}
        endAdornment={
          <InputAdornment position="end">
            <Box
              className="client-dashboard--search-end-box"
              onClick={() => setShowOptionList(!showOptionList)}>
              <Box className="client-dashboard--option-select">
                <Typography variant="body2">{value}</Typography>
                <ArrowDownSvg />
              </Box>
            </Box>
          </InputAdornment>
        }
      />
      {showOptionList && (
        <Box className="client-dashboard--option-list-box">
          <List>
            {searchOptionList.map((option: any, i: number) => {
              return (
                <ListItem key={i} onClick={() => handleSelect(option)}>
                  {option.label}
                </ListItem>
              );
            })}
          </List>
        </Box>
      )}
    </FormControl>
  );
};

export default Search;
