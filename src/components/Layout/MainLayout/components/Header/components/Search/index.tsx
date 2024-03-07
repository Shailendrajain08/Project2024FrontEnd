import React, { Fragment, useState } from 'react';
import {
  Box,
  FormControl,
  InputAdornment,
  List,
  ListItem,
  OutlinedInput,
  Typography,
  useMediaQuery
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDownSvg, SearchSvg } from '../../../../../../../assets/svg';
import './index.css';
import { searchOptionList } from '../../constant';
import { TSearchBox, TSearchOptionList } from '../../type';

const SearchBox: React.FC<TSearchBox> = ({ role = 'CLIENT', setShowSearchDrawer }) => {
  const isTabletView = useMediaQuery('(max-width:1024px)');
  const [showOptionList, setShowOptionList] = useState(false);
  const initialValue = role === 'CODER' ? searchOptionList[1].label : searchOptionList[0].label;
  const [value, setValue] = useState(initialValue);
  const handleSelect = (value: string) => {
    setValue(value);
    setShowOptionList(false);
  };
  return (
    <Fragment>
      {!isTabletView ? (
        <FormControl variant="outlined" className="search-box">
          <OutlinedInput
            className="search-input"
            id="outlined-adornment-password"
            startAdornment={
              <InputAdornment position="start">
                <SearchSvg />
              </InputAdornment>
            }
            placeholder="Search"
            endAdornment={
              <InputAdornment position="end">
                <Box className="search-end-box" onClick={() => setShowOptionList(!showOptionList)}>
                  <Box className="option-select">
                    <Typography variant="body2">{value}</Typography>
                    <ArrowDownSvg />
                  </Box>
                </Box>
              </InputAdornment>
            }
          />
          {showOptionList && (
            <Box className="option-box">
              <List>
                {searchOptionList.map((option: TSearchOptionList, i: number) => {
                  return (
                    <ListItem key={i} onClick={() => handleSelect(option.value)}>
                      {option.label}
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          )}
        </FormControl>
      ) : (
        <Box className="search--box-search-icon" onClick={() => setShowSearchDrawer(true)}>
          {' '}
          <SearchIcon />
        </Box>
      )}
    </Fragment>
  );
};

export default SearchBox;
