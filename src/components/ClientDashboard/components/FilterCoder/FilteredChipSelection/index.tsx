import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface TechProp {
  skills: string[];
  onDelete: (chipToDelete: string) => void; // Adding a new prop for handling deletion
}

const FilteredChips: React.FC<TechProp> = ({ skills, onDelete }) => {
  return (
    <Stack className="invite-chip-main-box" direction="row" spacing={1}>
      {skills?.map((skill, id) => (
        <Chip key={id} label={skill} onDelete={() => onDelete(skill)} /> // Assuming skill is a string
      ))}
    </Stack>
  );
};

export default FilteredChips;
