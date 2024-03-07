import React, { Fragment } from 'react';
import { Box, Typography } from '@mui/material';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import './index.css';
const FilesUploaded: React.FC<any> = ({ files }) => {
  const renderFiles = () => {
    return files?.map((file: string, index: number) => {
      return (
        <>
          {file != null ? (
            <>
              <Box display={'flex'} columnGap={'6px'} key={index}>
                <FileOpenOutlinedIcon className="file--icon" />
                <Typography variant="subtitle2">{file}</Typography>
              </Box>
            </>
          ) : null}
        </>
      );
    });
  };
  return (
    <Fragment>
      {files && files != null && (
        <Box p={0}>
          <Typography variant="subtitle2" fontSize={14} pb={'10px'}>
            Files
          </Typography>
          <Box display={'flex'} columnGap={'24px'}>
            {renderFiles()}
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default FilesUploaded;
