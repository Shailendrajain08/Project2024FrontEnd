import { Avatar, Box, Typography } from '@mui/material';
import { personalDetail } from '../constant';
import { EditI } from '../type';
import Profile from './Profile';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/reducers';
import { useEffect } from 'react';
import { isObjectEmpty } from '../../../../helper/utils';
import { SpinnerLoader } from '../../../Common';
import { fetchCoderProfile } from '../../../../store/actions/profile/coder.actionCreators';

interface PersonalDetailsProps {
  edit: EditI;
  isRole?: string;
  selectedMenu?: number;
  setEdit: (edit: EditI) => void;
}

const PersonalDetails = ({ edit, setEdit, isRole, selectedMenu }: PersonalDetailsProps) => {
  // const { basicInfo } = personalDetail;

  const dispatch = useDispatch();
  const { profile: basicInfo, loading } = useSelector(
    (state: RootState) => state.profile.coderProfileReducer
  );

  useEffect(() => {
    if (isObjectEmpty(basicInfo)) {
      dispatch(fetchCoderProfile());
    }
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Box className="personal-detail--main-page">
      {edit.isEdit && selectedMenu == 1 ? null : (
        <>
          <Profile
            handleEdit={function (): void {
              throw new Error('Function not implemented.');
            }}
            {...basicInfo}
            edit={edit}
            setEdit={setEdit}
            selectedMenu={selectedMenu}
          />

          <Box className="separater-line"></Box>
        </>
      )}
    </Box>
  );
};

export default PersonalDetails;
