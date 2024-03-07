import React, { useState } from 'react';
import { Button, Input, List, ListItem, ListItemText, Paper, Box, Typography } from '@mui/material';
import './educationForm.css';
import CancelIcon from '@mui/icons-material/Cancel';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

interface FileUploadProps {
  onFileUpload: (file: File | null) => void;
  onPortfolioUpload: (file: File | null) => void;
}

const UploadResume: React.FC<FileUploadProps> = ({ onFileUpload, onPortfolioUpload }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedPortfolio, setUploadedPortfolio] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const newFile = files[0];
      setUploadedFile(newFile);
      onFileUpload(newFile);
    }
  };

  const handlePortfolioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const newFile = files[0];
      setUploadedPortfolio(newFile);
      onPortfolioUpload(newFile);
    }
  };

  const formatFileSize = (size: number) => {
    const fileSizeInMB = size / (1024 * 1024);
    return fileSizeInMB.toFixed(2) + ' MB';
  };

  return (
    <Box>
      <Input
        type="file"
        className="upload-input-file"
        id="file-upload-input"
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload-input">
        <Button className="upload-btn" variant="contained" component="span">
          <AddBoxOutlinedIcon />
          <Typography variant="subtitle1" component={'span'} ml={1}>
            Upload Resume
          </Typography>
        </Button>
      </label>

      <Input
        type="file"
        className="upload-input-file"
        id="portfolio-upload-input"
        onChange={handlePortfolioChange}
      />
      <label htmlFor="portfolio-upload-input">
        <Button className="upload-btn" variant="contained" component="span">
          <AddBoxOutlinedIcon fontSize="large" />
          <Typography variant="subtitle1" component={'span'} ml={1}>
            Upload Portfolio
          </Typography>
        </Button>
      </label>

      <Box mt={3}>
        <Box mb={3}>
          {uploadedFile && (
            <List className="resume-list">
              {uploadedFile && (
                <ListItem>
                  <PictureAsPdfOutlinedIcon className="pdf-icon" />
                  <ListItemText
                    primary={uploadedFile.name}
                    secondary={formatFileSize(uploadedFile.size)}
                  />
                  <CancelIcon className="cancel-icon" onClick={() => setUploadedFile(null)} />
                </ListItem>
              )}
            </List>
          )}
        </Box>

        {uploadedPortfolio && (
          <List className="resume-list">
            {uploadedPortfolio && (
              <ListItem>
                <PictureAsPdfOutlinedIcon className="pdf-icon" />
                <ListItemText
                  primary={uploadedPortfolio.name}
                  secondary={formatFileSize(uploadedPortfolio.size)}
                />
                <CancelIcon className="cancel-icon" onClick={() => setUploadedPortfolio(null)} />
              </ListItem>
            )}
          </List>
        )}
      </Box>
    </Box>
  );
};

export default UploadResume;
