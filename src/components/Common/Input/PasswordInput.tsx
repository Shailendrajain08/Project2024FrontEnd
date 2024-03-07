import { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { UseFormRegister } from 'react-hook-form';

interface PasswordInputProps {
  label?: string;
  defaultValue?: string | number;
  name: string;
  variant?: string;
  id: string;
  register: UseFormRegister<any>;
  isRequired?: boolean;
  error?: any;
  errorMessage?: string;
  title?: string;
  placeholder?: string;
  inputProps?: any;
}

const PasswordInput = ({
  defaultValue = '',
  name,
  label,
  register,
  isRequired = false,
  id,
  error = {},
  placeholder
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      id={id}
      type={showPassword ? 'text' : 'password'}
      label={label}
      placeholder={placeholder}
      fullWidth
      defaultValue={defaultValue}
      {...register(name, { required: isRequired })}
      error={!!error[name]}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

export default PasswordInput;
