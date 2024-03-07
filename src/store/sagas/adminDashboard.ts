import { call, put, takeEvery } from 'redux-saga/effects';
import { getAdminDataService } from '../../services/adminDashboard';
import * as type from '../ActionTypes';

function* getAdminData(action: any): any {
  try {
    const adminData = yield call(getAdminDataService, action.params);
    yield put({
      type: type.GET_ADMIN_DATA_SUCCESS,
      adminData: adminData.data
    });
  } catch (e: any) {
    yield put({ type: type.GET_ADMIN_DATA_FAILURE, message: e.message });
    console.warn(e.message);
  }
}

function* adminDashboard() {
  yield takeEvery(type.GET_ADMIN_DATA_REQUEST, getAdminData);
}

export default adminDashboard;
