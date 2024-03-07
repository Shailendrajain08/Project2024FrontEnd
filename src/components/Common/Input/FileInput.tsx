import { Fragment, useState, ReactNode } from 'react';
import { TextField, Box, FormHelperText } from '@mui/material';
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormGetValues,
  UseFormClearErrors,
  FieldValues
} from 'react-hook-form';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import '../index.css';

interface IFileInput {
  register: UseFormRegister<any>;
  name: string;
  setValue: UseFormSetValue<any>;
  children: ReactNode;
  getValues: UseFormGetValues<any>;
  defaultValue?: any;
  error?: any;
  clearErrors?: UseFormClearErrors<any>;
  isMultipleFile?: boolean;
  label?: string;
}

const onInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  const element = event.target as HTMLInputElement;
  element.value = '';
};

const FileInput = ({
  name,
  setValue,
  children,
  defaultValue = [],
  error = {},
  getValues,
  clearErrors,
  isMultipleFile = true,
  label
}: IFileInput) => {
  const [files, setFiles] = useState<any[]>(defaultValue);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file && isMultipleFile) {
      setFiles([...files, file]);
      const value: any[] = getValues(name) || [];
      value.push(file);
      setValue(name, value);
    }
    if (file && !isMultipleFile) {
      setFiles([file]);
      setValue(name, file);
    }
  };

  const handleRemove = (file: any) => {
    const filterValue = files.filter((item) => item !== file);
    setFiles(filterValue);
    setValue(name, filterValue);
    if (clearErrors) clearErrors(name);
  };
  return (
    <Fragment>
      <TextField
        sx={{ display: 'none' }}
        id={`${name}-file`}
        type="file"
        label={label}
        onChange={handleFileChange}
        onClick={onInputClick}
        error={!!error[name]}
        helperText={error[name]?.message}
      />
      <label htmlFor={`${name}-file`}>{children}</label>
      {files.length > 0 &&
        files.map((el: any, i: number) => {
          return (
            <Box
              component={isMultipleFile ? 'div' : 'span'}
              marginTop={1}
              key={i}
              sx={{ cursor: 'pointer' }}>
              <FilePresentIcon
                sx={{ marginRight: 1, marginLeft: 1 }}
                className="margin-bottom_-6"
              />
              <Box component="span" color={'#ccc'} fontStyle={'italic'} marginRight={2}>
                {el?.name}
              </Box>
              <Box
                component="span"
                color={'red'}
                fontSize={'13px'}
                onClick={() => {
                  handleRemove(el);
                }}>
                {'X'}
              </Box>
            </Box>
          );
        })}
      {error[name]?.message ? (
        <FormHelperText className="error-text">{error[name]?.message}</FormHelperText>
      ) : null}
      {error[name]?.length > 0 && error[name]?.some((d: any) => d.message) ? (
        <Fragment>
          {error[name].map((el: any, i: number) => {
            return (
              <FormHelperText className="error-text" key={i}>
                {`${files[i]?.name} is ${el?.message}`}
              </FormHelperText>
            );
          })}
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default FileInput;
