import { call, put, takeEvery } from 'redux-saga/effects';
import { recommendedCoderService } from '../../../services/recommended';
import { successStatusCodeList } from '../../../helper/utils';
import * as type from '../../ActionTypes';

function* getRecommendedCoder(): any {
  try {
    const data = yield call(recommendedCoderService);
    yield put({
      type: type.GET_RECOMMENDED_CODER_SUCCESS,
      recommendedCoder: data.data?.results
    });
  } catch (e: any) {
    yield put({ type: type.GET_RECOMMENDED_CODER_FAILURE });
  }
}

function* recommendedCoderSaga() {
  yield takeEvery(type.GET_RECOMMENDED_CODER_REQUEST, getRecommendedCoder);
}

export default recommendedCoderSaga;
