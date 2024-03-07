import { call, put, takeEvery } from 'redux-saga/effects';
import { getTimezonesService } from '../../services/timezone';
import * as type from '../ActionTypes';

function* getTimezones(): any {
  try {
    const timezones = yield call(getTimezonesService);
    yield put({
      type: type.GET_TIMEZONE_SUCCESS,
      payload: timezones
    });
  } catch (e: any) {
    yield put({ type: type.GET_TIMEZONE_FAILURE, message: e.message });
    console.warn(e.message);
  }
}

function* timezoneSaga() {
  yield takeEvery(type.GET_TIMEZONE_REQUEST, getTimezones);
}

export default timezoneSaga;
