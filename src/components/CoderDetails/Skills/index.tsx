import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import Chips from '../../Common/Chips';
import data from '../data.json';

const Skills = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        typography: 'body1',
        p: 3,
        pt: 2,
        pb: 0,
        mt: 2,
        mb: 4
      }}>
      <Typography
        sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}
        color="text.secondary"
        gutterBottom>
        Skills
      </Typography>

      <CardContent sx={{ textAlign: 'left', pl: 0 }}>
        <Chips chipTitles={data.skills} maxChipsToDisplayInRow={8} />
      </CardContent>
    </Card>
  );
};

export default Skills;
