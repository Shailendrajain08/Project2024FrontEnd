import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { FromPropsI } from '../../../type';
import InputWithIcon from '../../../../Common/Input/InputWithIcon';
import { GlassdoorSvg, YoutubeSvg, CareerBlissSvg } from '../../../../../assets/svg';
import './index.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { clientDigitalPresence } from '../../../validationSchema';
import {
  createDigitalPresence,
  resetAddressStatus,
  updateDigitalPresence
} from '../../../../../store/actions/register';
import { useEffect, useState } from 'react';
import SnackBarComponent from '../../../../Common/SnackBar';

const DigitalPresence = ({ setFormType }: FromPropsI) => {
  const dispatch = useDispatch();
  const digitalPresenceData = useSelector((state: any) => state?.digitalPresenceReducer);
  const userId = digitalPresenceData?.digitaldetails?.id;
  const {
    register,
    handleSubmit,
    getValues,
    setFocus,
    formState: { errors, dirtyFields }
  } = useForm({
    resolver: yupResolver(clientDigitalPresence),
    defaultValues: {
      glassdoor_url: digitalPresenceData?.digitaldetails?.glassdoor_url
        ? digitalPresenceData?.digitaldetails?.glassdoor_url
        : '',
      career_bliss_url: digitalPresenceData?.digitaldetails?.career_bliss_url
        ? digitalPresenceData?.digitaldetails?.career_bliss_url
        : '',
      youtube_url: digitalPresenceData?.digitaldetails?.youtube_url
        ? digitalPresenceData?.digitaldetails?.youtube_url
        : '',
      other_social_url: digitalPresenceData?.digitaldetails?.other_social_url
        ? digitalPresenceData?.digitaldetails?.other_social_url
        : ''
    }
  });

  const [showMessages, setShowMessages] = useState({
    showSnackBar: false,
    snackBarMessage: '',
    messageType: ''
  });
  useEffect(() => {
    if (digitalPresenceData?.digitalStatus) {
      setFormType('verifyEmail');
    } else {
      if (digitalPresenceData?.error) {
        setShowMessages((prev) => ({
          ...prev,
          showSnackBar: true,
          snackBarMessage: digitalPresenceData?.error,
          messageType: 'error'
        }));
      }
    }
  }, [digitalPresenceData, setFormType]);
  const handleDigitalPresence = (data: any) => {
    if (digitalPresenceData?.digitaldetails?.id?.length > 0) {
      if (
        dirtyFields.glassdoor_url ||
        dirtyFields.career_bliss_url ||
        dirtyFields.youtube_url ||
        dirtyFields.other_social_url
      ) {
        dispatch(updateDigitalPresence(data, userId));
      } else {
        setFormType('verifyEmail');
      }
    } else {
      dispatch(createDigitalPresence(data));
    }
  };

  return (
    <Box className="digitalPresence-container">
      <form onSubmit={handleSubmit(handleDigitalPresence)}>
        <Box>
          <Box className="digital-presence-header">
            <Typography variant="h1">Digital Presence</Typography>
          </Box>
          <Box className="digital-form-wrapper">
            <InputWithIcon
              type="text"
              id="glassdoor_url"
              label={digitalPresenceData?.digitaldetails?.glassdoor_url ? '' : 'Glassdoor'}
              name="glassdoor_url"
              LabelclassName="glassdoor-input"
              icon={!digitalPresenceData?.digitaldetails?.glassdoor_url && <GlassdoorSvg />}
              register={register}
              getValues={getValues}
              setFocus={setFocus}
              errors={errors}
            />
            <InputWithIcon
              type="text"
              id="career_bliss_url"
              label={digitalPresenceData?.digitaldetails?.career_bliss_url ? '' : 'Career Bliss'}
              name="career_bliss_url"
              LabelclassName="careerBlizz-input"
              icon={!digitalPresenceData?.digitaldetails?.career_bliss_url && <CareerBlissSvg />}
              register={register}
              getValues={getValues}
              setFocus={setFocus}
              errors={errors}
            />
            <InputWithIcon
              type="text"
              id="youtube_url"
              label={digitalPresenceData?.digitaldetails?.youtube_url ? '' : 'YouTube'}
              name="youtube_url"
              LabelclassName="Youtube-input"
              icon={!digitalPresenceData?.digitaldetails?.youtube_url && <YoutubeSvg />}
              register={register}
              getValues={getValues}
              errors={errors}
              setFocus={setFocus}
            />
            <InputWithIcon
              type="text"
              id="other_social_url"
              label={digitalPresenceData?.digitaldetails?.other_social_url ? '' : 'Any Other'}
              name="other_social_url"
              LabelclassName="AnyOther-input"
              register={register}
              errors={errors}
              getValues={getValues}
              setFocus={setFocus}
            />
          </Box>
          <Box className="btn-container">
            <Button
              variant="outlined"
              size="large"
              className="client-outlined-btn"
              onClick={() => {
                dispatch(resetAddressStatus());
                setFormType('address');
              }}>
              Back
            </Button>
            <Button variant="contained" type="submit" size="large">
              {digitalPresenceData.loading ? (
                <CircularProgress size={30} color="secondary" style={{ position: 'absolute' }} />
              ) : (
                <>Next</>
              )}
            </Button>
          </Box>
        </Box>
      </form>
      <Box>
        {showMessages.showSnackBar && (
          <SnackBarComponent
            isOpen={showMessages.showSnackBar}
            isClose={(prev: any) => ({
              ...prev,
              showSnackBar: false
            })}
            message={showMessages.snackBarMessage}
            messageType={showMessages.messageType}
          />
        )}
      </Box>
    </Box>
  );
};

export default DigitalPresence;
