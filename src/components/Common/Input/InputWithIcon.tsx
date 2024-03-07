import React from 'react';
import { IconButton, InputAdornment, TextField, Box, Typography } from '@mui/material';
import '../index.css';
import { UseFormRegister } from 'react-hook-form';

interface InputWithIconProps {
  type: string;
  id: any;
  name: string;
  placeholder?: string;
  icon?: any;
  label: string;
  size?: 'small' | 'medium';
  LabelclassName?: string;
  errors?: any;
  defaultValue?: string;
  register: UseFormRegister<any>;
  getValues: any;
  setFocus: any;
  disable?: boolean;
}

const InputWithIcon = ({
  type,
  id,
  name,
  placeholder,
  icon,
  label,
  size,
  LabelclassName,
  register,
  getValues,
  defaultValue,
  setFocus,
  errors,
  disable
}: InputWithIconProps) => {
  const [ishow, setIshShow] = React.useState(false);
  const handleFocus = (isTouched: boolean) => {
    setIshShow(true);
    if (isTouched) setFocus(name);
  };
  const handleBlur = () => {
    const value = getValues(name);
    if (!value) {
      setIshShow(false);
    }
  };
  return (
    <TextField
      id={id}
      type={type}
      placeholder={placeholder}
      fullWidth
      size={size}
      disabled={disable}
      helperText={errors[name]?.message}
      onFocus={() => handleFocus(false)}
      {...register(name, {
        onBlur: handleBlur
      })}
      className="digital-presence-input"
      error={!!errors && !!errors[name]}
      sx={{ p: 0 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" className={ishow ? 'display_none' : 'inputAdorement'}>
            <Box
              sx={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}
              onClick={() => handleFocus(true)}>
              <IconButton sx={{ p: '0' }}>{icon}</IconButton>
              <Typography component="label" sx={{ p: '0' }} className={LabelclassName}>
                {label}
              </Typography>
            </Box>
          </InputAdornment>
        )
      }}
    />
  );
};

export default InputWithIcon;
