import React, { ReactNode, useEffect, useState } from 'react';
import JobPostModal from '../../../common/JobPostModal';
import { Box, TextField, Typography } from '@mui/material';
import { CloseIcon, CloseIconSvg, UploadFileIcon } from '../../../../../../assets/svg';

const MAX_FILES = 3;
const MAX_FILE_SIZE_MB = 100;
interface IjobPostFile {
  handleClose: () => void;
  showPopUp: any;
  setValue?: any;
  getValues?: any;
  skill?: any;
  errors?: any;
  clearErrors?: any;
  name: string;
  isMultipleFile: boolean;
  children: ReactNode;
  title: string;
  options: any;
  setFormData: (name: string, value: any) => void;
  onhandleSubmit: any;
}

const onInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  const element = event.target as HTMLInputElement;
  element.value = '';
};

const JobPostFile = ({
  name,
  showPopUp,
  setValue,
  getValues,
  errors,
  clearErrors,
  handleClose,
  children,
  isMultipleFile = true,
  options,
  title,
  setFormData,
  onhandleSubmit
}: IjobPostFile) => {
  const [files, setFiles] = useState<any>(options);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onhandleChange = (event: any) => {
    const tempFile = event.target.files[0];
    if (files && files.length > 0) {
      if (files.length >= MAX_FILES) {
        setErrorMessage(`Maximum ${MAX_FILES} files are allowed.`);
        return;
      }
      if (
        !files.some((file: any) => file.name === tempFile.name) &&
        tempFile.size <= MAX_FILE_SIZE_MB * 1024 * 1024
      ) {
        setFiles((prevFiles: any) => [...prevFiles, tempFile]);
        setFormData(name, [...files, tempFile]);
      } else {
        setErrorMessage(`This File already exists.`);
      }
    }
  };

  const handleRemoveFile = (id: number) => {
    const tempFiles = files;
    const filterValue = tempFiles.filter((item: any, index: number) => index !== id);
    setFiles(filterValue);
    setFormData(name, filterValue);
    setErrorMessage(null);
  };

  return (
    <Box>
      <JobPostModal
        modalBodyWidth="522px "
        handleClose={handleClose}
        title={title}
        open={showPopUp}
        name={name}
        callBackFnc={onhandleSubmit}>
        <TextField
          id={`${name}-file`}
          type="file"
          onChange={onhandleChange}
          onClick={onInputClick}
          sx={{ display: 'none' }}
          name={name}
        />
        <label htmlFor={`${name}-file`} className="file-main-wrapper">
          {children}
        </label>

        <Box className="pop-file-container" columnGap={'24px'}>
          {files &&
            files.map((item: any, id: number) => {
              return (
                <Box key={id} className="file-wrapper" position={'relative'} columnGap={'10px'}>
                  <Box>
                    <UploadFileIcon />
                  </Box>
                  <Box className="file-text">{item?.name}</Box>
                  <Box
                    className="file--close-icon"
                    onClick={() => {
                      handleRemoveFile(id);
                    }}>
                    <CloseIconSvg />
                  </Box>
                </Box>
              );
            })}
        </Box>
        {errorMessage && (
          <Typography variant="body2" color={'#D32F2F'}>
            {errorMessage}
          </Typography>
        )}
      </JobPostModal>
    </Box>
  );
};

export default JobPostFile;
