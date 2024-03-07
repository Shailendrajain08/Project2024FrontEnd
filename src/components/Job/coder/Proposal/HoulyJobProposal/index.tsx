import { useMemo } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import JobDescription from '../components/JobDescription';
import JobProposal from '../components/JobProposal';
import TotalHourlyBudget from './TotalHourlyBudget';
import { Input } from '../../../../Common';
import { ICoderProposalProps } from '../type';
import Skills from '../../../../Common/Skills';
import './index.css';

const HourlyJobProposal = (props: ICoderProposalProps) => {
  const { hireCoderFeePercentage = 10, formProps } = props;
  const jobData: any = props.coderData;
  const skills = Array.isArray(jobData.technologies)
    ? jobData.technologies.map((tech: any) => tech)
    : [];
  const { register, getValues, watch, errors } = formProps;
  const hourlyRate = useMemo(() => getValues('hourlyRate'), [watch()]) || 0;
  const helperText =
    hourlyRate > 0 && hourlyRate > jobData?.hourlyMaxPrice
      ? 'Your hourly rate higher than maximum hourly budget.'
      : hourlyRate > 0 && hourlyRate < jobData?.hourlyMinPrice
        ? 'Your hourly rate minimum than minimum hourly budget.'
        : '';

  return (
    <Grid justifyContent={'center'}>
      <Box borderBottom={'1px solid rgba(0, 0, 0, 0.12)'} padding={'24px 24px 20px 24px'}>
        <Box className="header-section">
          <Typography variant="h1" fontWeight={400} lineHeight={'40px'}>
            Submit Your Proposal
          </Typography>
          <Button className="detail-btn">View Details</Button>
        </Box>
        <Box>
          <Grid item xs={11} md={9} textAlign={'start'}>
            <JobDescription {...props} />
          </Grid>
        </Box>
      </Box>
      <Box padding={'20px 24px 24px 24px'}>
        {skills.length > 0 && (
          <Box>
            <Skills titlComponent={''} skills={skills} />
          </Box>
        )}
        <Grid item xs={11} md={9} textAlign={'start'}>
          <JobProposal {...props} />
        </Grid>
        <Grid item xs={11} md={9} textAlign={'start'} marginTop={2.5}>
          <Box display={'flex'} columnGap={'64px'}>
            <Box className="hourly-job--text-fields">
              <Typography component={'span'}>{'Your Hourly Rate (USD/Hour) : '}</Typography>
              <Box>
                <Input
                  id="hourlyRate"
                  name="hourlyRate"
                  variant="outlined"
                  type="number"
                  label="Your Hourly Rate"
                  placeholder="USD/Hour"
                  register={register}
                  error={errors}
                  inputProps={{
                    min: 0
                  }}
                />
              </Box>
            </Box>
            <Box className="hourly-job--text-fields">
              <Typography component={'span'}>{'Availability : '}</Typography>
              <Box>
                <Input
                  id="totalWorkHours"
                  name="totalWorkHours"
                  variant="outlined"
                  type="number"
                  label="Availability"
                  placeholder="Hours/Week"
                  error={errors}
                  register={register}
                  inputProps={{
                    min: 0
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box marginTop={'24px'}>
            <TotalHourlyBudget
              hourlyRate={hourlyRate}
              hireCoderFeePercentage={hireCoderFeePercentage}
            />
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default HourlyJobProposal;
