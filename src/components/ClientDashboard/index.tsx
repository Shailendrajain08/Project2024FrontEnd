import React, { useEffect, useState, ChangeEvent, useCallback } from 'react';
import { Container, Box, Card, Typography, Button } from '@mui/material';
import RecommendedCoders from './components/RecommendedCoders';
import SkillsTab from './components/SkillsTab';
import Search from './components/Search';
import RecentChat from './components/RecentChat';
import RecentPayment from './components/RecentPayment';
import { skillsTab, searchOptionList } from './constant';
import ManageJobTabs from './components/ManageJobTabs';
import MyTeam from './components/MyTeam';
import { ArrowDownSvg } from '../../assets/svg';
import './index.css';
import { Modal, Pagination, SpinnerLoader } from '../Common';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../store/actions/jobs';
import SuccessManager from './components/SuccessManager';
import { useNav } from '../../context/NavContext';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { generatePageOptions, isObjectEmpty } from '../../helper/utils';
import { RootState } from '../../store/reducers';
import { getRecommendedCoder, getRecommendedTech } from '../../store/actions/recommended';

const ClientDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const jobsSelector = useSelector((state: RootState) => state?.jobs);
  const recommendedTechSelector = useSelector((state: RootState) => state?.recommendedTech);
  const recommendedCoderSelector = useSelector((state: RootState) => state?.recommendedCoder);
  const { value }: any = useNav();
  const { loading, jobs = {} } = jobsSelector;
  const [showSuccessManager, setShowSuccessManager] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isShowRecentPayment, setIsShowRecentPayment] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { total_pages, count, results: jobsData = [] } = jobs;

  useEffect(() => {
    if (jobs && isObjectEmpty(jobs)) {
      dispatch(getJobs({ page: currentPage }));
      setShowLoader(false);
    }
  }, []);

  useEffect(() => {
    getRecommendedData();
  }, []);

  const getRecommendedData = useCallback(() => {
    dispatch(getRecommendedTech());
    dispatch(getRecommendedCoder());
  }, [recommendedTechSelector, recommendedCoderSelector]);

  useEffect(() => {
    if (value?.showSuccessManager) setShowSuccessManager(true);
  }, [value]);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    dispatch(getJobs({ page: value } as any));
  };

  const handleSearch = (query: string) => {
    dispatch(getJobs({ title: query } as any));
  };

  const paginationProps = {
    defaultOption: generatePageOptions(count, total_pages)[0],
    options: generatePageOptions(count, total_pages),
    pageCount: total_pages,
    currentPage,
    handlePageChange
  };

  return (
    <Box className="client-dashboard-box">
      {loading && showLoader ? (
        <SpinnerLoader />
      ) : (
        <Container className="client-dashboard-container">
          {recommendedCoderSelector?.recommendedCoder.length > 0 && (
            <Slider>
              <RecommendedCoders recommendedCoder={recommendedCoderSelector?.recommendedCoder} />
            </Slider>
          )}
          {recommendedTechSelector?.recommendedTech.length > 0 && (
            <SkillsTab skillsTab={recommendedTechSelector?.recommendedTech} />
          )}
          <Box className="client-dashboard--container-box">
            <Box className="client-dashboard--left-container">
              <Search
                searchOptionList={searchOptionList}
                onSearch={(query: string) => handleSearch(query)}
              />
              <ManageJobTabs
                jobsData={jobsData}
                setCurrentPage={setCurrentPage}
                isLoading={loading}
              />
              {!!jobsData.length && (
                <Box mt={'30px'}>
                  <Pagination {...paginationProps} />{' '}
                </Box>
              )}
            </Box>
            <Box className="client-dashboard--right-container">
              <Card className="right-container--top-card">
                <Box>
                  <Box className="recent-chat-top-box">
                    <Typography variant="h3">Recent Chat</Typography>
                    <Button>View All</Button>
                  </Box>
                  <RecentChat />
                </Box>
                <Box>
                  <Box className="recent-payment-top-box">
                    <Typography variant="h3">Recent Payment</Typography>
                    <Box
                      display="flex"
                      onClick={() => setIsShowRecentPayment(!isShowRecentPayment)}>
                      <ArrowDownSvg />
                    </Box>
                  </Box>
                  {isShowRecentPayment && <RecentPayment />}
                </Box>
              </Card>
              <MyTeam />
              <Modal
                open={showSuccessManager}
                onClose={() => setShowSuccessManager(false)}
                closeIcon={true}
                title="Your Success Manager"
                modalBodyWidth="380px"
                closeIconCustomWidth="success-manager-close-icon">
                <SuccessManager
                  profile="images/png/success_manager.png"
                  name="Akash"
                  phone="1234567890"
                  email="akash@domain.com"
                />
              </Modal>
            </Box>
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default ClientDashboard;
