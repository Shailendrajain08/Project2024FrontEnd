import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as type from '../../ActionTypes';
import {
  getCoderAddressService,
  getCoderEducationalQualificationService,
  getCoderProfileService,
  getDigitalPresenceService,
  getSkillsAndExperienceService
} from '../../../services/profile/coder.service';

function* getCoderProfile(): any {
  try {
    const profileResponse = yield call(getCoderProfileService);
    yield put({
      type: type.GET_CODER_PROFILE_SUCCESS,
      profile: profileResponse.data?.results?.[0]
    });
  } catch (e: any) {
    yield put({ type: type.GET_CODER_PROFILE_FAILURE, message: e.message });
    console.warn(e.message);
  }
}

function* getCoderAddress(): any {
  try {
    const addressResponse = yield call(getCoderAddressService);
    yield put({
      type: type.GET_CODER_ADDRESS_SUCCESS,
      address: addressResponse.data?.results?.[0]
    });
  } catch (e: any) {
    yield put({ type: type.GET_CODER_ADDRESS_FAILURE, message: e.message });
    console.warn(e.message);
  }
}

function* getCoderDigitalPresence(): any {
  try {
    const digitalPresenceResponse = yield call(getDigitalPresenceService);
    yield put({
      type: type.GET_CODER_DIGITAL_PRESENCE_SUCCESS,
      digitalPresence: digitalPresenceResponse.data?.results?.[0]
    });
  } catch (e: any) {
    yield put({ type: type.GET_CODER_DIGITAL_PRESENCE_FAILURE, message: e.message });
    console.warn(e.message);
  }
}

function* getCoderSkillsAndExperience(): any {
  try {
    const [skillsAndExperienceResponse] = yield all([
      call(getSkillsAndExperienceService)
      // call(getAllTechnologyService)
    ]);

    const skillsAndExperience = skillsAndExperienceResponse.data?.results?.[0];

    yield put({
      type: type.GET_CODER_SKILLS_AND_EXPERIENCE_SUCCESS,
      skillsExperience: skillsAndExperience
    });
  } catch (e: any) {
    yield put({ type: type.GET_CODER_SKILLS_AND_EXPERIENCE_FAILURE, message: e.message });
    console.warn(e.message);
  }
}

function* getCoderEducationalQualification(): any {
  try {
    const educationalQualificationResponse = yield call(getCoderEducationalQualificationService);
    yield put({
      type: type.GET_CODER_EDUCATIONAL_QUALIFICATION_SUCCESS,
      educationQualification: educationalQualificationResponse.data?.results?.[0]
    });
  } catch (e: any) {
    yield put({ type: type.GET_CODER_EDUCATIONAL_QUALIFICATION_FAILURE, message: e.message });
    console.warn(e.message);
  }
}

function* profileSaga() {
  yield takeEvery(type.GET_CODER_PROFILE, getCoderProfile);
  yield takeEvery(type.GET_CODER_ADDRESS, getCoderAddress);
  yield takeEvery(type.GET_CODER_DIGITAL_PRESENCE, getCoderDigitalPresence);
  yield takeEvery(type.GET_CODER_SKILLS_AND_EXPERIENCE, getCoderSkillsAndExperience);
  yield takeEvery(type.GET_CODER_EDUCATIONAL_QUALIFICATION, getCoderEducationalQualification);
}

export default profileSaga;
