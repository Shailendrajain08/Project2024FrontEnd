import { FormHelperText, TextField, Typography } from '@mui/material';
import { Fragment, ReactNode, useEffect, useState } from 'react';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import {
  UseFormClearErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch
} from 'react-hook-form';
import { urlToFile } from '../../../helper/utils';
interface IFileInput {
  register: UseFormRegister<any>;
  name: string;
  setValue: UseFormSetValue<any>;
  children: ReactNode;
  getValues: UseFormGetValues<any>;
  error?: any;
  clearErrors?: UseFormClearErrors<any>;
  isMultipleFile?: boolean;
  label?: string;
  Controller: any;
  control: any;
  watch?: UseFormWatch<any>;
  setLogoSelect?: any;
  imageUrls?: any;
  accept?: any | undefined;
}

const FileUpload = ({
  name,
  setValue,
  children,
  error = {},
  getValues,
  clearErrors,
  isMultipleFile,
  label,
  Controller,
  control,
  accept,
  setLogoSelect,
  watch,
  imageUrls
}: IFileInput) => {
  const [files, setFiles] = useState<any[]>([]);
  //   setLogoSelect(false);
  const urlChangeIntoFile = async (url: any) => {
    try {
      const convertedFile = await urlToFile(url);
      setFiles(convertedFile);
      setValue(name, convertedFile);
    } catch (error) {
      console.error('Error handling file change:', error);
    }
  };
  useEffect(() => {
    if (files?.length === 0 && imageUrls?.length > 0) {
      urlChangeIntoFile(imageUrls);
    }
  }, [imageUrls]);

  const handleFileChange = (event: any) => {
    if (clearErrors) clearErrors(name);
    const file = event.target.files[0];
    if (file && isMultipleFile) {
      setFiles([...files, file]);
      const value: any[] = getValues(name) || [];
      value.push(file);
      setValue(name, value);
      setLogoSelect(true);
    }
    if (file && !isMultipleFile) {
      setFiles([file]);
      setValue(name, file);
      setLogoSelect(true);
    }
  };

  const handleRemove = (file: any) => {
    if (file && isMultipleFile) {
      const filterValue = files?.filter((item) => item !== file);
      setFiles(filterValue);
      setValue(name, filterValue);
    }
    if (file && !isMultipleFile) {
      setFiles([]);
      setValue(name, []);
      setLogoSelect(true);
    }
    setLogoSelect(true);
    if (clearErrors) clearErrors(name);
  };
  return (
    <Fragment>
      <Controller
        name={name}
        control={control}
        render={({ field }: any) => (
          <>
            <TextField
              sx={{ display: 'none' }}
              id={`${name}-file`}
              type="file"
              inputProps={{ accept: accept }}
              label={label}
              //   multiline={isMultipleFile}
              onChange={handleFileChange}
              //   onClick={onInputClick}
              error={!!error[name]}
              helperText={error[name]?.message}
            />
            <label htmlFor={`${name}-file`}>{children}</label>
            {field?.value && (
              <>
                {Array.isArray(field.value) ? (
                  field.value.map((file: any, i: number) => {
                    return (
                      <>
                        <Typography
                          component={isMultipleFile ? 'div' : 'span'}
                          marginTop={1}
                          key={i}
                          sx={{ cursor: 'pointer' }}>
                          <FilePresentIcon
                            sx={{ marginRight: 1, marginLeft: 1 }}
                            className="margin-bottom_-6"
                          />
                          <Typography
                            component="span"
                            color={'#ccc'}
                            fontStyle={'italic'}
                            marginRight={2}>
                            {file?.name}
                          </Typography>
                          <Typography
                            component="span"
                            color={'red'}
                            fontSize={'13px'}
                            onClick={() => {
                              handleRemove(file);
                            }}>
                            {'X'}
                          </Typography>
                        </Typography>
                        {error[name]?.length > 0 && error[name]?.some((d: any) => d.message) ? (
                          <Fragment>
                            {error[name].map((el: any, i: number) => {
                              return (
                                <FormHelperText className="error-text" key={i}>
                                  {`${file[i]?.name} is ${el?.message}`}
                                </FormHelperText>
                              );
                            })}
                          </Fragment>
                        ) : null}
                      </>
                    );
                  })
                ) : (
                  <>
                    <Typography component={'span'} marginTop={1} sx={{ cursor: 'pointer' }}>
                      <FilePresentIcon
                        sx={{ marginRight: 1, marginLeft: 1 }}
                        className="margin-bottom_-6"
                      />
                      <Typography
                        component="span"
                        color={'#ccc'}
                        fontStyle={'italic'}
                        marginRight={2}>
                        {field?.value.name}
                      </Typography>
                      <Typography
                        component="span"
                        color={'red'}
                        fontSize={'13px'}
                        onClick={() => {
                          handleRemove(field?.value);
                        }}>
                        {'X'}
                      </Typography>
                    </Typography>
                    {error[name]?.message ? (
                      <FormHelperText className="error-text">{error[name]?.message}</FormHelperText>
                    ) : null}
                  </>
                )}
              </>
            )}
          </>
        )}
      />
    </Fragment>
  );
};

export default FileUpload;
