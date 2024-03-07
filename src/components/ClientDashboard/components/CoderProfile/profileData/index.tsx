import React from 'react';
import { Box, Typography } from '@mui/material';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import { profileData, coderData } from '../../../constant';
import './index.css';

interface Coder {
  identity: string;
}

const ProfileData: React.FC = () => {
  return (
    <Box>
      <Box className="body-text-header">
        <Box>
          {coderData.map((coder: Coder, i: number) => {
            return (
              <Box key={i}>
                <Typography variant="subtitle1">{coder.identity}</Typography>
              </Box>
            );
          })}
        </Box>
        <Box display={'flex'}>
          <Typography variant="subtitle1">$44/hr</Typography>
          <Box className="header-icon">
            <InsertLinkOutlinedIcon />
          </Box>
        </Box>
      </Box>
      <Typography variant="body2" my={1.5} color={'rgba(0, 0, 0, 0.60)'}>
        {profileData.description}
      </Typography>
    </Box>
  );
};

export default ProfileData;
