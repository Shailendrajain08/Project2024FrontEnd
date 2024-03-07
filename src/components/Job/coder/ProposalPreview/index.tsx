import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ActionButton from '../JobDetailsPage/ActionButton';
import FilesUploaded from '../JobDetailsPage/FilesUploaded';
import Skills from '../../../Common/Skills';
import ClientInfo from '../JobDetailsPage/ClientInfo';
import { CLIENT_INFO } from '../JobDetailsPage/Mockups';
import HourlyRate from './HourlyRate';
import { useNavigate, useParams } from 'react-router-dom';
import { getFixedFormValue } from '../utils';
import FixedRate from './FixedRate';
import { getJobById } from '../../../../store/actions/jobs';
import { useEffect, useState } from 'react';
import { Modal } from '../../../Common';
import ProposalTermAndCondition from './TermAndCondition';
import MessageCard from '../../../Common/MessageCard';

import './index.css';
import PreviewJobSpecs from './PreviewJobSpec';

const CoderProposalPreview = () => {
  const [proposalSuccess, setProposalSucess] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowMessageCard, setIsShowMessageCard] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const jobProposalSelector = useSelector((state: any) => state?.jobProposal);
  const jobSelector = useSelector((state: any) => state?.job);
  const { proposalDetail, proposalFiles, hourlyRate, totalWorkHours, ...fixedProposalData } =
    jobProposalSelector?.jobProposal;
  const { job } = jobSelector;

  useEffect(() => {
    if (!job?.id) {
      dispatch(getJobById(id as string));
    }
  }, []);

  useEffect(() => {
    const { type }: any = performance.getEntriesByType('navigation')[0];
    const isHardReload = type === 'reload';
    if (isHardReload) {
      navigate(`/jobs/${id}/proposal`);
    }
  }, []);

  const clientInfo = CLIENT_INFO;
  const handleReviseClick = () => {
    let mileStoneData: any[] = [];
    if (fixedProposalData && Object.keys(fixedProposalData)?.length) {
      mileStoneData = Object.keys(fixedProposalData).filter(
        (k) => k.includes('milestone') && fixedProposalData[k]
      );
    }
    navigate(`/jobs/${id}/proposal`, {
      state: mileStoneData?.length ? mileStoneData : null
    });
  };
  const { totalTime, totalBudget } = getFixedFormValue(fixedProposalData);

  const handleClose = () => {
    setIsShowModal(false);
  };

  const handleSubmitClick = async () => {
    setProposalSucess(true);
    setIsShowMessageCard(true);

    setIsShowModal(false);
  };

  const capitalilFirstLetter = (str: string): string => {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1)?.toLowerCase();
  };
  const jopSpecProps = {
    title: job?.title,
    project_size: job?.project_size && capitalilFirstLetter(job?.project_size),
    description: job?.description,
    duration: job?.duration,
    expertise_is_beginner: job?.expertise_is_beginner,
    expertise_is_intermediate: job?.expertise_is_intermediate,
    expertise_is_expert: job?.expertise_is_expert,
    coderResidence: job?.preferred_coder_residence,
    timezone: job?.timezone,
    fixedMaxPrice: job?.maximum_budget,
    hourlyMaxPrice: job?.maximum_hourly_rate,
    hourlyMinPrice: job?.minimum_hourly_rate
  };
  const actions = {
    handleLeftBtnClick: handleReviseClick,
    handleRightBtnClick: () => setIsShowModal(true),
    leftBtnText: 'Revise Proposal',
    rightBtnText: 'Confirm'
  };

  const skillData = Array.isArray(job?.technologies)
    ? job?.technologies.map((tech: { name: string }) => tech)
    : [];

  return (
    <Box className="jobProposal-main-box">
      <Container className="jobproposal-container">
        <Box pt={'50px'} display={'flex'} columnGap={'24px'}>
          <Grid item xs={12} md={7}>
            <Paper variant="outlined" className="jobpropasal-details">
              <Box pl={'24px'} pr={'24px'} pt={'24px'} pb={'20px'}>
                <Grid item xs={12} textAlign={'start'} mb={'20px'}>
                  <Typography className="jobProposal-title" variant="h1">
                    Confirm Your Proposal
                  </Typography>
                </Grid>
                <Grid
                  className="jobspecifiaction-container"
                  item
                  xs={12}
                  textAlign={'start'}
                  mb={1}>
                  <PreviewJobSpecs {...jopSpecProps} />
                </Grid>
                <Grid item xs={12} textAlign={'start'} mb={1}>
                  <Typography pb={'8px'} variant="subtitle1">
                    Your Proposal
                  </Typography>
                  <Typography className="proposal-description" variant="caption">
                    {proposalDetail}
                  </Typography>
                </Grid>
                {proposalFiles && (
                  <Grid item xs={12} textAlign={'start'} mt={'20px'}>
                    <FilesUploaded files={proposalFiles} />
                  </Grid>
                )}
              </Box>

              <Divider />
              <Box pb={'16px'}>
                <Grid pt={'20px'} pr={'24px'} pl={'24px'} item xs={12} textAlign={'start'} mb={1}>
                  <Skills titlComponent={''} skills={skillData} />{' '}
                </Grid>
                {job?.budget_type === 'HOURLY' ? (
                  <Grid item xs={12} textAlign={'start'}>
                    <HourlyRate hourlyRate={hourlyRate} availblity={totalWorkHours} />
                  </Grid>
                ) : (
                  <Grid item xs={12} textAlign={'start'}>
                    <FixedRate
                      totalTime={totalTime}
                      totalBudget={totalBudget}
                      hireCoderFeePercentage={'10'}
                      fixedProposalData={fixedProposalData}
                      hireCoderFee={0}
                    />
                  </Grid>
                )}
              </Box>
            </Paper>
            <Box mt={'16px'} pb={'100px'} textAlign={'end'}>
              <ActionButton {...actions} />
            </Box>
          </Grid>
          <Box>
            <ClientInfo clientInfo={clientInfo}></ClientInfo>
          </Box>
        </Box>
      </Container>

      {isShowModal && (
        <Modal modalBodyWidth={'561px'} open={isShowModal} onClose={() => setIsShowModal(false)}>
          <Box p={'8px'}>
            <ProposalTermAndCondition
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              handleSubmitClick={handleSubmitClick}
              onClose={handleClose}
            />
          </Box>
        </Modal>
      )}
      {isShowMessageCard && (
        <Modal
          open={isShowMessageCard}
          onClose={() => setIsShowMessageCard(false)}
          height={'auto'}
          modalBodyWidth={'432px'}>
          {' '}
          {proposalSuccess === true ? (
            <MessageCard
              heading="Proposal submission!"
              messageLine1="Your successfully submitted your Proposal!"
              path="/coder/dashboard"
              linkText="Click Here to go dashboard"
            />
          ) : (
            <MessageCard
              heading="Proposal submission!"
              messageLine1={'Oops! something went wrong.'}
              path={`/jobs/${id}/proposal`}
              linkText="Click Here to go Proposal"
              isError={true}
            />
          )}
        </Modal>
      )}
    </Box>
  );
};

export default CoderProposalPreview;
