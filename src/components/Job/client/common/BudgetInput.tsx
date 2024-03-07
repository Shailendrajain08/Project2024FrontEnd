import { Box, InputAdornment, TextField } from '@mui/material';

interface IBudgetProp {
  id: string;
  name: string;
  label?: string;
  placeholder: string;
  defaultValue: any;
  endAdornmentLabel?: any;
  setFormData: (name: string, value: any) => void;
}

const BudgetInput = ({
  id,
  label,
  name,
  placeholder,
  defaultValue,
  endAdornmentLabel,
  setFormData
}: IBudgetProp) => {
  return (
    <Box>
      <TextField
        id={id}
        type="text"
        label={label}
        placeholder={placeholder}
        size="medium"
        fullWidth
        name={name}
        defaultValue={defaultValue}
        onChange={(e: any) => setFormData(e.target.name, e.target.value)}
        InputProps={{
          endAdornment: endAdornmentLabel ? (
            <InputAdornment position="start">{endAdornmentLabel}</InputAdornment>
          ) : null
        }}
      />
    </Box>
  );
};

export default BudgetInput;
