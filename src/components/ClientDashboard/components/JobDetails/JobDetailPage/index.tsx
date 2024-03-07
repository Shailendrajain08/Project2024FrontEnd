import React, { useEffect, useMemo } from 'react';
import { Box, Typography, Chip, Avatar, Button } from '@mui/material';
import { MiniQuestionMark } from '../../../../../assets/svg/MiniQuestionMark';
import './index.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getJobById } from '../../../../../store/actions/jobs';
import FilesUploaded from '../../../../Job/coder/JobDetailsPage/FilesUploaded';
import { SpinnerLoader } from '../../../../Common';
import { projectDuration } from '../../../../../helper/utils';

const DetailPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();
  const jobSelectors = useSelector((state: any) => state?.job);
  const { loading, job, error } = jobSelectors;

  useEffect(() => {
    if (job && !Object.keys(job).length) {
      dispatch(getJobById(id as string));
    }
  }, []);

  const memomizedDatas = useMemo(() => {
    const attachments = [];
    for (const key in job) {
      if (key.startsWith('attachment_') && job[key]) {
        attachments.push(job[key]);
      }
    }
    const skills = Array.isArray(job.technologies) ? job.technologies.map((tech: any) => tech) : [];

    const renderedExpertise = Array.isArray(job.expertise)
      ? job.expertise.map((expert: any) => expert).join(', ')
      : [];

    return { attachments, skills, renderedExpertise };
  }, [job]);

  const { attachments, skills, renderedExpertise } = memomizedDatas;

  const generateUniqueID = () => Math.random().toString(36).substring(2, 11);

  return (
    <>
      <Box>
        {loading ? (
          <SpinnerLoader />
        ) : (
          job &&
          Object.keys(job).length > 4 && (
            <Box>
              <Box className="job-detail-and-budget-box">
                <Box className="job-detail-box">
                  <Box>
                    {' '}
                    <Typography className="job-detail-title" variant="subtitle1">
                      Job Details
                    </Typography>
                  </Box>

                  <Box className="job-criteria-box">
                    <Box>
                      <Typography variant="body2">Job Size</Typography>
                      <Box className="job-detail-project-size">
                        {' '}
                        <Typography className="caption" variant="caption">
                          {job.project_size.charAt(0).toUpperCase() +
                            job.project_size.slice(1).toLowerCase()}
                        </Typography>
                        <Avatar className="avatar-container-small">
                          {' '}
                          <MiniQuestionMark />
                        </Avatar>
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="body2">Expected Duration</Typography>
                      <Typography className="caption" variant="caption">
                        {' '}
                        {job.duration && projectDuration[job.duration]}
                      </Typography>
                    </Box>
                    {renderedExpertise.length > 0 && (
                      <Box>
                        <Typography variant="body2">Expertise Level</Typography>
                        <Typography className="caption" variant="caption">
                          {' '}
                          <Typography variant="caption">{renderedExpertise}</Typography>
                        </Typography>
                      </Box>
                    )}
                    <Box>
                      <Typography variant="body2">Location</Typography>
                      <Typography className="caption" variant="caption">
                        {' '}
                        {job.preferred_coder_residence === 'USA_ONLY' ? 'USA' : 'Anywhere'}
                      </Typography>
                    </Box>
                    {job.timezone.length > 0 && (
                      <Box>
                        <Typography variant="body2">Time Zone</Typography>
                        <Typography className="caption" variant="caption">
                          {' '}
                          {job.timezone.map((time: any, index: number) => {
                            return (
                              <Typography key={generateUniqueID()} variant="caption">
                                {index === 0 ? time.split('-')[0] : `, ${time.split('-')[0]}`}
                              </Typography>
                            );
                          })}
                        </Typography>
                      </Box>
                    )}
                    <Box>
                      <Typography variant="body2">Budget</Typography>

                      {job.budget_type === 'FIXED' ? (
                        <Typography className="caption" variant="caption">
                          {' '}
                          {`$${job.maximum_budget}`}
                        </Typography>
                      ) : (
                        <Typography className="caption" variant="caption">
                          {' '}
                          {` $${job.minimum_hourly_rate.toFixed(
                            2
                          )} - $${job.maximum_hourly_rate.toFixed(2)}/hr`}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Box className="job-description-box">
                    <Typography className="desc" variant="body2">
                      {job.description}
                    </Typography>
                  </Box>
                  <Box pb={'20px'}>
                    {attachments.length > 0 && (
                      <Box textAlign={'start'} mb={1}>
                        <FilesUploaded attachments={attachments} />
                      </Box>
                    )}
                  </Box>
                </Box>
                {job.minimum_hourly_rate && job.maximum_hourly_rate && (
                  <Box className="job-budget-box">
                    {' '}
                    <Typography className="budget-text" variant="subtitle1">
                      {`$${job.minimum_hourly_rate.toFixed(2)}- $${job.maximum_hourly_rate.toFixed(
                        2
                      )} USD /hr`}
                    </Typography>
                  </Box>
                )}
              </Box>
              <Box border={'1px solid rgba(0, 0, 0, 0.12)'} />
              <Box className="job-detail-skill-box">
                {skills.length > 0 && (
                  <>
                    <Typography variant="subtitle1">Skills required</Typography>
                    <Box className="chip-box">
                      {skills.map((it: any, id: any) => {
                        return <Chip key={id} label={it} />;
                      })}
                    </Box>
                  </>
                )}
                <Box>
                  <Typography className="desc" variant="caption">
                    Job ID : {job.id}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        )}
      </Box>
      {job.status === 'ACTIVE' && (
        <Box className="mark--complete-button">
          <Button variant="outlined" className="milestone-status-pay-now">
            MARK AS COMPLETE
          </Button>
        </Box>
      )}
    </>
  );
};

export default DetailPage;
