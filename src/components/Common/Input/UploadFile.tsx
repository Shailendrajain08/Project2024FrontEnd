import { Fragment, useState, ReactNode } from 'react';
import { TextField, Box, FormHelperText } from '@mui/material';
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormGetValues,
  UseFormClearErrors,
  FieldValues
} from 'react-hook-form';
import { CloseIcon, UploadFileIcon } from '../../../assets/svg';
import '../index.css';

interface UploadFile {
  register: UseFormRegister<FieldValues>;
  name: string;
  setValue: UseFormSetValue<FieldValues>;
  children: ReactNode;
  getValues: UseFormGetValues<FieldValues>;
  defaultValue?: any;
  error?: any;
  clearErrors?: UseFormClearErrors<FieldValues>;
  isMultipleFile?: boolean;
  size?: 'small' | 'medium';
  label?: string;
}

const onInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  const element = event.target as HTMLInputElement;
  element.value = '';
};

const UploadFile = ({
  name,
  setValue,
  children,
  defaultValue = [],
  error = {},
  getValues,
  clearErrors,
  size,
  label,
  isMultipleFile = true
}: UploadFile) => {
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
        onChange={handleFileChange}
        onClick={onInputClick}
        error={!!error[name]}
        helperText={error[name]?.message}
        size={size}
        label={label}
      />
      <label htmlFor={`${name}-file`}>{children}</label>
      <Box className="file-upload-container">
        {files.length > 0 &&
          files.map((el: any, i: number) => {
            return (
              <>
                <Box key={i} className="upload-file-wrapper">
                  <Box>
                    <UploadFileIcon />
                  </Box>
                  <Box className="file-popup-wrapper">
                    <Box className="file-text">{el?.name}</Box>
                    <Box className="upload-close" onClick={() => handleRemove(el)}>
                      <CloseIcon />
                    </Box>
                  </Box>
                </Box>
              </>
            );
          })}
      </Box>
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

export default UploadFile;
