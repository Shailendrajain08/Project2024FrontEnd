import React from 'react';
import { Box, Card, Grid } from '@mui/material';
import ProfileMenu from './ProfileMenu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarBorder from '@mui/icons-material/StarBorder';
import PersonalDetails from './PersonalDetails';
import Skills from './Skills';
import EducationalQualification from './EducationalQualification';
import Address from './Address';
import SocialMedia from './SocialMedia';
import Employment from './Employment';
import ContentHeader from './ContentHeader';
import PaymentInformation from './PaymentInformation';
import Security from './Security';

const menus = [
  {
    id: 0,
    icon: InboxIcon,
    label: 'Personal Details',
    children: [
      { id: 1, icon: StarBorder, label: 'Skills' },
      { id: 2, icon: InboxIcon, label: 'Educational Qualifications' },
      { id: 3, icon: StarBorder, label: 'Address' },
      { id: 4, icon: InboxIcon, label: 'Social Media presence' },
      { id: 5, icon: InboxIcon, label: 'Employment' }
    ]
  },

  { id: 6, icon: SendIcon, label: 'Payment Information' },
  { id: 7, icon: DraftsIcon, label: 'Security' }
];

const CoderProfile = () => {
  const [selectedMenu, setSelectedMenu] = React.useState(1);
  const [isEdit, setIsEdit] = React.useState(false);

  React.useEffect(() => {
    setIsEdit(false);
  }, [selectedMenu]);
  const toggleEditMode = () => {
    setIsEdit(!isEdit);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        {' '}
        <Card sx={{ m: 1 }}>
          <ProfileMenu menus={menus} getSelectedMenu={(id: any) => setSelectedMenu(id)} />
        </Card>
      </Grid>
      <Grid item xs={10}>
        <Box sx={{ m: 1 }}>
          {selectedMenu !== 6 && selectedMenu !== 7 && <PersonalDetails />}
          <Card sx={{ mt: 2, p: 8 }}>
            {selectedMenu == 1 && (
              <>
                {' '}
                <ContentHeader title="Skills" isEdit={isEdit} toggleEditMode={toggleEditMode} />
                <Skills isEdit={isEdit} toggleEditMode={toggleEditMode} />
              </>
            )}
            {selectedMenu == 2 && (
              <>
                {' '}
                <ContentHeader
                  title="Educational Qualifications"
                  isEdit={isEdit}
                  toggleEditMode={toggleEditMode}
                />
                <EducationalQualification isEdit={isEdit} toggleEditMode={toggleEditMode} />
              </>
            )}
            {selectedMenu == 3 && (
              <>
                {' '}
                <ContentHeader isEdit={isEdit} title="Address" toggleEditMode={toggleEditMode} />
                <Address isEdit={isEdit} toggleEditMode={toggleEditMode} />
              </>
            )}
            {selectedMenu == 4 && (
              <>
                {' '}
                <ContentHeader
                  isEdit={isEdit}
                  title="Social Media presence"
                  toggleEditMode={toggleEditMode}
                />
                <SocialMedia isEdit={isEdit} toggleEditMode={toggleEditMode} />
              </>
            )}
            {selectedMenu == 5 && (
              <>
                {' '}
                <ContentHeader isEdit={isEdit} title="Employment" toggleEditMode={toggleEditMode} />
                <Employment isEdit={isEdit} toggleEditMode={toggleEditMode} />
              </>
            )}
            {selectedMenu == 6 && (
              <>
                {' '}
                <ContentHeader
                  isEdit={isEdit}
                  title="Payment Information"
                  toggleEditMode={toggleEditMode}
                />
                <PaymentInformation isEdit={isEdit} toggleEditMode={toggleEditMode} />
              </>
            )}
            {selectedMenu == 7 && (
              <>
                {' '}
                <ContentHeader isEdit={true} title="Security" toggleEditMode={toggleEditMode} />
                <Security isEdit={isEdit} toggleEditMode={toggleEditMode} />
              </>
            )}
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CoderProfile;
