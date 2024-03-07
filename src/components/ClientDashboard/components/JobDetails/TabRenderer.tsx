// TabRenderer.tsx
import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { ITabRendererProps } from './tabRender.d';

const TabRenderer: React.FC<ITabRendererProps> = ({ active, activeTab, handleChange }) => {
  return active ? (
    <Tabs value={activeTab} onChange={handleChange}>
      <Tab className="job-detail-tab-style" label="Details" />
      <Tab className="job-detail-tab-style" label="Coders" />
      <Tab className="job-detail-tab-style" label="Payments" />
    </Tabs>
  ) : (
    <Tabs value={activeTab} onChange={handleChange}>
      <Tab className="job-detail-tab-style" label="Details" />
      <Tab className="job-detail-tab-style" label="Payments" />
    </Tabs>
  );
};

export default TabRenderer;
