import { Box } from '@mui/material';
import { personalDetail } from '../constant';
import { EditI } from '../type';
import Profile from './Profile';
import './index.css';

interface PersonalDetailsProps {
  edit: EditI;
  handleEdit: () => void;
  personalDetail: any;
}

const PersonalDetails = ({ edit, handleEdit, personalDetail }: PersonalDetailsProps) => {
  const { basicInfo } = personalDetail;
  return (
    <Box className="personal-detail--main-page">
      <Profile {...basicInfo} edit={edit} handleEdit={handleEdit} />
    </Box>
  );
};

export default PersonalDetails;
