import React, { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, Card, Typography } from '@mui/material';
import CoWorker from './components/CoWorker';
import Coder from './components/Coder';
import './index.css';
import { Modal, Tabs } from '../../../Common';
import InviteFrom from './components/InviteForm';

const MyTeam: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, control } = useForm();
  const tabList = [
    { id: 1, label: 'Co-worker' },
    { id: 2, label: 'Coder' }
  ];

  const renderData: any = {
    0: <CoWorker />,
    1: <Coder />
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInvite = (data: any) => {
    handleClose();
  };

  return (
    <Fragment>
      <Card className="team-card">
        <Box className="team-top-box">
          <Box className="team-top-box--container">
            <Typography variant="h3">My Team</Typography>
            <Button variant="outlined" onClick={() => setIsOpen(true)}>
              Invite
            </Button>
          </Box>
        </Box>
        <Box className="team-card-content">
          <Tabs tabList={tabList} callBackFnc={(data) => setIndex(data)}>
            {renderData[index]}
          </Tabs>
        </Box>
        <Box textAlign={'end'} pb={'14px'} pr={'12px'}>
          <Button>View All</Button>
        </Box>
      </Card>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={handleClose}
          title="Invite to your Hirecoder team"
          modalBodyWidth="722px"
          closeIcon={true}>
          <InviteFrom
            handleClose={handleClose}
            handleInvite={handleInvite}
            register={register}
            handleSubmit={handleSubmit}
            Controller={Controller}
            control={control}
          />
        </Modal>
      )}
    </Fragment>
  );
};

export default MyTeam;
