import { call, put, takeEvery } from 'redux-saga/effects';
import { loginService } from '../../services/login';
import * as type from '../ActionTypes';
import TokenService from '../../services/auth/token.service';
import { storageService } from '../../services/storage.service';
import { LOCALSTORAGE_KEYS } from '../../constants/app.constants';

function* userLogin(action: any): any {
  try {
    const user = yield call(loginService, action.payload);
    if (user?.statusCode === 200) {
      TokenService.setUser(user?.data?.user);
      TokenService.updateLocalAccessToken(user?.data?.access_token);
      storageService.saveItem(LOCALSTORAGE_KEYS.role, user?.data?.user?.role);
      yield put({
        type: type.LOGIN_USER_SUCCESS,
        user: user.data
      });
    } else {
      yield put({ type: type.LOGIN_USER_FAILURE, message: user.data?.error });
    }
  } catch (e: any) {
    yield put({ type: type.LOGIN_USER_FAILURE, message: e.message });
  }
}

function* loginSaga() {
  yield takeEvery(type.LOGIN_USER_REQUEST, userLogin);
}

export default loginSaga;
