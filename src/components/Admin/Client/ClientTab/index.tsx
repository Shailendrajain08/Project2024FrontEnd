import React, { useState } from 'react';
import { Box } from '@mui/material';
import JobsPosting from '../JobsPosting';
import Coders from '../Coders';
import Coworkers from '../Coworkers';
import CodersInvited from '../CodersInvited';
import { adminJobsMock } from '../types';
import { adminCoderMockData } from '../Coders/types';
import { adminCoworkerMockData } from '../Coworkers/types';
import { adminCoderinvitedMockData } from '../CodersInvited/types';
import { Tabs } from '../../../Common';
import './index.css';

const tabList = [
  { id: 1, label: 'Jobs Posting' },
  { id: 2, label: 'Coders' },
  { id: 3, label: 'Co-Workers' },
  { id: 4, label: 'Coders (invited)' }
];

const ClientTab: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="client-jobs-posting--tablist" display={'flex'}>
      <Tabs tabList={tabList} callBackFnc={handleChange}>
        {value === 0 && <JobsPosting data={adminJobsMock} />}{' '}
        {value === 1 && <Coders data={adminCoderMockData} />}{' '}
        {value === 2 && <Coworkers data={adminCoworkerMockData} />}
        {value === 3 && <CodersInvited data={adminCoderinvitedMockData} />}
      </Tabs>
    </Box>
  );
};

export default ClientTab;
