import { MenuItem, FormControl, Select } from '@mui/material';
import { jobCategories } from '../../../../../../constants/jopProposal';
import React, { useState } from 'react';

const SortByList: React.FC<TSortByList> = ({ handleSorting }) => {
  const initialValue = jobCategories[0].label;
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: any) => {
    if (handleSorting) handleSorting(e);
    setValue(e.target.value);
  };
  return (
    <FormControl fullWidth>
      <Select
        labelId="sorByCoderProposal"
        id="sorByCoderProposalSelect"
        value={value}
        onChange={handleChange}
        size="small">
        {jobCategories.map((category) => {
          return (
            <MenuItem key={category.id} value={category.label}>
              {category.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SortByList;
