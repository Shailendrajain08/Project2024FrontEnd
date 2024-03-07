import React, { useState } from 'react';
import './index.css';
import { Tabs } from '../../Common';
import CoderData from './components/JobPosting';
import { coderJobData, coderProposalData, codersClientTab } from '../../../constants/admin';
import { Box } from '@mui/material';
import ClientData from './components/Client';

const coderTabList = [
  { id: 1, label: 'Job Posting' },
  { id: 2, label: 'Client' }
];

const renderData: any = {
  0: <CoderData data={{ coderJobData, coderProposalData }} />,
  1: <ClientData clientsData={{ codersClientTab }} />
};

const CoderTable: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="jobs-posting-tabsContainer">
      <Tabs tabList={coderTabList} callBackFnc={handleChange}>
        {renderData[value]}
      </Tabs>
    </Box>
  );
};

export default CoderTable;
