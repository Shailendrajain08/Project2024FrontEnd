import React from 'react';
import { Box, Typography } from '@mui/material';
import './index.css';
// import { coderData } from '../mockUps';
import { coderData } from '../../../constant';

interface Technology {
  name: string;
}

interface Skill {
  technology: Technology;
}

interface Coder {
  skill: Skill[];
}

const Skills: React.FC = () => {
  return (
    <Box>
      <Typography fontSize={20} mb={0.7}>
        Skills
      </Typography>
      {coderData.map((s: Coder, i: number) => {
        return (
          <Box key={i} className="skills">
            {s.skill.map((skill: Skill, ind: number) => {
              return (
                <Box key={ind} className="schip">
                  {skill.technology.name}
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export default Skills;
