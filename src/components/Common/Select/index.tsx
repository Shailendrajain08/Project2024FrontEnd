import {
  Box,
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
  FormHelperText
} from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import './index.css';

interface OptionI {
  [key: string]: string | number;
}
interface SelectProps {
  defaultValue?: string;
  options: OptionI[];
  name: string;
  label?: string;
  variant?: string;
  id: string;
  register: UseFormRegister<any>;
  isRequired?: boolean;
  error?: any;
  size?: 'small' | 'medium';
  className?: string;
  style?: any;
  inputProps?: any;
}

const Select = ({
  options,
  defaultValue = '',
  name,
  label,
  register,
  id,
  error = {},
  size = 'medium'
}: SelectProps) => {
  return (
    // sx={{ minWidth: 120 }} marginBottom={2}
    <Box className="select-container">
      <FormControl fullWidth size={size} error={Boolean(error[name]?.message)}>
        <InputLabel id={id} className="select-label">
          {label}
        </InputLabel>
        <MUISelect
          labelId={id}
          label={label}
          variant="outlined"
          className="select-field"
          fullWidth
          defaultValue={defaultValue}
          size={size}
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          {...register(name)}>
          {options.map((option, i) => {
            return (
              <MenuItem value={option?.value} key={i}>
                {option?.label}
              </MenuItem>
            );
          })}
        </MUISelect>
        {error[name]?.message ? <FormHelperText> {error[name]?.message}</FormHelperText> : null}
      </FormControl>
    </Box>
  );
};

export default Select;
