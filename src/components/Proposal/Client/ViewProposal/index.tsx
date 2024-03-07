import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { jobData, userData, milestones } from '../../../../constants/jopProposal';
import { Button, Card, Grid, Box } from '@mui/material';
import ProposalDetail from './components/ProposalDetail';
import CoderDetail from './components/CoderDetail';
import MileStoneDetail from './components/MileStone';
import { Modal, SpinnerLoader } from '../../../Common';
import TermAndConditions from './components/TermsAndCondition';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProposal } from '../../../../store/actions/proposal';
import JobDetail from './components/JobDetail';
import './index.css';
import AddCoderProposal from './components/AddMoreCoder';

const ViewProposal = () => {
  const { id, proposalId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const proposalSelector = useSelector((state: any) => state.jobProposal);
  const { loading, proposalData, error } = proposalSelector;
  const { control } = useForm();
  const [showModal, setShowModal] = useState<any>({
    termsAndConditionModal: false,
    addMoreCoderModal: false
  });

  useEffect(() => {
    if (proposalId && Object.keys(proposalData).length === 0) {
      dispatch(getProposal(proposalId));
    }
  }, []);

  const handleHireClick = () => {
    setShowModal({
      termsAndConditionModal: true,
      addMoreCoderModal: false
    });
  };
  const handleDeclineClick = () => {
    navigate(`/jobs/${id}/proposals`);
    // Need to add logic for decline coder job proposal
  };

  const handleCloseModal = () => {
    setShowModal({
      termsAndConditionModal: false,
      addMoreCoderModal: false
    });
  };

  const handleYesClick = () => {
    setShowModal({
      termsAndConditionModal: false,
      addMoreCoderModal: true
    });
  };

  const handleHireMoreCoders = () => {
    handleCloseModal();
    // Need to call api for job open for other coder
  };

  const handleHireCoders = () => {
    handleCloseModal();
    // Need to call api for job open for other coder
  };

  //Need to remove when backend update api response
  const proposal = {
    ...proposalData,
    job_post: jobData,
    user: userData,
    milestones
  };

  return (
    <Fragment>
      {loading ? (
        <SpinnerLoader />
      ) : (
        <Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7.6}>
              <Card>
                <JobDetail {...proposal?.job_post} />
                <ProposalDetail {...proposal} />
                <MileStoneDetail {...proposal} />
              </Card>
              <Box mt={2} textAlign={'end'}>
                <Button
                  variant="text"
                  className="view-proposal--declined-button"
                  disableRipple={true}
                  onClick={handleDeclineClick}>
                  Decline
                </Button>
                <Button
                  variant="outlined"
                  className="view-proposal--hire-now-button"
                  onClick={handleHireClick}>
                  Hire Now
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={4.4}>
              <CoderDetail {...proposal?.user} />
            </Grid>
          </Grid>
          {showModal['termsAndConditionModal'] && (
            <Box className="view-proposal--term-condition-box">
              <Modal
                open={showModal['termsAndConditionModal']}
                onClose={handleCloseModal}
                modalBodyWidth="567px">
                <TermAndConditions
                  Controller={Controller}
                  control={control}
                  onClose={handleCloseModal}
                  onYes={handleYesClick}
                />
              </Modal>
            </Box>
          )}
          {showModal['addMoreCoderModal'] && (
            <Modal
              open={showModal['addMoreCoderModal']}
              onClose={handleCloseModal}
              modalBodyWidth="561x">
              <AddCoderProposal
                onClose={handleCloseModal}
                onYes={handleHireMoreCoders}
                onNo={handleHireCoders}
              />
            </Modal>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ViewProposal;
