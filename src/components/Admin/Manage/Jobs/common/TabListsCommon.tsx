import { useState } from 'react';
import { Tabs } from '../../../../Common';
import AllTableJob from '../AdminJobTable/TablesData/AllTableJob';
import { Box } from '@mui/material';
import ActiveTable from '../AdminJobTable/TablesData/ActiveTable';
import CompleteTable from '../AdminJobTable/TablesData/CompleteTable';
import ExpiredTable from '../AdminJobTable/TablesData/ExpiredTable';
import OpenTable from '../AdminJobTable/TablesData/OpenTable';
import data from '../data.json';

interface Job {
  id: string;
  user: string;
  title: string;
  description: string;
  skills: string[];
  contracts: {
    id: string;
    coder_id: string;
    client_id: string;
    name: string;
    img: string;
    firstName: string;
    lastName: string;
    job_proposal: string;
    start_date: string;
    end_date: string;
    is_active: boolean;
    created: string;
    updated: string;
  }[];
  project_size: string;
  budget_type: string;
  maximum_budget: number;
  maximum_hourly_rate: number;
  minimum_hourly_rate: number;
  expertise: string[];
  duration: string;
  timezone: string[];
  attachments: string[];
  preferred_coder_residence: string;
  is_enabled: boolean;
  created: string;
  updated: string;
  status: string;
  amt_released: number;
}

const tabList = [
  { id: 1, label: 'All' },
  { id: 2, label: 'Active' },
  { id: 3, label: 'Completed' },
  { id: 4, label: 'Expired' },
  { id: 5, label: 'Open' }
];

const TabListsCommon = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  // Filter data based on status
  const filteredData: { [key: number]: Job[] } = {
    0: data,
    1: data.filter((job) => job.status === 'ACTIVE'),
    2: data.filter((job) => job.status === 'COMPLETED'),
    3: data.filter((job) => job.status === 'EXPIRED'),
    4: data.filter((job) => job.status === 'OPEN')
  };

  return (
    <Box className="admin--jobtable-tab-wrapper">
      <Tabs tabList={tabList} callBackFnc={handleChange}>
        {filteredData[value].length > 0 ? (
          <>
            {value === 0 && <AllTableJob data={filteredData[value]} />}
            {value === 1 && <ActiveTable data={filteredData[value]} />}
            {value === 2 && <CompleteTable data={filteredData[value]} />}
            {value === 3 && <ExpiredTable data={filteredData[value]} />}
            {value === 4 && <OpenTable data={filteredData[value]} />}
          </>
        ) : (
          <p>No data</p>
        )}
      </Tabs>
    </Box>
  );
};

export default TabListsCommon;
