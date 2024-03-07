import { call, put, takeEvery } from 'redux-saga/effects';
import { recommendedTechService } from '../../services/recommended';
import * as type from '../ActionTypes';

function* getRecommendedTech(): any {
  try {
    const data = yield call(recommendedTechService);
    if (data?.statusCode === 200) {
      yield put({
        type: type.GET_ALL_RECOMMENDED_TECH_SUCCESS,
        recommendedTech: data.data?.results
      });
    } else {
      yield put({ type: type.GET_ALL_RECOMMENDED_TECH_FAILURE });
    }
  } catch (e: any) {
    yield put({ type: type.GET_ALL_RECOMMENDED_TECH_FAILURE });
  }
}

function* recommendedTechSaga() {
  yield takeEvery(type.GET_ALL_RECOMMENDED_TECH, getRecommendedTech);
}

export default recommendedTechSaga;
