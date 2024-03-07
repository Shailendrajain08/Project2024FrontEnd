import { Box, Typography } from '@mui/material';
import './index.css';
import { EditI } from '../type';
import { personalDetail } from '../constant';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoderEducation } from '../../../../store/actions/profile/coder.actionCreators';
import { SpinnerLoader } from '../../../Common';
import { ICoderCertification, ICoderDegree } from '../../../../types/shared.types';
import { isObjectEmpty } from '../../../../helper/utils';
import { RootState } from '../../../../store/reducers';

interface EducationDetailsProps {
  edit: EditI;
  handleEdit: () => void;
}

const EducationScreen = ({ edit, handleEdit }: EducationDetailsProps) => {
  //const { educationDetails } = personalDetail;

  const dispatch = useDispatch();

  const { educationQualification: educationDetails, loading } = useSelector(
    (state: RootState) => state.profile.coderEducationQualification
  );

  console.log('educationDetails===', educationDetails);

  useEffect(() => {
    if (isObjectEmpty(educationDetails)) {
      dispatch(fetchCoderEducation());
    }
  }, []);

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Box className="coder-profile--education-container">
      <Box className="coder-profile--degree">
        <Typography variant="subtitle1" color={'rgba(0, 0, 0, 0.87)'} fontWeight={'500'}>
          Degree
        </Typography>
        {educationDetails &&
          educationDetails?.degrees?.map((item: ICoderDegree) => {
            return (
              <Box key={item.id} className="degree-wrapper">
                <Box className="degree-section">
                  <Typography
                    component={'div'}
                    variant="subtitle2"
                    color={
                      'rgba(0, 0, 0, 0.87)'
                    }>{`${item.degree} - ${item.passing_year}`}</Typography>
                  <Typography
                    component={'div'}
                    variant="body2"
                    color={
                      'rgba(0, 0, 0, 0.60)'
                    }>{`${item.university}, ${item.college}`}</Typography>
                </Box>
              </Box>
            );
          })}
      </Box>
      <Box className="coder-profile--certification">
        <Typography variant="subtitle1" fontWeight={'500'} color={'rgba(0, 0, 0, 0.87)'}>
          Certifications
        </Typography>
        {educationDetails &&
          educationDetails?.certificates?.map((item: ICoderCertification) => {
            return (
              <Box key={item.id} className="certification-wrapper">
                <Box className="certification-section">
                  <Typography
                    component={'div'}
                    variant="subtitle2"
                    color={'rgba(0, 0, 0, 0.87)'}>{`${item.certificate_name}`}</Typography>
                  <Typography
                    component={'div'}
                    variant="body2"
                    color={'rgba(0, 0, 0, 0.60)'}>{`${item.year_of_completion}`}</Typography>
                </Box>
              </Box>
            );
          })}
      </Box>
      <Box className="separater-line"></Box>
      <Box className="coder-profile--file-wrapper">
        <Box className="file--section">
          <Typography variant="subtitle1" fontWeight={'500'}>
            Files
          </Typography>
          <Box className="file--open-icon">
            <Box className="file--icon">
              <FileOpenOutlinedIcon />
            </Box>
            <Typography variant="subtitle2">Resume</Typography>
          </Box>
        </Box>
        <Box className="coder--portfolio-section">
          <Typography variant="subtitle1" fontWeight={'500'}>
            Portfolio
          </Typography>
          {educationDetails && educationDetails.portfolio && (
            <Box className="portfolio--wrapper">
              <img src={`${educationDetails?.portfolio}`} alt="Portfolio Thumbnail" />
              <Box className="portfolio--label-section">
                <Typography variant="body1">{educationDetails.portfolio}</Typography>
                <Typography variant="body2" className="portfolio--desc">
                  {}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EducationScreen;
