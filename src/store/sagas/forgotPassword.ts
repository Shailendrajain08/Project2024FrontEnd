import { call, put, takeEvery } from 'redux-saga/effects';
import { forgotPasswordService } from '../../services/forgotPassword';
import * as type from '../ActionTypes';

const responseStatus = [200, 201];

function* forgotPassword(action: any): any {
  // have to use if else
  try {
    const response = yield call(forgotPasswordService, action.payload);
    if (responseStatus.includes(response.status)) {
      yield put({
        type: type?.FORGOT_PASSWORD_SUCCESS,
        data: response?.data
      });
    } else {
      yield put({ type: type?.FORGOT_PASSWORD_FAILURE, error: response?.data?.message });
    }
  } catch (error: any) {
    throw error;
  }
}

function* forgotPasswordSaga() {
  yield takeEvery(type?.FORGOT_PASSWORD_REQUEST, forgotPassword);
}

export default forgotPasswordSaga;
