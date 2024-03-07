import React from 'react';
import { Typography, Card, CardContent, Box, Divider } from '@mui/material';
import data from '../data.json';

const TextBox = (employment: any) => {
  return (
    <Box key={`key--${employment.companyName}--${employment.designation}`}>
      <Typography variant="body1" component="span" fontWeight={600} fontSize="14px">
        {`${employment.designation} | ${employment.companyName}`}
      </Typography>
      <Typography
        sx={{ mt: 1.5, fontWeight: 600 }}
        component="div"
        variant="caption"
        color="text.secondary">
        {`${employment.startDate} - ${employment.endDate ? employment.endDate : 'Present'}`}
      </Typography>
      <Typography component="div" variant="caption" color="text.secondary">
        {`${employment.profileSummary}`}
      </Typography>
      <Typography component="div" variant="caption" color="text.secondary">
        {`${employment.technologies}`}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};

const EmploymentRecord = () => {
  const employmentHistory = data.employmentHistory;
  return (
    <Card variant="outlined" sx={{ width: '100%', typography: 'body1', p: 3, pt: 2, pb: 0, mt: 2 }}>
      <Typography
        sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}
        color="text.secondary"
        gutterBottom>
        Employment History
      </Typography>

      <CardContent sx={{ textAlign: 'left', pb: `0 !important` }}>
        {employmentHistory.map((employment) => {
          return TextBox(employment);
        })}
      </CardContent>
    </Card>
  );
};

export default EmploymentRecord;
