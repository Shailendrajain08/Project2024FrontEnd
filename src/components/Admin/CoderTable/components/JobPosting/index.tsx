import React, { useEffect, useState } from 'react';
import { Box, Switch, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Pagination } from '../../../../Common';
import { coderAppliedJobs, coderJobData, coderProposalData } from '../../../../../constants/admin';
import { createActiveColumn, createJobColumn } from './tableColumns';
import { log } from 'console';

const CoderData: React.FC<any> = ({ data }) => {
  const { coderJobData, coderProposalData } = data;
  const [isJobColumn, setIsJobColumn] = useState<any>(true);

  // This might be required to use in future so not removed the commented code mentioned below//
  // const [state, setState] = useState<any>(
  //   data.map((job: any) => ({ id: job.id, checked: job.is_enabled }))
  // );
  const [checked, setChecked] = useState<boolean>(false);
  const [jobPostData, setJobPostData] = React.useState<any>([]);

  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const activeColumn = createActiveColumn({ checked, setChecked });
  const jobColumn = createJobColumn({ checked, setChecked });

  const filterJobs = (status: string, data: any[]) => {
    return data.filter((item: any) => item.status === status);
  };

  const filterAppliedJobs = (statuses: string[], data: any[]) =>
    data.filter((item: any) => statuses.includes(item.status));

  const matchJobDataToProposal = () => {
    return coderProposalData.map((proposal: any) => {
      const matchingJob = coderJobData.find((job: any) => job.id === proposal.job_post);

      return {
        ...proposal,
        title: matchingJob?.title || '',
        skills: matchingJob?.skills || [],
        preferred_coder_residence: matchingJob?.preferred_coder_residence || ''
      };
    });
  };

  const matchJobDataToAppliedJob = () => {
    return coderAppliedJobs.map((proposal: any) => {
      const matchingAppliedJob = coderJobData.find((job: any) => job.id === proposal.job_post);

      return {
        ...proposal,
        title: matchingAppliedJob?.title || '',
        skills: matchingAppliedJob?.skills || [],
        preferred_coder_residence: matchingAppliedJob?.preferred_coder_residence || ''
      };
    });
  };

  enum jobStatus {
    ActiveJobs = 'ACTIVE',
    JobsOffered = 'ACCEPTED_BY_CLIENT',
    AppliedJobs = 'REVIEW IN PROPOSAL',
    CompletedJobs = 'COMPLETED'
  }

  useEffect(() => {
    if (jobPostData.length === 0) {
      setJobPostData(filterJobs(jobStatus.ActiveJobs, coderJobData));
    }
  }, []);

  const handlePagination = (e: any, value: number) => {
    currentPage;
  };

  const handleChange = async (newValue: string) => {
    setSelectedText(newValue); // Set the selected text
    switch (newValue) {
      case '1':
        setJobPostData(filterJobs('ACTIVE', coderJobData));
        setIsJobColumn(true);
        break;
      case '2':
        setJobPostData(
          filterAppliedJobs(['ACCEPTED_BY_CLIENT', 'REJECTED_BY_CODER'], matchJobDataToProposal())
        );
        setIsJobColumn(false);
        break;
      case '3':
        setJobPostData(
          filterAppliedJobs(['REVIEW IN PROPOSAL', 'PROFILE IN REVIEW'], matchJobDataToAppliedJob())
        );
        setIsJobColumn(false);
        break;
      case '4':
        setJobPostData(filterJobs('COMPLETED', coderJobData));
        setIsJobColumn(true);
        break;
      default:
        break;
    }
  };

  const coderMenu = [
    { index: 1, label: 'Active Jobs' },
    { index: 2, label: 'Jobs Offered' },
    { index: 3, label: 'Applied Jobs' },
    { index: 4, label: 'Completed Jobs' }
  ];

  return (
    <>
      <Box className="job-posting-tables">
        <Box className="job-status">
          {coderMenu.map((cMenu) => (
            <Box
              key={cMenu.index}
              onClick={() => handleChange(cMenu.index.toString())}
              width={'146px'}
              height={'40px'}
              textAlign={'start'}>
              <Typography
                className={
                  selectedText === cMenu.index.toString() ? 'selected-text' : 'clickable-text'
                }>
                {cMenu.label}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className="tableData">
          <DataGrid
            rows={jobPostData}
            columns={isJobColumn ? activeColumn : jobColumn}
            autoHeight
            hideFooterPagination={true}
            hideFooter={true}
            rowHeight={72}
          />
        </Box>
      </Box>
      <Box mt={'30px'}>
        <Pagination
          defaultOption={{ label: 5, value: 5 }}
          options={[{ label: 5, value: 5 }]}
          pageCount={10}
          currentPage={currentPage}
          handlePageChange={handlePagination}
        />
      </Box>
    </>
  );
};
export default CoderData;
