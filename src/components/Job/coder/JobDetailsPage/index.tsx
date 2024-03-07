import { Box, Typography, Button, Container } from '@mui/material';
import { useState, useEffect, Fragment, Children, useMemo } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CLIENT_INFO } from './Mockups';
import ClientInfo from './ClientInfo';
import FilesUploaded from './FilesUploaded';
import JobSpecification from '../../../Common/JobSpecification';
import Skills from '../../../Common/Skills';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getJobById, setJobFavourite } from '../../../../store/actions/jobs';
import { Modal, SpinnerLoader } from '../../../Common';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { capitalizeFirstLetter, projectDuration } from '../utils';
import { getClientProfileDataById } from '../../../../store/actions/clientProfile';
import { getExpertiseLabel } from '../../../../helper/utils';
import './jobDetailPage.css';

const JobDetailPage: React.FC = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const jobSelectors = useSelector((state: any) => state?.job);
  const { loading, job, error } = jobSelectors;

  const memomizedDatas = useMemo(() => {
    const attachments = [];
    for (const key in job) {
      if (key.startsWith('attachment_') && job[key]) {
        attachments.push(job[key]);
      }
    }
    const skills = Array.isArray(job.technologies) ? job.technologies.map((tech: any) => tech) : [];

    return { attachments, skills };
  }, [job]);

  const { attachments, skills } = memomizedDatas;

  const clientInfo = CLIENT_INFO;

  useEffect(() => {
    if (job && Object.keys(job).length === 0) {
      dispatch(getJobById(id as string));
    }
  }, []);

  useEffect(() => {
    Object.keys(jobSelectors.job).length > 0 &&
      dispatch(getClientProfileDataById(jobSelectors.job.user));
  }, [jobSelectors]);

  const handleApplyClick = () => {
    navigate(`/jobs/${id}/proposal`);
  };

  const handleSaveClick = () => {
    setIsFavourite(!isFavourite);
    setIsShow(!isShow);
  };

  const role = localStorage.getItem('role') as string | null;

  const jopSpecProps = {
    project_size: job.project_size,
    duration: job.duration,
    expertise_is_beginner: job.expertise_is_beginner,
    expertise_is_intermediate: job.expertise_is_intermediate,
    expertise_is_expert: job.expertise_is_expert,
    preferred_coder_residence: job.preferred_coder_residence,
    timezone: job.timezone,
    maximum_budget: job.maximum_budget,
    maximum_hourly_rate: job.maximum_hourly_rate,
    minimum_hourly_rate: job.minimum_hourly_rate
  };

  const actions = {
    handleLeftBtnClick: handleApplyClick,
    handleRightBtnClick: handleSaveClick,
    leftBtnText: 'Apply',
    rightBtnText: 'Save'
  };

  return (
    <Box className="main---box">
      <Fragment>
        {loading ? (
          <SpinnerLoader />
        ) : (
          <Container>
            {job && Object.keys(job).length > 4 && (
              <Box className="coder-job-detail--box" pt={6.5} pb={6.5}>
                <Box className="coder-job-detail--box-left">
                  <Box pt={3} pb={3} className="job-card">
                    <Box pl={3} pr={3}>
                      <Box textAlign={'start'} mb={1} display={'flex'} className="title-bar">
                        <Typography variant="h3" fontSize={20}>
                          {job.title}
                        </Typography>
                        <Box
                          onClick={() => handleSaveClick()}
                          className="coder-job-detail--saved-box">
                          {isShow && (
                            <Modal
                              open={isShow}
                              onClose={() => {
                                setIsShow(false);
                              }}
                              modalBodyWidth="auto">
                              <Box>
                                <Typography variant="subtitle1" color={'#14A800'}>
                                  {' '}
                                  This feature is coming soon
                                </Typography>
                              </Box>
                            </Modal>
                          )}

                          {isFavourite ? (
                            <FavoriteIcon className="fav-icon-filled" />
                          ) : (
                            <FavoriteBorderIcon className="fav-icon" />
                          )}
                        </Box>
                      </Box>
                      <Box textAlign={'start'} mb={1}>
                        <JobSpecification {...jopSpecProps} />
                      </Box>
                      <Box textAlign={'start'} mb={2.5}>
                        <Typography variant="caption" color={'rgba(0, 0, 0, 0.60)'}>
                          {job.description}
                        </Typography>
                      </Box>
                      <Box pb={'20px'}>
                        {attachments.length > 0 && (
                          <Box textAlign={'start'} mb={1}>
                            <FilesUploaded files={attachments} />
                          </Box>
                        )}
                      </Box>
                    </Box>
                    {skills.length > 0 && (
                      <Box textAlign={'start'} className="coder-job-detail--files-box">
                        <Box pl={3} pr={3} pt={'20px'}>
                          <Skills titlComponent={''} skills={skills} />{' '}
                        </Box>
                      </Box>
                    )}
                  </Box>
                  <Box className="apply-btn">
                    {role === 'CODER' && <Button onClick={handleApplyClick}>Apply Now</Button>}
                  </Box>
                </Box>
                <Box className="coder-job-detail--box-right">
                  <ClientInfo clientInfo={clientInfo}></ClientInfo>
                </Box>
              </Box>
            )}
          </Container>
        )}
      </Fragment>
    </Box>
  );
};

export default JobDetailPage;
