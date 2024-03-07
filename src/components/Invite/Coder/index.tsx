import React, { useState } from 'react';
import { Button } from '@mui/material';

import InviteCoderForm from './InviteCoder';
import ModalComponent from '../../Common/Modal';

const CoderFormModel = () => {
  // Modal state and functions
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInviteCoder = (data: any) => {
    console.log('Inviting coder with data:', data);
    closeModal();
  };

  return (
    <div>
      <Button onClick={openModal}>Invite Coder</Button>
      {/* on click this button model pop will be open */}
      <ModalComponent
        open={isModalOpen}
        onClose={closeModal}
        title="Invite Coders to Your Hire Coder Team">
        <InviteCoderForm onCancel={closeModal} onInvite={handleInviteCoder} />
      </ModalComponent>
    </div>
  );
};

export default CoderFormModel;
