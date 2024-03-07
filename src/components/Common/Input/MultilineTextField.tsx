import React from 'react';
import { TextField, Typography, FormHelperText } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';

interface IMultilineTextField {
  name: string;
  defaultValue?: string;
  label?: string;
  id: string;
  rows?: number; // Add rows prop
  title?: string;
  register: UseFormRegister<any>;
  error?: any;
  helperText?: string;
  placeholder?: string;
  size?: 'small' | 'medium';
}

const MultilineTextField: React.FC<IMultilineTextField> = ({
  name,
  defaultValue,
  label,
  id,
  rows = 6, // Default value for rows
  title,
  register,
  error = {},
  helperText,
  placeholder,
  size
}) => {
  return (
    <>
      {title && (
        <Typography variant="h6" textAlign="start" marginBottom="10px">
          {title}
        </Typography>
      )}

      <TextField
        multiline
        rows={rows}
        fullWidth
        variant={'outlined'}
        label={label}
        size={size}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        error={!!error[name]}
        {...register(name)}
      />

      {error[name]?.message ? (
        <FormHelperText sx={{ textAlign: 'end' }}>{error[name]?.message}</FormHelperText>
      ) : (
        <>
          {helperText && <FormHelperText sx={{ textAlign: 'start' }}>{helperText}</FormHelperText>}
        </>
      )}
    </>
  );
};

export default MultilineTextField;
