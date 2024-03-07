import { Fragment, useState, ReactNode } from 'react';
import { TextField, Box, FormHelperText, Snackbar } from '@mui/material';
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormGetValues,
  UseFormClearErrors,
  FieldValues
} from 'react-hook-form';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import '../index.css';

const MAX_FILES = 3;
const MAX_FILE_SIZE_MB = 100;

interface IFileInput {
  register: UseFormRegister<FieldValues>;
  name: string;
  setValue: UseFormSetValue<FieldValues>;
  children: ReactNode;
  getValues: UseFormGetValues<FieldValues>;
  defaultValue?: any;
  error?: any;
  clearErrors?: UseFormClearErrors<FieldValues>;
  isMultipleFile?: boolean;
  label?: string;
}

const onInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  const element = event.target as HTMLInputElement;
  element.value = '';
};

const FileUpload = ({
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
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (event: any) => {
    const tempFile = event.target.files[0];
    if (uploadedFiles && uploadedFiles.length > 0) {
      if (uploadedFiles.length >= MAX_FILES) {
        setErrorMessage(`Maximum ${MAX_FILES} files are allowed.`);
        return;
      }
      if (
        !uploadedFiles.some((file: any) => file.name === tempFile.name) &&
        tempFile.size <= MAX_FILE_SIZE_MB * 1024 * 1024
      ) {
        setUploadedFiles((prevFiles: any) => [...prevFiles, tempFile]);

        setValue(name, [...uploadedFiles, tempFile]);
      } else {
        setErrorMessage(`This File already exists.`);
      }
    } else {
      setUploadedFiles([tempFile]);
      setValue(name, [tempFile]);
    }
  };
  const handleRemoveFile = (id: number) => {
    const tempFiles = uploadedFiles;
    const filterValue = tempFiles.filter((file: any) => file.id !== id);
    setUploadedFiles(filterValue);
    setValue(name, filterValue);
    setErrorMessage(null);
  };

  const handleCloseError = () => {
    setErrorMessage(null);
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
      {uploadedFiles.length > 0 &&
        uploadedFiles.map((el: any, i: number) => {
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
                  handleRemoveFile(el?.id);
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
                {`${uploadedFiles[i]?.file?.name} is ${el?.message}`}
              </FormHelperText>
            );
          })}
        </Fragment>
      ) : null}
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={handleCloseError}
        message={errorMessage || ''}
      />
    </Fragment>
  );
};

export default FileUpload;
