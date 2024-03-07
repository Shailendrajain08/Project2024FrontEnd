import React, { Fragment } from 'react';
import {
  Button,
  Typography,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Chip
} from '@mui/material';
import { Modal } from '../../../../Common';
import SourceIcon from '@mui/icons-material/Source';
import { PencilIcon } from './Svg/PencilIcon';
import { UploadFileIcon } from './Svg/UploadFileIcon';

interface IJobFormField {
  label: string;
  value: any;
  children: any;
  isShowEditButton: boolean;
}

const JobFormField = ({ label, value, children, isShowEditButton }: IJobFormField) => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  return (
    <Fragment>
      <Box className="preview-wrapper">
        <Box className="preview-heading-section">
          <Typography variant="h6" component="span" textAlign="start">
            {label}
          </Typography>
          {!isShow && isShowEditButton && (
            <Typography
              component="span"
              className="edit-icon"
              onClick={() => {
                setIsShow(!isShow);
              }}>
              <PencilIcon />
            </Typography>
          )}
        </Box>
        <Fragment>
          {label === 'Skills' ? (
            <Box textAlign="start" className="preview-skill-wrapper">
              {value &&
                value.map((el: string, i: number) => {
                  return (
                    <Box key={i}>
                      <Chip label={el} />
                    </Box>
                  );
                })}
            </Box>
          ) : (
            <Box className="sub-heading-wrapper">
              {label === 'Attachment' ? (
                <Box className="file-container">
                  {value &&
                    value.map((el: any, i: number) => {
                      return (
                        <Box key={i} className="file-wrapper">
                          <Box>
                            <UploadFileIcon />
                          </Box>
                          <Box className="file-text">{el?.name}</Box>
                        </Box>
                      );
                    })}
                </Box>
              ) : (
                <Box
                  component="div"
                  textAlign="start"
                  marginLeft={1}
                  className="preview-sub-heading">
                  {value}
                </Box>
              )}
            </Box>
          )}
        </Fragment>
      </Box>
      {isShow && (
        <Modal
          open={isShow}
          onClose={() => {
            setIsShow(false);
          }}
          title={label}>
          <Box className="modal-children">{children}</Box>
          <Box className="modal-btn-container">
            <Box className="modal-btn">
              <Button
                variant="contained"
                onClick={() => {
                  //here write logic when api implement to update data
                  setIsShow(!isShow);
                }}>
                Save
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setIsShow(!isShow);
                }}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </Fragment>
  );
};
export default JobFormField;
