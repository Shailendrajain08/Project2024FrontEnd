import { useState, useEffect, useMemo } from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import JobDescription from '../components/JobDescription';
import JobProposal from '../components/JobProposal';
import { ICoderProposalProps } from '../type';
import MilestoneForm from './MilestoneForm';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { getFixedFormValue, fixedProposalForm } from '../../utils';
import TotalMilestoneData from './TotalBudget';
import { useLocation } from 'react-router-dom';
import './index.css';
// import { coderData } from '../MockUp';
import Skills from '../../../../Common/Skills';

const FixedJobProposal = (props: ICoderProposalProps) => {
  const location = useLocation();
  const stateData = location.state;
  const { hireCoderFeePercentage = 10, formProps } = props;
  const { register, getValues, watch, setValue, errors } = formProps;
  const [milestoneList, setMilestoneList] = useState<string[]>(['milestone0']);
  const fixedJobData = useMemo(() => getValues(), [watch()]) || {};
  const { totalTime, totalBudget } = getFixedFormValue(fixedJobData);
  const hireCoderFee = (totalBudget * (hireCoderFeePercentage / 100)).toFixed(2);

  const jobData: any = props.coderData;
  const skills = Array.isArray(jobData.technologies)
    ? jobData.technologies.map((tech: any) => tech)
    : [];

  useEffect(() => {
    if (stateData?.length) {
      setMilestoneList(stateData);
    }
  }, [stateData]);
  const handleAddForm = (i: number) => {
    setMilestoneList([...milestoneList, `milestone${i + 1}`]);
  };
  const handleDeleteForm = (name: string, index: number) => {
    const filterMilestoneList = milestoneList.filter(
      (value: any, ind: number) => ind !== index || value !== name
    );
    fixedProposalForm.map((value: string) => {
      setValue(`${value}${index}`, '');
    });
    setMilestoneList([...filterMilestoneList]);
  };

  return (
    <Box textAlign={'start'}>
      <Box className="top-section">
        <Box className="header-section">
          <Typography variant="h1" fontSize={32} fontWeight={400}>
            Submit Your Proposal
          </Typography>
          <Button className="detail-btn">View Details</Button>
        </Box>
        <Box textAlign={'start'}>
          <JobDescription {...props} />
        </Box>
      </Box>
      <Box className="bottom-section">
        {skills.length > 0 && (
          <Box>
            <Skills titlComponent={''} skills={skills} />
          </Box>
        )}
        <Box textAlign={'start'}>
          <JobProposal {...props} />
        </Box>
        <Box textAlign={'start'} marginTop={2}>
          <Typography variant="subtitle1" fontSize={16} mb={2} fontWeight={500} lineHeight={'24px'}>
            Plan your delivery
          </Typography>

          <Grid container mb={2.5} md={11}>
            <Grid item md={3}>
              <Typography variant="subtitle2" fontSize={14} fontWeight={500} lineHeight={'21.7px'}>
                Milestone
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography
                variant="subtitle2"
                fontSize={14}
                fontWeight={500}
                lineHeight={'21.7px'}
                pl={1}>
                Description
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography
                variant="subtitle2"
                fontSize={14}
                fontWeight={500}
                lineHeight={'21.7px'}
                pl={1.4}>
                Time
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography
                variant="subtitle2"
                fontSize={14}
                fontWeight={500}
                lineHeight={'21.7px'}
                pl={1.8}>
                Milestone Amount
              </Typography>
            </Grid>
          </Grid>

          {milestoneList.map((name: string, index: number) => {
            const newIndex = name[name.length - 1];
            return (
              <Grid container key={index}>
                <Grid item xs={11}>
                  <MilestoneForm index={Number(newIndex)} register={register} errors={errors} />
                </Grid>

                <Grid item xs={1} display={'flex'}>
                  {milestoneList?.length > 1 && (
                    <Box
                      className="disable-milestone-btn"
                      onClick={() => handleDeleteForm(name, index)}>
                      <CloseOutlinedIcon />
                    </Box>
                  )}
                </Grid>
              </Grid>
            );
          })}

          {milestoneList.map((name: string, index: number) => {
            return (
              <Box key={index}>
                {milestoneList?.length === index + 1 && (
                  <Button className="milestone-add-btn" onClick={() => handleAddForm(index)}>
                    Add More Milestone
                  </Button>
                )}
              </Box>
            );
          })}
        </Box>
        <Grid item xs={11} md={9} textAlign={'start'} mb={2}>
          <TotalMilestoneData
            totalTime={totalTime}
            totalBudget={totalBudget}
            hireCoderFee={hireCoderFee}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default FixedJobProposal;
