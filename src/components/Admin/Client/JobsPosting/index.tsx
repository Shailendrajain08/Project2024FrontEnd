import React, { useState } from 'react';
import { Box, Grid, Button } from '@mui/material';
import AllJobs from './Tables/AllJobs';
import CompletedJobs from './Tables/CompletedJobs';
import ActiveJobs from './Tables/ActiveJobs';
import StillHiring from './Tables/StillHiring';
import { Pagination } from '../../../Common';
import './index.css';

interface ITable {
  data: any[];
}

const JobsPosting: React.FC<ITable> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPageOptions = [5, 10, 20];
  const itemsPerPageDefault = 5;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    setCurrentPage(1);
  };

  const handlePageChange = (event: any, newPage: number) => {
    setCurrentPage(newPage);
  };

  const getVisibleData = () => {
    const startIndex = (currentPage - 1) * itemsPerPageDefault;
    const endIndex = startIndex + itemsPerPageDefault;
    return data.slice(startIndex, endIndex);
  };

  const visibleData = getVisibleData();

  const tabs = ['All Jobs', 'Completed Jobs', 'Active Jobs', 'Still Hiring'];

  return (
    <>
      <Grid
        container
        border={'1px solid rgba(0, 0, 0, 0.12)'}
        borderTop={'none'}
        borderRadius={'0px 0px 8px 8px'}>
        <Grid item xs={2.8} mt={'18px'} pl={'8px'}>
          <Box className="jobs-posting--button-tabs">
            {tabs.map((tab, index) => (
              <Button
                key={index}
                className={`jobs-posting-individual-tabs ${
                  index === activeIndex ? 'active-button--style' : 'inactive-button--style'
                }`}
                onClick={() => handleButtonClick(index)}>
                {tab}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid item xs={9.2}>
          {activeIndex === 0 && <AllJobs data={visibleData} />}
          {activeIndex === 1 && <CompletedJobs data={visibleData} />}
          {activeIndex === 2 && <ActiveJobs data={visibleData} />}
          {activeIndex === 3 && <StillHiring data={visibleData} />}
        </Grid>
      </Grid>
      <Box paddingBottom={'32px'} paddingTop={'32px'} width={'100%'} bgcolor={'#F9F9F9'}>
        <Pagination
          defaultOption={{
            value: itemsPerPageDefault.toString(),
            label: itemsPerPageDefault.toString()
          }}
          options={itemsPerPageOptions.map((value) => ({ value, label: `${value}` }))}
          pageCount={Math.ceil(data.length / itemsPerPageDefault)}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default JobsPosting;
