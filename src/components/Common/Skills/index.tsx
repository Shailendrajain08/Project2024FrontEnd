import React from 'react';
import { Grid, Box, Typography, Chip } from '@mui/material';

interface SkillsProps {
  titlComponent: string;
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills, titlComponent }) => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        fontSize={16}
        fontWeight={500}
        marginBottom={2}
        lineHeight={'24px'}>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {skills?.map((skill, index) => (
          <Grid item key={index} marginBottom={2}>
            <Chip label={skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
