import { useState } from 'react';
import { Button } from '@mui/material';

import InviteCoworkerForm from './InviteCoworker';
import ModalComponent from '../../Common/Modal';

const CoworkerFormModel = () => {
  // Modal state and functions
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInviteCoder = (data: any) => {
    console.log('Inviting codeCoworkerr with data:', data);
    closeModal();
  };

  return (
    <div>
      <Button onClick={openModal}>Invite Coworker</Button>
      {/* on click this button model pop will be open */}
      <ModalComponent
        open={isModalOpen}
        onClose={closeModal}
        title="Invite coworkers to Your Hire Coder Team">
        <InviteCoworkerForm onCancel={closeModal} onInvite={handleInviteCoder} />
      </ModalComponent>
    </div>
  );
};

export default CoworkerFormModel;
