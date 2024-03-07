import { call, put, takeEvery } from 'redux-saga/effects';
import * as type from '../ActionTypes';
import { companyDetailService } from '../../services/companyDetail';

function* companyDetail(action: any): any {
  try {
    const response = yield call(companyDetailService);
    yield put({
      type: type?.COMPANY_DETAILS_SUCCESS,
      data: response.data
    });
  } catch (e: any) {
    yield put({ type: type?.COMPANY_DETAILS_FAILURES, message: e.message });
    console.warn(e.message);
  }
}

function* companyDetailSaga() {
  yield takeEvery(type?.GET_COMPANY_DETAILS, companyDetail);
}

export default companyDetailSaga;
