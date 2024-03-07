import { call, put, takeEvery } from 'redux-saga/effects';
import * as type from '../ActionTypes';
import {
  clientProfileDataByIdService,
  clientProfileDataService
} from '../../services/clientProfileData';

function* clientProfileData(): any {
  try {
    const response = yield call(clientProfileDataService);
    yield put({
      type: type?.GET_CLIENT_PROFILE_DATA_SUCCESS,
      data: response.data?.results[0]
    });
  } catch (e: any) {
    yield put({ type: type?.GET_CLIENT_PROFILE_DATA_FAILURES, message: e.message });
    console.warn(e.message);
  }
}
function* clientProfileDataById(action: any): any {
  try {
    const response = yield call(clientProfileDataByIdService, action.params);
    yield put({
      type: type?.GET_CLIENT_PROFILE_DATA_SUCCESS,
      data: response.data
    });
  } catch (e: any) {
    yield put({ type: type?.GET_CLIENT_PROFILE_DATA_FAILURES, message: e.message });
    console.warn(e.message);
  }
}

function* clientProfileSaga() {
  yield takeEvery(type?.GET_CLIENT_PROFILE_DATA, clientProfileData);
  yield takeEvery(type?.GET_CLIENT_PROFILE_DATA_BY_ID, clientProfileDataById);
}

export default clientProfileSaga;
