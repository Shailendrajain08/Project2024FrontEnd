import { useForm } from 'react-hook-form';
import { Typography, Box, TextField, Button } from '@mui/material';
import { IDigitalPresence } from '../type';
import InputWithIcon from '../../../Common/Input/InputWithIcon';
import { CareerBlissSvg, YoutubeSvg } from '../../../../assets/svg';
import { GlassdoorLogo } from '../../../../assets/svg/GlassdoorLogo';
import './index.css';

const DigitalPresence = ({
  linkedin,
  github,
  stackoverflow,
  edit,
  handleEdit
}: IDigitalPresence) => {
  const { register, handleSubmit, getValues, setFocus } = useForm();
  const handleDigitalPresence = (data: any) => {
    handleEdit('digitalPresence');
    console.log('data', data);
  };
  return (
    <Box className="profile-management--digital-page">
      <Box className="personal-detail--digital-presence">
        <Typography variant="h5" className="digital-presence-title">
          Digital presence
        </Typography>
      </Box>
      <Box className="digital-presence--wrapper">
        {edit.isEdit ? (
          <Box className="profile-management-digital--field">
            <form onSubmit={handleSubmit(handleDigitalPresence)}>
              <Box className="profile-digital--input-field">
                <Box className="profile-digital--left-section">
                  <TextField
                    type="text"
                    id="linkedin"
                    defaultValue={linkedin}
                    {...register('linkedin')}
                  />
                  <TextField
                    type="text"
                    id="github"
                    defaultValue={github}
                    {...register('github')}
                  />
                  <TextField
                    type="text"
                    id="stackoverflow"
                    defaultValue={stackoverflow}
                    {...register('stackoverflow')}
                  />
                  <TextField
                    type="text"
                    id="anyother"
                    defaultValue={'Any Other'}
                    {...register('any other')}
                  />
                </Box>
              </Box>
            </form>
            <Box className="company-detail-btn-wrapper">
              <Button variant="outlined" className="profile-btn" size="large">
                Cancel
              </Button>

              <Button variant="contained" className="profile-btn" size="large">
                Update
              </Button>
            </Box>
          </Box>
        ) : (
          <>
            <Box className="profile-digital--input-field">
              <Box className="profile-digital--left-section">
                <Button className="digital-presence-btn" variant="outlined">
                  <GlassdoorLogo />
                  <Typography color={'#00A264'} variant="subtitle1">
                    Glassdoor
                  </Typography>
                </Button>
                <Button className="digital-presence-btn" variant="outlined">
                  <CareerBlissSvg />
                  <Typography variant="subtitle1" color={'#FFB900'}>
                    Career Bliss
                  </Typography>
                </Button>
                <Button className="digital-presence-btn" variant="outlined">
                  <YoutubeSvg />
                  <Typography color={'#F93232'} variant="subtitle1">
                    YouTube Channel
                  </Typography>
                </Button>

                {/* <InputWithIcon
                  type="text"
                  id="glassdoor"
                  label="glassdoor"
                  name="glassdoor"
                  LabelclassName="glassdoor-input"
                  icon={<GlassdoorSvg />}
                  register={register}
                  getValues={getValues}
                  setFocus={setFocus}
                />
                <InputWithIcon
                  type="text"
                  id="careerBlizz"
                  label="careerBlizz"
                  name="careerBlizz"
                  LabelclassName="careerBlizz-input"
                  icon={<CareerBlissSvg />}
                  register={register}
                  getValues={getValues}
                  setFocus={setFocus}
                />
                <InputWithIcon
                  type="text"
                  id="Youtube"
                  label="YouTube"
                  name="Youtube"
                  LabelclassName="Youtube-input"
                  icon={<YoutubeSvg />}
                  register={register}
                  getValues={getValues}
                  setFocus={setFocus}
                />
                <InputWithIcon
                  type="text"
                  id="AnyOther"
                  label="Any Other"
                  name="anyother"
                  LabelclassName="AnyOther-input"
                  register={register}
                  getValues={getValues}
                  setFocus={setFocus}
                /> */}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default DigitalPresence;
