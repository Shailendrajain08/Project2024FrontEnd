import { useForm } from 'react-hook-form';
import { Typography, Box, TextField, Button } from '@mui/material';
import { IDigitalPresence } from '../type';
import { LinkedInSvg, GitHubSvg, StackOverFlowSvg } from '../../../../assets/svg';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoderDigitalPresence } from '../../../../store/actions/profile/coder.actionCreators';
import { SpinnerLoader } from '../../../Common';
import { isObjectEmpty } from '../../../../helper/utils';
import { RootState } from '../../../../store/reducers';

const SocialDigitalPresence = ({
  linkedin,
  github,
  stackoverflow,
  edit,
  handleEdit
}: IDigitalPresence) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, getValues, setFocus } = useForm();
  const handleDigitalPresence = (data: any) => {
    handleEdit('digitalPresence');
    console.log('data', data);
  };

  const { digitalPresence, loading } = useSelector(
    (state: RootState) => state.profile.coderDigitalPresence
  );
  useEffect(() => {
    if (isObjectEmpty(digitalPresence)) {
      dispatch(fetchCoderDigitalPresence());
    }
  }, []);

  const { github_url = '', linkedin_url = '', stackoverflow_url = '' } = digitalPresence;

  if (loading) {
    return <SpinnerLoader />;
  }

  return (
    <Box className="coder-profile-management--digital-page">
      <Box className="coder-detail--social-presence">
        <Typography variant="subtitle1" color={'rgba(0, 0, 0, 0.87)'}>
          Social Digital Presence
        </Typography>
      </Box>
      <Box className="digital-presence--wrapper">
        {edit.isEdit ? (
          <Box className="profile-management-digital--field">
            <form onSubmit={handleSubmit(handleDigitalPresence)}>
              <Box className="coder-profile-digital--input-field">
                <Box className="coder-profile-digital--left-section">
                  <TextField
                    type="text"
                    id="linkedinInput"
                    defaultValue={linkedin}
                    {...register('linkedin')}
                    value={linkedin_url}
                  />
                  <TextField
                    type="text"
                    id="github"
                    defaultValue={github}
                    {...register('github')}
                    value={github_url}
                  />
                  <TextField
                    type="text"
                    id="stackoverflow"
                    defaultValue={stackoverflow}
                    {...register('stackoverflow')}
                    value={stackoverflow_url}
                  />
                </Box>
              </Box>
            </form>
          </Box>
        ) : (
          <>
            <Box className="coder-profile-digital--input-field">
              <Box className="coder-profile-digital--left-section">
                {linkedin_url && (
                  <Button
                    className="coder-profile-digital-presence"
                    color="primary"
                    href={linkedin_url}
                    variant="outlined">
                    <LinkedInSvg />
                    <Typography variant="subtitle1" color={'#2563EB'}>
                      LinkedIn
                    </Typography>
                  </Button>
                )}
                {github_url && (
                  <Button
                    className="coder-profile-digital-presence"
                    color="primary"
                    href={github_url}
                    variant="outlined">
                    <GitHubSvg />
                    <Typography variant="subtitle1" color={'#000000DE'}>
                      Github
                    </Typography>
                  </Button>
                )}
                {stackoverflow_url && (
                  <Button
                    className="coder-profile-digital-presence"
                    color="primary"
                    href={stackoverflow_url}
                    variant="outlined">
                    <StackOverFlowSvg />
                    <Typography variant="subtitle1" color={'#F7790B'}>
                      StackOverflow
                    </Typography>
                  </Button>
                )}

                {/* <InputWithIcon
                  type="text"
                  id="linkedin"
                  label="LinkedIn"
                  name="linkedin"
                  LabelclassName="linkedIn-input"
                  icon={<LinkedInSvg />}
                  register={register}
                  getValues={getValues}
                  setFocus={setFocus}
                />
                <InputWithIcon
                  type="text"
                  id="github"
                  label="GitHub"
                  name="github"
                  LabelclassName="github-input"
                  icon={<GitHubSvg />}
                  register={register}
                  getValues={getValues}
                  setFocus={setFocus}
                />
                <InputWithIcon
                  type="text"
                  id="stackoverflow"
                  label="stackOverflow"
                  name="stackoverflow"
                  LabelclassName="stackoverflow-input"
                  icon={<StackOverFlowSvg />}
                  register={register}
                  getValues={getValues}
                  setFocus={setFocus}
                /> */}
              </Box>
            </Box>
            {/* this comment code will use when edit functionlity implement  */}
            {/* <Box className="company-detail-btn-wrapper">
              <Button variant="outlined" className="outline-profile-btn" size="large">
                Cancel
              </Button>

              <Button variant="contained" className="profile-btn" size="large">
                Update
              </Button>
            </Box> */}
          </>
        )}
      </Box>
    </Box>
  );
};

export default SocialDigitalPresence;
