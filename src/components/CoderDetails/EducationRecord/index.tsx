import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import data from '../data.json';

const TextBox = (education: any) => {
  return (
    <Box key={`key--${education.companyName}--${education.designation}`}>
      <Typography variant="body1" component="div" fontWeight={600} fontSize="14px">
        {`${education.university}`}
      </Typography>
      <Typography component="div" variant="caption" color="text.secondary" mb={2} mt={1}>
        {`${education.specialization} | ${education.startDate} - ${
          education.endDate ? education.endDate : 'Present'
        } `}
      </Typography>
    </Box>
  );
};

const EducationRecord = () => {
  const educationRecord = data.education;
  return (
    <Card variant="outlined" sx={{ width: '100%', typography: 'body1', p: 3, pt: 2, pb: 0, mt: 2 }}>
      <Typography
        sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}
        color="text.secondary"
        gutterBottom>
        Education
      </Typography>
      <CardContent sx={{ textAlign: 'left', pb: `0 !important` }}>
        {educationRecord.map((education) => {
          return TextBox(education);
        })}
      </CardContent>
    </Card>
  );
};

export default EducationRecord;
