import React, { Fragment } from 'react';
import { Box, Tab, Paper, Typography } from '@mui/material';
import JobDetailsCard from '../JobCard';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { coderJobsLabelObject } from '../../../../constants/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../../../store/actions/jobs';
import AccordionComp from '../../../Common/Accordion/Index';
import '../../index.css';

const ManageJobTabs: React.FC<any> = ({ jobsData }) => {
  const dispatch = useDispatch();
  const jobsSelector = useSelector((state: any) => state?.jobs);
  const [value, setValue] = React.useState('1');
  const [jobsInView, setJobsInView] = React.useState(jobsData);
  const { loading, jobs = [] } = jobsSelector;

  const jobsLabel: any = {
    all: 'All Jobs',
    ACTIVE: 'Active Jobs',
    OFFERED: 'Job Offers',
    applied: 'My Job Applications',
    COMPLETED: 'Completed Jobs'
  };

  const filterJobs = (status: string) => {
    return jobsData.filter((item: any) => item.status === status);
  };

  const handleChange = async (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    switch (newValue) {
      case '1':
        dispatch(getJobs({ page: 1 }));
        setJobsInView(jobsData);
        break;
      case '2':
        dispatch(getJobs({ page: 1, status: 'OPEN' }));
        setJobsInView(jobsData);
        break;
      case '3':
        setJobsInView(filterJobs('OFFERED'));
        break;
      case '4':
        setJobsInView(filterJobs('applied'));
        break;
      case '5':
        dispatch(getJobs({ page: 1, status: 'COMPLETED' }));
        setJobsInView(jobsData);
        break;
      default:
        break;
    }
  };

  const jobsCounter = (key: string) => {
    if (key === 'all') {
      return jobsData.length;
    }
    return jobsData.filter((item: any) => item.status === key).length;
  };

  return (
    <Paper>
      <Box textAlign={'start'} pt={3} pl={3}>
        {' '}
        <Typography variant="h3" className="manage-tab--title">
          {coderJobsLabelObject[value]}
        </Typography>
      </Box>
      <Box borderBottom={1} borderColor="divider" marginBottom={'30px'}>
        <Box>
          <TabContext value={value}>
            <Box borderBottom={1} borderColor="divider">
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                {Object.keys(jobsLabel).map((label, i) => {
                  return (
                    <Tab
                      label={`${jobsLabel[label]}`}
                      key={`${jobsLabel[label]}--${i + 1}`}
                      value={(i + 1).toString()}
                    />
                  );
                })}
              </TabList>
            </Box>
            <TabPanel sx={{ p: 0 }} value={value}>
              <AccordionComp title="All Jobs">
                {jobsData.map((job: any, index: number) => {
                  return (
                    <Fragment key={`${job.id}`}>
                      <JobDetailsCard jobDetails={job} isLastCard={jobsData.length - 1 === index} />
                    </Fragment>
                  );
                })}
              </AccordionComp>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Paper>
  );
};

export default ManageJobTabs;
