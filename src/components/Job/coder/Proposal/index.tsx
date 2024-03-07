import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Box } from '@mui/material';
import HourlyJobProposal from './HoulyJobProposal';
import FixedJobProposal from './FixedJobProposal';
import {
  proposalHourlySchema,
  proposalFixedSchema
} from '../../../../helper/validation/proposalShema';
import { getJobById, setJobProposal } from '../../../../store/actions/jobs';

import { SpinnerLoader } from '../../../Common';
import './index.css';

const CoderProposal = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const jobSelector = useSelector((state: any) => state?.job);
  const jobProposalSelector = useSelector((state: any) => state?.jobProposal);
  const { loading, job, error } = jobSelector;

  const proposalSchema: any =
    job.budget_type === 'HOURLY' ? proposalHourlySchema : proposalFixedSchema;

  const {
    register,
    setValue,
    getValues,
    clearErrors,
    watch,
    resetField,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(proposalSchema),
    defaultValues: jobProposalSelector?.jobProposal
  });
  const hireCoderFeePercentage = 10;
  const formProps = {
    register,
    setValue,
    getValues,
    clearErrors,
    watch,
    resetField,
    errors
  };

  useEffect(() => {
    if (job && Object.keys(job).length === 0) {
      dispatch(getJobById(id as string));
    }
  }, []);

  const handlePreview = () => {
    const proposalData = getValues();
    dispatch(setJobProposal(proposalData));
    navigate(`/jobs/${id}/proposalPreview`);
  };

  return (
    <Box className="main-box">
      {loading ? (
        <SpinnerLoader />
      ) : (
        <form onSubmit={handleSubmit(handlePreview)}>
          {job && Object.keys(job).length > 4 && (
            <Box mb={2}>
              <Box className="center-section">
                {job.budget_type === 'HOURLY' ? (
                  <HourlyJobProposal
                    coderData={job}
                    isHourly={true}
                    maxLength={200}
                    hireCoderFeePercentage={hireCoderFeePercentage}
                    formProps={formProps}
                  />
                ) : (
                  <FixedJobProposal
                    coderData={job}
                    isHourly={false}
                    maxLength={200}
                    hireCoderFeePercentage={hireCoderFeePercentage}
                    formProps={formProps}
                  />
                )}
              </Box>
              <Box textAlign={'end'} mt={2}>
                <Button variant="contained" type="submit" className="submit-proposal-btn">
                  Submit Proposal
                </Button>
              </Box>
            </Box>
          )}
        </form>
      )}
    </Box>
  );
};

export default CoderProposal;
