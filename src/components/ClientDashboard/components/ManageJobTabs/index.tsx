import React, { Fragment, useEffect } from 'react';
import { Box, Tab, Paper, Typography } from '@mui/material';
import JobDetailsCard from '../../shared/JobCard';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { clientJobLabelsObject } from '../../constant';
import './index.css';
import { Modal, SpinnerLoader } from '../../../Common';
import SubmitFeedback from '../Feedback';
import { useDispatch } from 'react-redux';
import { getJobs } from '../../../../store/actions/jobs';

const ManageJobTabs: React.FC<any> = ({ jobsData = [], setCurrentPage, isLoading }) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('1');
  const [isShowModal, setIsShowModal] = React.useState(false);
  const [jobsInView, setJobsInView] = React.useState(jobsData);
  useEffect(() => {
    //Need to update for active jobs using active contract api
    const selectedStatus = statusMapping[value] || '';
    setJobsInView(selectedStatus ? filterJobs(selectedStatus) : jobsData);
  }, [jobsData, value]);

  const jobsLabel: any = {
    all: 'All Jobs',
    COMPLETED: 'Completed Jobs',
    OPEN: 'Still Hiring',
    ACTIVE: 'My Active Jobs'
  };

  const filterJobs = (status: string) => {
    return jobsData.filter((item: any) => item.status === status);
  };

  const statusMapping: { [key: string]: string } = {
    '1': '',
    '2': 'COMPLETED',
    '3': 'OPEN',
    '4': 'ACTIVE'
  };

  const handleChange = async (event: React.SyntheticEvent, newValue: string) => {
    await dispatch(getJobs({ page: 1, status: statusMapping[newValue] }));
    setCurrentPage(1);
    setValue(newValue);
  };

  const jobsCounter = (key: string) => {
    if (key === 'all') {
      return jobsData.length;
    }
    return jobsData.filter((item: any) => item.status === key).length;
  };

  const handleSubmitFeedback = () => {
    setIsShowModal(true);
  };

  return (
    <Fragment>
      <Paper className="client-dashboard--job-container">
        <Typography variant="h3" className="tab-title">
          {clientJobLabelsObject[value]}
        </Typography>
        <Box borderBottom={1} borderColor="divider">
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
              <TabPanel sx={{ padding: 0 }} value={value}>
                {isLoading ? (
                  <SpinnerLoader />
                ) : (
                  <Fragment>
                    {!jobsInView.length ? (
                      <Box textAlign={'center'} p={2}>
                        No Data Found
                      </Box>
                    ) : (
                      <Fragment>
                        {jobsInView.map((job: any, index: number) => {
                          return (
                            <JobDetailsCard
                              key={`${job.id}`}
                              jobDetails={job}
                              handleSubmitFeedback={handleSubmitFeedback}
                              isLastCard={jobsInView.length - 1 === index}
                            />
                          );
                        })}
                      </Fragment>
                    )}
                  </Fragment>
                )}
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Paper>
      {isShowModal && (
        <Modal
          open={isShowModal}
          onClose={() => setIsShowModal(false)}
          title="Submit feedback"
          closeIcon={true}
          modalBodyWidth="722px">
          <SubmitFeedback
            handleClose={() => setIsShowModal(false)}
            profile="images/png/submit_profile.png"
            first_name="James"
            last_name="M.Alvarez"
            identity="Drupal Developer"
          />
        </Modal>
      )}
    </Fragment>
  );
};

export default ManageJobTabs;
