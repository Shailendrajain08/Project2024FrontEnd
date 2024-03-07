import { ReactNode } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CloseIconSvg } from '../../../assets/svg';
import './index.css';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: any;
  children: ReactNode;
  modalBodyWidth?: string;
  id?: any;
  height?: string;
  closeIcon?: boolean;
  closeIconCustomWidth?: string;
}

const ModalComponent = ({
  open,
  onClose,
  title,
  children,
  id,
  closeIcon = false,
  modalBodyWidth = '',
  closeIconCustomWidth = ''
}: ModalProps) => {
  const isLargeScreen = useMediaQuery('(min-width:1024px)');
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal-container">
      <Box className="modal-body" sx={{ width: isLargeScreen ? modalBodyWidth : 'fit-content' }}>
        {title && (
          <Box className="model-header">
            <Typography id="modal-title" variant="h2" className="modal-title">
              {title}
            </Typography>
            {closeIcon === true && (
              <Box
                onClick={onClose}
                className={
                  closeIconCustomWidth ? `close-icon-box ${closeIconCustomWidth}` : 'close-icon-box'
                }>
                <CloseIconSvg />
              </Box>
            )}
          </Box>
        )}
        <Box className="modal-content" id="modal-modal-description">
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
