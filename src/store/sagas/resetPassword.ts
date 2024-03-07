import { call, put, takeEvery } from 'redux-saga/effects';
import * as type from '../ActionTypes';
import { resetPasswordService } from '../../services/resetPassword';

const responseStatus = [200, 201];

function* resetPassword(action: any): any {
  try {
    const response = yield call(resetPasswordService, action.payload);

    if (responseStatus.includes(response.statusCode)) {
      yield put({
        type: type?.RESET_PASSWORD_SUCCESS,
        data: response
      });
    } else {
      yield put({ type: type?.RESET_PASSWORD_FAILURE, error: response.password });
    }
  } catch (error: any) {
    throw error;
  }
}

function* resetPasswordSaga() {
  yield takeEvery(type?.RESET_PASSWORD_REQUEST, resetPassword);
}

export default resetPasswordSaga;
