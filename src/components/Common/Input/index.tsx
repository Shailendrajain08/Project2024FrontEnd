import { Fragment } from 'react';
import { FormHelperText, InputAdornment, TextField, Typography } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import '../index.css';

interface InputProps {
  type: string;
  defaultValue?: string | number;
  name: string;
  label?: string;
  variant?: string;
  id: string;
  register: UseFormRegister<any>;
  isRequired?: boolean;
  error?: any;
  errorMessage?: string;
  title?: string;
  placeholder?: string;
  sxStyles?: any;
  inputAdornmentText?: string;
  endAdornmentLabel?: any;
  className?: string;
  style?: any;
  helperText?: string;
  inputProps?: any;
  size?: 'small' | 'medium';
  value?: any;
}

const Input = ({
  type,
  defaultValue = '',
  name,
  label,
  register,
  isRequired = false,
  id,
  error = {},
  title,
  placeholder,
  sxStyles = {},
  size,
  inputAdornmentText = '',
  endAdornmentLabel,
  helperText,
  className,
  inputProps = {}
}: InputProps) => {
  return (
    <Fragment>
      {title && (
        <Typography variant="h6" textAlign="start" marginBottom="10px">
          {title}
        </Typography>
      )}
      <TextField
        id={id}
        type={type}
        label={label}
        placeholder={placeholder}
        size={size}
        fullWidth
        className={className}
        defaultValue={defaultValue}
        {...register(name, { required: isRequired })}
        error={!!error[name]}
        helperText={error[name]?.message}
        InputProps={{
          startAdornment: inputAdornmentText ? (
            <InputAdornment position="start" sx={{ pr: 1 }}>
              {inputAdornmentText}
            </InputAdornment>
          ) : null,
          endAdornment: endAdornmentLabel ? (
            <InputAdornment position="start">{endAdornmentLabel}</InputAdornment>
          ) : null
        }}
      />
      {helperText && <FormHelperText className="helper-text">{helperText}</FormHelperText>}
    </Fragment>
  );
};

export default Input;
