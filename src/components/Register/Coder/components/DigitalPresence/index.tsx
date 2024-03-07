import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { coderPayload } from '../../../utils';
import {
  createDigitalPresence,
  resetAddressStatus,
  signup,
  updateDigitalPresence
} from '../../../../../store/actions/register';
import { FromPropsI } from '../../../type';
import { coder } from '../../../validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import InputWithIcon from '../../../../Common/Input/InputWithIcon';
import { GitHubSvg, LinkedInSvg, StackOverFlowSvg } from '../svg';
import './index.css';
import { useEffect, useState } from 'react';
import SnackBarComponent from '../../../../Common/SnackBar';
import useSnackBarMessage from '../../../../../helper/customHooks/useFetchMessage';

const DigitalPresence = ({ setFormType, setFormData, formData, userData }: FromPropsI) => {
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
    resolver: yupResolver(coder.digitalForm),
    defaultValues: {
      linkedin_url: digitalPresenceData?.digitaldetails?.linkedin_url
        ? digitalPresenceData?.digitaldetails?.linkedin_url
        : '',
      github_url: digitalPresenceData?.digitaldetails?.github_url
        ? digitalPresenceData?.digitaldetails?.github_url
        : '',
      stackoverflow_url: digitalPresenceData?.digitaldetails?.stackoverflow_url
        ? digitalPresenceData?.digitaldetails?.stackoverflow_url
        : ''
    }
  });
  const [showMessages, setShowMessages]: any = useSnackBarMessage(
    digitalPresenceData?.digitalStatus,
    digitalPresenceData?.digitaldetails?.message,
    digitalPresenceData?.error
  );

  useEffect(() => {
    if (digitalPresenceData?.digitalStatus) {
      setFormType('verifyEmail');
    }
  }, [digitalPresenceData, setFormType]);
  const handleDigitalPresence = (data: any) => {
    setShowMessages({ showSnackBar: false });
    if (digitalPresenceData?.digitaldetails?.id?.length > 0) {
      const { linkedin_url, github_url, stackoverflow_url } = dirtyFields;
      if (linkedin_url || github_url || stackoverflow_url) {
        dispatch(updateDigitalPresence(data, userId));
      } else {
        setFormType('verifyEmail');
      }
    } else {
      dispatch(createDigitalPresence(data));
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(handleDigitalPresence)}>
        <Box>
          <Box className="digital-heading">
            <Typography variant="h1" fontSize={32}>
              Digital Presence
            </Typography>
          </Box>
          <Box className="digial-coder-form">
            <InputWithIcon
              type="text"
              id="linkedin_url"
              label={digitalPresenceData?.digitaldetails?.linkedin_url ? '' : 'linkedIn'}
              icon={!digitalPresenceData?.digitaldetails?.linkedin_url && <LinkedInSvg />}
              name="linkedin_url"
              LabelclassName="linkedIn-input"
              register={register}
              getValues={getValues}
              setFocus={setFocus}
              errors={errors}
            />
            <InputWithIcon
              type="text"
              id="github_url"
              label={digitalPresenceData?.digitaldetails?.github_url ? '' : 'GitHub'}
              icon={!digitalPresenceData?.digitaldetails?.github_url && <GitHubSvg />}
              name="github_url"
              LabelclassName="github-input"
              register={register}
              getValues={getValues}
              setFocus={setFocus}
              errors={errors}
            />
            <InputWithIcon
              type="text"
              id="stackoverflow_url"
              label={digitalPresenceData?.digitaldetails?.stackoverflow_url ? '' : 'StackOverFlow'}
              icon={!digitalPresenceData?.digitaldetails?.stackoverflow_url && <StackOverFlowSvg />}
              name="stackoverflow_url"
              LabelclassName="stackoverflow-input"
              register={register}
              getValues={getValues}
              setFocus={setFocus}
              errors={errors}
            />
          </Box>
        </Box>
        <Box className="button-container">
          <Button
            size="large"
            variant="outlined"
            className="back-btn"
            onClick={() => {
              dispatch(resetAddressStatus());
              setFormType('address');
            }}>
            Back
          </Button>
          <Button type="submit" variant="contained" size="large">
            {digitalPresenceData.loading ? (
              <CircularProgress size={30} color="secondary" style={{ position: 'absolute' }} />
            ) : (
              <>Next</>
            )}
          </Button>
        </Box>
      </form>
      <Box>
        {showMessages?.showSnackBar && (
          <SnackBarComponent
            isOpen={showMessages?.showSnackBar}
            isClose={(prev: any) => ({
              ...prev,
              showSnackBar: false
            })}
            message={showMessages?.snackBarMessage}
            messageType={showMessages.messageType}
          />
        )}
      </Box>
    </Box>
  );
};

export default DigitalPresence;
