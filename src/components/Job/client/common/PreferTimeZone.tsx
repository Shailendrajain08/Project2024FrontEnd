import { useEffect, useState } from 'react';
import { UseFormSetValue, FieldValues } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@mui/material';
import '../index.css';

interface IPreferTimeZone {
  options: any;
  label?: string;
  setValue: UseFormSetValue<FieldValues>;
  name: string;
  title?: string;
  placeholder?: string;
  defaultValue?: string[];
  error?: any;
  size?: 'small' | 'medium';
  clearErrors?: any;
}

const PreferTimeZone = ({
  options,
  label,
  setValue,
  name,
  title,
  defaultValue,
  error = {},
  clearErrors,
  size
}: IPreferTimeZone) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [checkedDataList, setCheckedDataList] = useState<any>([]);
  // const [timezoneList, setTimezoneList] = useState<any>(options);

  const timezones = searchQuery
    ? options.filter((item: any) => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      })
    : options;

  const handleSearch = () => {
    // You can perform the search operation or trigger any action here
    console.log('Search query:', searchQuery);
  };

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  const handleToggle = (value: any) => () => {
    const checkedVal = checkedDataList.find((el: any) => el.id === value.id);
    if (checkedVal) {
      const filterData = checkedDataList.filter((data: any) => data.id !== checkedVal.id);
      setCheckedDataList(filterData);
      setValue(name, filterData);
    } else {
      const updatedDataList = [...checkedDataList, value];
      setCheckedDataList(updatedDataList);
      setValue(name, updatedDataList);
    }
  };
  useEffect(() => {
    clearErrors(name);
  }, [checkedDataList, clearErrors, name]);

  return (
    <Box className="prefertime-container">
      <TextField
        name={name}
        label={label}
        variant="outlined"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        error={error && !!error[name]}
        helperText={error[name]?.message}
        size={size}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ pr: 1 }}>
              <IconButton color="primary" onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      {searchQuery && (
        <List className="time-zone-list">
          {title && <ListSubheader className="list-sub-heading">{title}</ListSubheader>}
          {timezones.map((value: any, id: any) => {
            const labelId = `checkbox-list-label-${id}`;

            return (
              <ListItem key={id} disablePadding>
                <ListItemButton onClick={handleToggle(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checkedDataList.some((el: any) => el.id === value.id)}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText
                    className="timezone--list"
                    id={labelId}
                    primary={`${value.name + 1}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );
};

export default PreferTimeZone;
