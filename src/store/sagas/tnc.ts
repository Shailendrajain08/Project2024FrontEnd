import { call, put, takeEvery } from 'redux-saga/effects';
import * as type from '../ActionTypes';
import { tncService } from '../../services/tnc';

function* _TnC(action: any): any {
  try {
    yield put({
      type: type?.GET_TnC_REQUEST
    });
    const response = yield call(tncService);
    yield put({
      type: type?.GET_TnC_SUCCESS,
      data: response.data?.results[0]
    });
  } catch (e: any) {
    yield put({ type: type?.GET_TnC_FAIURES, message: e.message });
    console.warn(e.message);
  }
}

function* TnCSaga() {
  yield takeEvery(type?.GET_TnC, _TnC);
}

export default TnCSaga;
