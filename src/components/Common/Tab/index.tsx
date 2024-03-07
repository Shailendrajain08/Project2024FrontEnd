import * as React from 'react';
import { Tabs as MUITabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface ITabs {
  children?: React.ReactNode;
  tabList: any[];
  callBackFnc: (value: number) => void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function Tabs({ tabList, callBackFnc, children }: ITabs) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (callBackFnc) callBackFnc(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className="mui--common-tab">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="mui-common--wrapper">
        <MUITabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tab-container tableTab--wrapper">
          {tabList.map((tab: any, i: number) => (
            <Tab
              className="client-tab-ind-tab tab-container-btn"
              label={tab.label}
              {...a11yProps(i)}
              key={i}
            />
          ))}
        </MUITabs>
      </Box>
      {children}
    </Box>
  );
}
