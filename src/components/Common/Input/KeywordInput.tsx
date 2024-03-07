import React, { Fragment } from 'react';
import { TextField, Typography, Box } from '@mui/material';
import { UseFormRegister, UseFormGetValues, FieldValues } from 'react-hook-form';
import '../index.css';

interface IKeywordInput {
  type: string;
  defaultValue?: string;
  name: string;
  label?: string;
  variant?: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  isRequired?: boolean;
  error?: any;
  errorMessage?: string;
  title?: string;
  getValues: UseFormGetValues<FieldValues>;
}

const KeywordInput = ({
  type,
  defaultValue = '',
  name,
  label,
  register,
  getValues,
  isRequired,
  id,
  error,
  title
}: IKeywordInput) => {
  const [value, setValue] = React.useState<any>([]);

  const handleAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const inputValue = getValues(name);
    if (e.key === 'Enter' && inputValue && value.length < 11) {
      setValue([...value, inputValue]);
    }
  };

  const handleRemove = (data: string) => {
    const filterValue = value.filter((d: string) => d !== data);
    setValue(filterValue);
  };
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
        variant="outlined"
        size="small"
        fullWidth
        {...register(name, { required: isRequired })}
        error={!!error[name]}
        helperText={error[name]?.message}
        defaultValue={defaultValue}
        onKeyPress={handleAdd}
      />
      {value.length > 0 && (
        <Fragment>
          <Box textAlign="start" margin="10px" marginTop="20px">
            {value.map((el: string, i: number) => {
              return (
                <Box key={i} component="span" className="keyword-input--text-box">
                  <Box component="span" paddingRight="10px">
                    {el}
                  </Box>
                  <Box
                    component="span"
                    className="keyword-remove"
                    onClick={() => {
                      handleRemove(el);
                    }}>
                    X
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

export default KeywordInput;
