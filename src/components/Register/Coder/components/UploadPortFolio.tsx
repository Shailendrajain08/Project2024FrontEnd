import React, { useState } from 'react';
import { Button, Input, List, ListItem, ListItemText, Paper, Box } from '@mui/material';
import plus from '../../../../assets/svg/plus_icon.svg';
import './educationForm.css';
import CancelIcon from '@mui/icons-material/Cancel';

interface PortfolioUploadProps {
  onPortfolioUpload: (file: File | null) => void;
}

const UploadPortFolio: React.FC<PortfolioUploadProps> = ({ onPortfolioUpload }) => {
  const [uploadedPortfolio, setUploadedPortfolio] = useState<File | null>(null);

  const handlePortfolioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const newFile = files[0];
      setUploadedPortfolio(newFile);
      onPortfolioUpload(newFile);
    }
  };

  return (
    <Box>
      <Input
        type="file"
        style={{ display: 'none' }}
        id="portfolio-upload-input"
        onChange={handlePortfolioChange}
      />
      <label htmlFor="portfolio-upload-input">
        <Button className="upload-btn" variant="contained" component="span">
          <img src={plus} alt="" />{' '}
          <Box component={'span'} ml={0.5}>
            Upload Portfolio
          </Box>
        </Button>
      </label>
      {uploadedPortfolio && (
        <List className="resume-list">
          {uploadedPortfolio && (
            <ListItem>
              <ListItemText primary={uploadedPortfolio.name} />
              <CancelIcon className="cancel-icon" onClick={() => setUploadedPortfolio(null)} />
            </ListItem>
          )}
        </List>
      )}
    </Box>
  );
};

export default UploadPortFolio;
