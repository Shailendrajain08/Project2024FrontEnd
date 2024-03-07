import React, { Fragment, useEffect, useState } from 'react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { Pagination } from '../Common';
import ManageJobTabs from './components/ManageJobTabs';
import { ArrowDownSvg } from '../../assets/svg';
//import data from './data.json';
import ProfileSummary from './components/ProfileSummary';
import WelcomeCoderAlerts from './components/WelcomeCoder';
import { filterData, userData } from '../../constants/dashboard';
import RecentChat from '../ClientDashboard/components/RecentChat';
import RecentPayment from '../ClientDashboard/components/RecentPayment';
import './index.css';
import SearchBox from './components/Search';
import Filter from './components/Filter';
import { Modal } from '../Common';
import FilterModal from './components/Filter/FilterModal';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../store/actions/jobs';
import { pageOption } from '../../constants/dashboard';
import AccordionComp from '../Common/Accordion/Index';
import inviteCoder from './inviteCoder.json';
import recommendedCoder from './recommendedCoder.json';
import JobDetailsCard from './components/JobCard';

const CoderDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const jobsSelector = useSelector((state: any) => state?.jobs);
  const { loading, jobs = {} } = jobsSelector;
  const [showLoader, setShowLoader] = useState(true);
  const [isShowRecentPayment, setIsShowRecentPayment] = useState(false);
  const [toggleAdvancedFilters, setToggleAdvancedFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { total_pages, count, results: jobsData = [] } = jobs;

  useEffect(() => {
    if (jobs && !jobs?.result?.length) {
      dispatch(getJobs({ page: currentPage }));
      setShowLoader(false);
    }
  }, []);

  //Need to remove when pagination property added on api
  const itemsPerPage = 5;
  // const pageCount = 10//Math.ceil(jobs?.length / itemsPerPage);

  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value);
    dispatch(getJobs({ page: value } as any));
  };

  const showDialog = () => {
    setToggleAdvancedFilters(true);
  };

  const closeDialog = () => {
    setToggleAdvancedFilters(false);
  };

  const handleFilterChange = (filterValue: string[]) => {
    //Need to confirm backend what key is used for filtering
    let queryParams = generateQueryStringObject(filterValue);
    queryParams = serializeQueryString(queryParams);
    dispatch(getJobs({ queryParams }));
  };

  // Function to generate query string object
  const generateQueryStringObject = (selectedValues: any) => {
    const queryStringObject: any = {
      expertise_is_beginner: false,
      expertise_is_intermediate: false,
      expertise_is_expert: false,
      maximum_hourly_rate: 0,
      minimum_hourly_rate: 0
    };

    // Iterate over selected values
    selectedValues.forEach((value: any) => {
      // Find the corresponding filter category for the value
      const filterCategory = filterData.find((category) =>
        category.data.some((item) => item.value === value.value)
      );
      if (filterCategory) {
        // Check if the category already exists in the query string object
        if (!queryStringObject[filterCategory.key]) {
          // If not, initialize it as an array
          queryStringObject[filterCategory.key] = [];
        }
        // Add the value to the array
        queryStringObject[filterCategory.key].push(value.value);
      }
    });
    const updatedQueryObject: any = updateExpertise(queryStringObject);
    delete updatedQueryObject['expertise'];
    updateHourlyKeys(queryStringObject);
    return updatedQueryObject;
  };

  const updateExpertise = (filteredValues: any) => {
    // Iterate over selected values
    filteredValues?.expertise?.forEach((value: any) => {
      switch (value) {
        case 'Beginner':
          filteredValues.expertise_is_beginner = true;
          break;
        case 'Intermediate':
          filteredValues.expertise_is_intermediate = true;
          break;
        case 'Expert':
          filteredValues.expertise_is_expert = true;
          break;
      }
    });
    return filteredValues;
  };

  const updateHourlyKeys = (queryStringObject: any) => {
    // Iterate over each hourly rate range and update minimum and maximum rates
    queryStringObject?.hourly_rate?.forEach((rateRange: any) => {
      const [minRate, maxRate] = rateRange.split('-').map(Number);
      if (minRate > queryStringObject.minimum_hourly_rate) {
        queryStringObject.minimum_hourly_rate = minRate;
      }
      if (maxRate > queryStringObject.maximum_hourly_rate) {
        queryStringObject.maximum_hourly_rate = maxRate;
      }
    });
  };

  // Function to serialize the queryStringObject to a query string
  const serializeQueryString = (queryStringObject: any): string => {
    return Object.entries(queryStringObject)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return value
            .map((item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
            .join('&');
        } else {
          return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
        }
      })
      .join('&');
  };

  const handleSearch = (query: string) => {
    //Need to confirm backend what key is used for search
    dispatch(getJobs(query as any));
  };
  const paginationProps = {
    defaultOption: pageOption[0],
    options: pageOption,
    pageCount: total_pages,
    currentPage,
    handlePageChange
  };

  return (
    <Box>
      <WelcomeCoderAlerts />
      <Grid container spacing={3} mt={3}>
        <Grid item xs={12} md={8}>
          <Box display={'flex'} columnGap={1} alignItems={'center'} mb={3}>
            <SearchBox onSearch={handleSearch} />
            <Filter showDialog={showDialog} onFilterChange={handleFilterChange} />
          </Box>
          {jobsData.length > 0 && <ManageJobTabs jobsData={jobsData} />}
          <Box className="invite--accordion-wrapper">
            <AccordionComp title="Invite Coder">
              {inviteCoder.jobs.map((job, id) => {
                return (
                  <Fragment key={id}>
                    <JobDetailsCard jobDetails={job} />;
                  </Fragment>
                );
              })}
            </AccordionComp>
          </Box>
          <Box className="recommended--accordion-wrapper">
            <AccordionComp title="Recommended Coder">
              {recommendedCoder.jobs.map((job, id) => {
                return (
                  <Fragment key={id}>
                    <JobDetailsCard jobDetails={job} />;
                  </Fragment>
                );
              })}
            </AccordionComp>
          </Box>
          {jobsData.length > 0 ? (
            <Box mt={'30px'}>
              <Pagination {...paginationProps} />{' '}
            </Box>
          ) : null}
        </Grid>
        <Grid item xs={12} md={4}>
          <ProfileSummary {...userData} />
          <Card className="">
            <Box>
              <Box className="coder-dashboard--recent-box">
                <Typography variant="h3">Recent Chat</Typography>
                <Button variant="text" size="small">
                  View all
                </Button>
              </Box>
              <RecentChat />
            </Box>
            <Box>
              <Box className="coder-dashboard--recent-box">
                <Typography variant="h3">Recent Payment</Typography>
                <Box display="flex" onClick={() => setIsShowRecentPayment(!isShowRecentPayment)}>
                  <ArrowDownSvg />
                </Box>
              </Box>
              {isShowRecentPayment && <RecentPayment />}
            </Box>
          </Card>
        </Grid>
      </Grid>
      {toggleAdvancedFilters && (
        <Modal open={toggleAdvancedFilters} onClose={closeDialog} modalBodyWidth="875px">
          <FilterModal onClose={closeDialog} onFilterChange={handleFilterChange} />
        </Modal>
      )}
    </Box>
  );
};

export default CoderDashboard;
