import React, { Fragment } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import './index.css';

const ProposalDetail: React.FC<TProposal> = ({ description, job_post, attachments }) => {
  return (
    <Fragment>
      <Box className="proposal-detail--description-box">
        <Box className="proposal-detail--proposal-box">
          <Typography variant="subtitle1" className="proposal-detail--description-title">
            {'Job proposal'}
          </Typography>
          <Typography variant="caption">{description}</Typography>
          {attachments && attachments.length > 0 && (
            <Fragment>
              <Typography variant="subtitle2" marginTop={2}>
                Files
              </Typography>
              <Box display={'flex'} alignItems={'center'} mt={1.5} columnGap={3}>
                {attachments.map((file: any) => {
                  return (
                    <Box key={file.id} className="proposal-detail--file">
                      <Box className="proposal-detail--file-icon-box">
                        <FileOpenOutlinedIcon />
                      </Box>
                      <Typography variant="subtitle2">{file.name}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Fragment>
          )}
        </Box>
      </Box>
      <Box className="proposal-detail--skill-box">
        {' '}
        <Box textAlign={'start'}>
          <Typography variant="subtitle1">{'Skills'}</Typography>
          {job_post?.skills.map((value: string) => {
            return <Chip label={value} key={value} className="proposal-detail--skill-chip" />;
          })}
        </Box>
      </Box>
    </Fragment>
  );
};

export default ProposalDetail;
