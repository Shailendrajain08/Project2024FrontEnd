import React, { useState, ChangeEvent } from 'react';
import { Button, Input, Box, TextField } from '@mui/material';
import '../index.css';

interface UploadFileProps {
  onFileUpload: (file: File) => void;
}

const FileUpload = ({ onFileUpload }: UploadFileProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  return (
    <Box>
      <Box>
        <TextField
          variant="outlined"
          label="Upload Profile Picture"
          fullWidth
          value={selectedFile ? selectedFile?.name : 'No file chosen'}
          InputProps={{
            endAdornment: (
              <>
                <Button
                  variant="contained"
                  component="label"
                  htmlFor="fileInput"
                  color="primary"
                  className="btn-file">
                  Choose File
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                </Button>
              </>
            )
          }}
        />
      </Box>
    </Box>
  );
};

export default FileUpload;
