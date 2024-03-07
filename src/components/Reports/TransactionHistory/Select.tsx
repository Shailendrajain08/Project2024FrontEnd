import { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { IFilterSelect } from '../type';

const FilterSelect = ({
  id,
  label,
  defaultValue = '',
  options,
  callbackFnc,
  clearvalues
}: IFilterSelect) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
    if (callbackFnc) callbackFnc(event.target.value, id);
  };

  useEffect(() => {
    if (clearvalues) {
      setSelectedOption('');
    }
  }, [clearvalues]);

  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        value={selectedOption}
        onChange={handleChange}
        labelId={id}
        label={label}
        variant="outlined"
        defaultValue={defaultValue}
        sx={{ textAlign: 'start' }}>
        {options.map((option: any, i: number) => {
          return (
            <MenuItem value={option?.value} key={i}>
              {option?.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default FilterSelect;
