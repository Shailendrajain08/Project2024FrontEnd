import React, { Fragment, useEffect, useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ManageProposalTab from './components/ManageTabs';
import FilterSideNav from './components/Filter';
import { facetData } from '../../../../constants/jopProposal';
import { Box, Card, Grid, Typography } from '@mui/material';
import { getProposalByJob } from '../../../../store/actions/proposal';
import './index.css';
import { Pagination, SpinnerLoader } from '../../../Common';
import { getAllTechnology } from '../../../../store/actions/jobPost';
import { RootState } from '../../../../store/reducers';
import { generatePageOptions } from '../../../../helper/utils';
import { getJobById } from '../../../../store/actions/jobs';

const ProposalList: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { job } = useSelector((state: RootState) => state.job);
  const proposalSelector = useSelector((state: RootState) => state.jobProposal);
  const { technologies } = useSelector((state: RootState) => state?.jobPost);
  const { loading, proposalByJob, error } = proposalSelector;
  const { count, total_pages } = proposalByJob;
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (proposalByJob.length === 0) {
      dispatch(getJobById(id as string));
      dispatch(getProposalByJob({ job_post: id, page: currentPage } as any));
      dispatch(getAllTechnology());
      setShowLoader(false);
    }
  }, []);

  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
    dispatch(getProposalByJob({ job_post: id, page: value } as any));
  };

  const handleFilterChange = (filterValue: string[]) => {
    //Need to confirm backend what key is used for filtering
    const value = JSON.stringify(filterValue);
    dispatch(getProposalByJob({ job_post: id, value } as any));
  };

  const handleSearch = (query: string) => {
    //Need to confirm backend what key is used for search
    dispatch(getProposalByJob({ job_post: id, query } as any));
  };

  const handleSorting = (sortValue: string) => {
    //Need to confirm backend what key is used for shorting
    dispatch(getProposalByJob({ job_post: id, sortValue } as any));
  };

  return (
    <Fragment>
      {loading && showLoader ? (
        <SpinnerLoader />
      ) : (
        <Grid container>
          <Grid item lg={3.8} className="proposal-list--side-nav-box">
            <FilterSideNav facetData={facetData} onFilterChange={handleFilterChange} />
          </Grid>
          <Grid item lg={8} className="proposal-list--container-box">
            <Card>
              <Box className="proposal-list--job-headline-box">
                <Typography variant="h3">{job?.title}</Typography>
              </Box>
              <ManageProposalTab
                jobProposal={proposalByJob}
                technologies={technologies}
                jobId={id}
                handleSearch={handleSearch}
                handleSorting={handleSorting}
                setCurrentPage={setCurrentPage}
                isLoading={loading}
              />
            </Card>
            {proposalByJob && proposalByJob.length > 0 ? (
              <Box display="flex" justifyContent="center" mt={4}>
                <Pagination
                  defaultOption={generatePageOptions(count, total_pages)[0]}
                  options={generatePageOptions(count, total_pages)}
                  pageCount={total_pages}
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                />
              </Box>
            ) : null}
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};

export default memo(ProposalList);
