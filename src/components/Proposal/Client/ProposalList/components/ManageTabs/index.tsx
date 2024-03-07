import React, { Fragment, useState, memo, useEffect } from 'react';
import { Box, Grid, Tab, Typography } from '@mui/material';
import SearchBar from '../Search';
import SortByList from '../ShortByList';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import CoderProposalCard from '../CoderProposalCard';
import './index.css';
import { useDispatch } from 'react-redux';
import { getProposalByJob } from '../../../../../../store/actions/proposal';
import { SpinnerLoader } from '../../../../../Common';

const ManageProposalTab: React.FC<TManageProposalTab> = ({
  jobProposal = [],
  jobId,
  handleSearch,
  handleSorting,
  technologies,
  setCurrentPage,
  isLoading
}) => {
  const [value, setValue] = useState('1');
  const [proposalInView, setProposalInView] = useState(jobProposal);
  const dispatch = useDispatch();
  useEffect(() => {
    const selectedStatus = statusMapping[value] || '';
    setProposalInView(selectedStatus ? filterProposals(selectedStatus) : jobProposal);
  }, [jobProposal, value]);

  const statusMapping: { [key: string]: string } = {
    '1': '',
    '2': 'ACCEPTED_BY_CLIENT',
    '3': 'ACCEPTED_BY_CODER'
  };
  const handleChange = async (event: React.SyntheticEvent, newValue: string) => {
    await dispatch(getProposalByJob({ page: 1, status: statusMapping[newValue] }));
    setCurrentPage(1);
    setValue(newValue);
  };

  const proposalLabel: any = {
    all: 'All Proposals',
    ACCEPTED_BY_CLIENT: 'Shortlisted',
    ACCEPTED_BY_CODER: 'Message'
  };

  const filterProposals = (status: string) => {
    return jobProposal.filter((item: any) => item.status === status);
  };

  const proposalCounter = (key: string) => {
    if (key === 'all') {
      return jobProposal.length;
    }
    return jobProposal.filter((item: any) => item.status === key).length;
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container className="manage-proposal-tab--filter">
          <Grid item xs={12} md={7.5}>
            <SearchBar onSearch={handleSearch} />
          </Grid>
          <Grid item>
            <SortByList handleSorting={handleSorting} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TabContext value={value}>
          <Box borderBottom={1} borderColor="divider">
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {Object.keys(proposalLabel).map((label, i) => {
                return (
                  <Tab
                    label={`${proposalLabel[label]} (${proposalCounter(label)})`}
                    key={`${proposalLabel[label]}--${i + 1}`}
                    value={(i + 1).toString()}
                  />
                );
              })}
            </TabList>
          </Box>
          <TabPanel value={value} className="manage-proposal-tab--tab-panel">
            {isLoading ? (
              <SpinnerLoader />
            ) : (
              <Fragment>
                {!proposalInView.length ? (
                  <Box p={3}>
                    <Typography variant="subtitle1">No Proposals Data Found</Typography>
                  </Box>
                ) : (
                  <Fragment>
                    {proposalInView.map((proposal: any, index: number) => {
                      return (
                        <CoderProposalCard
                          key={proposal.id}
                          proposal={proposal}
                          technologies={technologies}
                          isLastCard={jobProposal.length - 1 === index}
                          jobId={jobId}
                        />
                      );
                    })}
                  </Fragment>
                )}
              </Fragment>
            )}
          </TabPanel>
        </TabContext>
      </Grid>
    </Grid>
  );
};

export default memo(ManageProposalTab);
