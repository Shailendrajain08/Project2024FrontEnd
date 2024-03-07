import React, { useState } from 'react';
import { Box, Typography, TextField, Autocomplete as MUIAutocomplete, Chip } from '@mui/material';
import { UseFormSetValue, UseFormClearErrors, FieldErrors, FieldValues } from 'react-hook-form';
import '../index.css';
interface IAutocomplete {
  options: string[];
  label?: string;
  setValue: UseFormSetValue<FieldValues>;
  name: string;
  title?: string;
  placeholder?: string;
  defaultValue?: string[];
  error?: FieldErrors;
  size?: 'small' | 'medium';
  clearErrors?: UseFormClearErrors<FieldValues>;
  isSetChips?: boolean;
  setFormData?: (name: string, value: any) => void | undefined;
}

const Autocomplete = ({
  options,
  label,
  setValue,
  name,
  title,
  placeholder,
  defaultValue = [],
  error = {},
  clearErrors,
  size,
  isSetChips,
  setFormData
}: IAutocomplete) => {
  const [selectedOptions, setSelectedOptions] = useState(defaultValue);
  const [customInputValue, setCustomInputValue] = useState('');
  const handleOptionChange = (event: React.ChangeEvent<any> | null, newValue: any) => {
    setSelectedOptions(newValue);
    if (isSetChips && setFormData) {
      setFormData(name, newValue);
    } else {
      setValue(name, newValue);
    }
    if (newValue.length > 0 && clearErrors) clearErrors(name);
  };

  const handleInputChange = (event: React.ChangeEvent<any>, newInputValue: string) => {
    setCustomInputValue(newInputValue);
  };

  return (
    <Box className="autocomplete-container" marginTop={2}>
      {title && (
        <Typography variant="h6" textAlign="start" marginBottom="10px">
          {title}
        </Typography>
      )}
      <MUIAutocomplete
        multiple
        value={selectedOptions}
        onChange={handleOptionChange}
        inputValue={customInputValue}
        onInputChange={handleInputChange}
        options={options}
        freeSolo
        renderInput={(params: any) => (
          <TextField
            {...params}
            label={label}
            size={size}
            placeholder={placeholder}
            error={!!error[name]}
            helperText={error[name]?.message}
            InputProps={{
              ...params.InputProps,
              endAdornment: <React.Fragment>{params.InputProps.endAdornment}</React.Fragment>
            }}
          />
        )}
      />
      <Box className="selected--chips" textAlign="start" paddingLeft={2}>
        {selectedOptions.map((option: string) => (
          <Chip
            className="selected-chip"
            key={option}
            label={option}
            onDelete={() =>
              handleOptionChange(
                null,
                selectedOptions.filter((item) => item !== option)
              )
            }
          />
        ))}
      </Box>
    </Box>
  );
};

export default Autocomplete;
