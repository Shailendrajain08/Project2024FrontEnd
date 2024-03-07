import React, { useState } from 'react';
import { Button, IconButton, Paper, Typography, Snackbar, Box } from '@mui/material';
import { AddCircle, Close } from '@mui/icons-material';
import '../index.css';
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import '../index.css';

const MAX_FILE_SIZE_MB = 25;
const MAX_FILES = 3;

interface FileUpload {
  id: number;
  file: File;
}

interface FileInputProps {
  name: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  getValues: UseFormGetValues<any>;
  error: any;
  clearErrors: any;
}

const FileUploader = ({
  name,
  register,
  setValue,
  getValues,
  error,
  clearErrors
}: FileInputProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<FileUpload[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      if (uploadedFiles.length + files.length > MAX_FILES) {
        setErrorMessage(`Maximum ${MAX_FILES} files are allowed.`);
        return;
      }

      const newFiles: FileUpload[] = [];

      for (let i = 0; i < Math.min(files.length, MAX_FILES - uploadedFiles.length); i++) {
        const file = files[i];

        if (file.size <= MAX_FILE_SIZE_MB * 1024 * 1024) {
          newFiles.push({
            id: Date.now() + i,
            file
          });
        }
      }

      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setValue(name, [...uploadedFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (id: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    setErrorMessage(null);
  };

  const handleCloseError = () => {
    setErrorMessage(null);
  };

  return (
    <Box mt={2}>
      <Box display={'flex'}>
        <input
          type="file"
          accept="*"
          className="input-field-upload-file"
          onChange={handleFileChange}
          id={name}
          multiple
        />
        <Box display={'flex'} alignItems={'baseline'} justifyContent={'center'}>
          <label htmlFor={name}>
            <Button component="span" startIcon={<AddBoxOutlinedIcon />} className="upload-btn">
              Upload Files
            </Button>
          </label>
          <Typography variant="subtitle1" fontSize={16}>
            (maximum 3 files of 25MB each)
          </Typography>
        </Box>
      </Box>

      <Box display={'flex'}>
        {uploadedFiles.map((uploadedFile) => (
          <Box key={uploadedFile.id} className="uploaded-file-section">
            <Typography variant="body1">{uploadedFile.file.name}</Typography>
            <IconButton
              onClick={() => handleRemoveFile(uploadedFile.id)}
              className="delete--icon-box">
              <Close />
            </IconButton>
          </Box>
        ))}
      </Box>

      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={handleCloseError}
        message={errorMessage || ''}
      />
    </Box>
  );
};

export default FileUploader;
