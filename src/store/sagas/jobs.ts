import { call, put, takeEvery } from 'redux-saga/effects';
import { getJobByIdService, getJobsService } from '../../services/jobs';
import * as type from '../ActionTypes';

import { saveSelectedSkillService, saveSkillExperienceService } from '../../services/skill';

import {
  createJobPost,
  getAllTechnologyService,
  updateJobPostService
} from '../../services/jobPost';
import { successStatusCodeList } from '../../helper/utils';

function* getJobById(action: any): any {
  try {
    const job = yield call(getJobByIdService, action.id);
    yield put({
      type: type.GET_JOB_SUCCESS_BY_ID,
      job: job.data
    });
  } catch (e: any) {
    yield put({ type: type.GET_JOB_FAILURE_BY_ID, message: e.message });
    console.warn(e.message);
  }
}

function* getJobs(action: any): any {
  try {
    const jobs = yield call(getJobsService, action.params);
    if (successStatusCodeList.includes(jobs.statusCode)) {
      yield put({
        type: type.GET_JOB_SUCCESS,
        jobs: jobs.data
      });
    } else {
      yield put({ type: type.GET_JOB_FAILURE, message: jobs.data?.error });
    }
  } catch (e: any) {
    yield put({ type: type.GET_JOB_FAILURE, message: e.message });
    console.warn(e.message);
  }
}

function* getAllTechnology(): any {
  try {
    const technology = yield call(getAllTechnologyService);
    if (technology?.data) {
      yield put({
        type: type.SET_ALL_TECHNOLOGY,
        technology: technology.data.results
      });
    }
  } catch (e: any) {
    yield put({ type: type.GET_ALL_TECHNOLOGY_FAILURE, message: e.message });
  }
}

function* saveJobPost(action: any): any {
  try {
    const job = yield call(createJobPost, action.payload);
    if (job?.statusCode === 201) {
      yield put({
        type: type.JOB_CREATED_SUCCESSFULLY,
        job: job.data
      });
    } else {
      yield put({ type: type.JOB_CREATION_ERROR });
    }
  } catch (e: any) {
    yield put({ type: type.JOB_CREATION_ERROR, message: e.message });
  }
}

function* updateJobPost(action: any): any {
  try {
    const job = yield call(updateJobPostService, action.payload, action.id);
    if (job?.statusCode === 201) {
      yield put({
        type: type.UPDATE_JOB_POST_SUCCESS,
        job: job.data
      });
      // yield call(getJobs);
    } else {
      yield put({ type: type.JOB_CREATION_ERROR });
    }
  } catch (e: any) {
    yield put({ type: type.JOB_CREATION_ERROR, message: e.message });
  }
}

function* saveSelectedSkill(action: any): any {
  try {
    const job = yield call(saveSelectedSkillService, action.payload);
    if (job?.statusCode !== 201) {
      yield put({ type: type.SAVE_SELECTED_SKILL_FAILURE });
    }
  } catch (e: any) {
    yield put({ type: type.SAVE_SELECTED_SKILL_FAILURE });
  }
}

function* saveSkillExperience(action: any): any {
  try {
    const job = yield call(saveSkillExperienceService, action.payload);
    if (job?.statusCode !== 201) {
      yield put({ type: type.SAVE_SKILL_EXPERIENCE_FAILURE });
    }
  } catch (e: any) {
    yield put({ type: type.SAVE_SKILL_EXPERIENCE_FAILURE });
    // yield put({ type: type.JOB_CREATION_ERROR, message: e.message });
  }
}
function* jobsSaga() {
  yield takeEvery(type.GET_JOB_REQUEST_BY_ID, getJobById);
  yield takeEvery(type.GET_JOB_REQUEST, getJobs);
  yield takeEvery(type.GET_ALL_TECHNOLOGY, getAllTechnology);
  yield takeEvery(type.CREATE_JOB_POST, saveJobPost);
  yield takeEvery(type.SAVE_SELECTED_SKILL, saveSelectedSkill);
  yield takeEvery(type.SAVE_SKILL_EXPERIENCE, saveSkillExperience);
  yield takeEvery(type.UPDATE_JOB_POST_REQUEST, updateJobPost);
}

export default jobsSaga;
