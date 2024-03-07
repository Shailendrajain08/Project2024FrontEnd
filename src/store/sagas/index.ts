import { all, fork } from 'redux-saga/effects';
import registerSaga from './register';
import loginSaga from './login';
import forgotPasswordSaga from './forgotPassword';
import jobsSaga from './jobs';
import adminDashboardSaga from './adminDashboard';
import proposalSaga from './proposal';
import profileSaga from './profile/coder.sagas';
import coderRegistration from './coderRegistration';
import timezoneSaga from './timezone';
import recommendedTechSaga from './recommendedTech';
import recommendedCoderSaga from './recommended/coder.saga';
import resetPasswordSaga from './resetPassword';
import companyDetailSaga from './companyDetail';
import clientProfileSaga from './clientProfile';
import TnCSaga from './tnc';

export function* rootSaga() {
  yield all([
    fork(registerSaga),
    fork(loginSaga),
    fork(forgotPasswordSaga),
    fork(jobsSaga),
    fork(companyDetailSaga),
    fork(TnCSaga),
    fork(clientProfileSaga),
    fork(proposalSaga),
    fork(recommendedTechSaga),
    fork(recommendedCoderSaga),
    fork(profileSaga),
    fork(recommendedTechSaga),
    fork(resetPasswordSaga),
    fork(coderRegistration),
    fork(timezoneSaga),
    fork(recommendedTechSaga),
    fork(adminDashboardSaga)
  ]);
}
