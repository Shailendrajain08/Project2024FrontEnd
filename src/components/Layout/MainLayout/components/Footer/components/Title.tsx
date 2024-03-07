import React from 'react';
import { Typography } from '@mui/material';

interface IBoxTitle {
  title: string;
}

const BoxTitle: React.FC<IBoxTitle> = ({ title }) => {
  return (
    <Typography
      component="h2"
      className="ff_Inter fs_sm leading_130"
      fontWeight="normal"
      color="#FFFFFF">
      {title}
    </Typography>
  );
};

export default BoxTitle;
