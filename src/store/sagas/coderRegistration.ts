import { call, put, takeEvery } from 'redux-saga/effects';
import { primarySkillsService } from '../../services/coderRegistration';
import * as type from '../ActionTypes';

function* getPrimarySkills(): any {
  try {
    const data = yield call(primarySkillsService);
    if (data?.statusCode === 200) {
      yield put({
        type: type.GET_PRIMARY_SKILLS_SUCCESS,
        skills: data.data?.results
      });
    } else {
      yield put({ type: type.GET_PRIMARY_SKILLS_FAILURE, skills: [] });
    }
  } catch (e: any) {
    yield put({ type: type.GET_PRIMARY_SKILLS_FAILURE, skills: [] });
  }
}

function* primarySkillsSaga() {
  yield takeEvery(type.GET_PRIMARY_SKILLS, getPrimarySkills);
}

export default primarySkillsSaga;
