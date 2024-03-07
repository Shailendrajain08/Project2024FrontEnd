import { combineReducers } from 'redux';
import register from './register';
import login from './login';
import forgotPassword from './forgotPassword';
import job from './job';
import jobProposal from './jobProposal';
import jobFavaourite from './jobFavourite';
import jobPost from './jobPost';
import jobs from './jobs';
import adminDashboard from './adminDashboard';
import companydetailsReducers from './companydetail';
import technology from './technology';
import coderRegisteration from './coderRegisteration';
import timezones from './timezones';
import recommendedTech from './recommendedTech';
import addressReducer from './address';

import coderProfileReducer, {
  coderAddressReducer,
  coderDigitalPresence,
  coderEducationQualification,
  coderSkillsAndExperience
} from './profile/coder';
import digitalPresenceReducer from './digitalPresence';
import recommendedCoder from './recommended/coder.reducer';
import resetPassword from './resetPassword';
import resendVerifyEmailReducer from './resendVerifyEmail';
import VerifyEmailReducer from './verifyEmail';
import clientProfileReducer from './clientProfile';
import tncReducer from './tnc';

const rootReducer = combineReducers({
  register: register,
  userLoginData: login,
  passwordUpdate: forgotPassword,
  resetPassword: resetPassword,
  job: job,
  jobProposal: jobProposal,
  tncReducer: tncReducer,
  jobFavaourite: jobFavaourite as any,
  jobPost: jobPost,
  jobs: jobs,
  adminDashboard,
  companydetailsReducers: companydetailsReducers,
  profile: combineReducers({
    coderProfileReducer,
    coderAddressReducer: coderAddressReducer,
    coderDigitalPresence,
    coderSkillsAndExperience,
    coderEducationQualification
  }),
  technology: technology,
  coderRegisteration,
  timezones: timezones,
  clientProfileReducer: clientProfileReducer,
  digitalPresenceReducer: digitalPresenceReducer,
  addressReducer: addressReducer,
  recommendedTech,
  recommendedCoder,
  resendVerifyEmailReducer: resendVerifyEmailReducer,
  VerifyEmailReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
