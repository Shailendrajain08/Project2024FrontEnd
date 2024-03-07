import { call, put, takeEvery } from 'redux-saga/effects';
import {
  addressService,
  companyDetailServices,
  digitalPresenceService,
  registerService,
  resentEmailVerifyService,
  updateAddressService,
  updateCompanyDetailIdService,
  updateDigitalPresenceService,
  verifyEmailService
} from '../../services/register';
import * as type from '../ActionTypes';
const responseStatus = [200, 201];
// here we need to change code......
function* addUser(action: any): any {
  try {
    const user = yield call(registerService, action.payload);
    if (responseStatus.includes(user.statusCode)) {
      localStorage.setItem('token', user?.data?.access_token);
      yield put({
        type: type.REGISTER_USER_SUCCESS,
        user: user
      });
    } else {
      yield put({ type: type.REGISTER_USER_FAILURE, error: user?.data?.email[0] });
    }
  } catch (e: any) {
    yield put({ type: type.REGISTER_USER_FAILURE, message: e.error });
  }
}

function* companyDetails(action: any): any {
  try {
    const companyForm = yield call(companyDetailServices, action.payload);

    if (responseStatus.includes(companyForm.data.status)) {
      yield put({
        type: type.CLIENT_REGISTRATION_COMPANY_SUCCESS,
        data: companyForm?.data?.data
      });
    } else {
      yield put({
        type: type.CLIENT_REGISTRATION_COMPANY_FAILURE,
        error: companyForm?.data?.data?.company_website[0] || companyForm?.data?.data?.error[0]
      });
    }
  } catch (e: any) {
    yield put({
      type: type.CLIENT_REGISTRATION_COMPANY_FAILURE,
      error: e.error
    });
  }
}

function* updateCompanyDetails(action: any): any {
  try {
    const companyForm = yield call(updateCompanyDetailIdService, action.payload, action.userId);
    if (responseStatus.includes(companyForm.data.status)) {
      yield put({
        type: type.CLIENT_REGISTRATION_COMPANY_SUCCESS,
        data: companyForm?.data?.data
      });
    } else {
      yield put({
        type: type.CLIENT_REGISTRATION_COMPANY_FAILURE,
        error: companyForm?.data?.data?.error[0] || companyForm?.data?.data?.company_website[0]
      });
    }
  } catch (e: any) {
    yield put({
      type: type.CLIENT_REGISTRATION_COMPANY_FAILURE,
      error: e.error
    });
  }
}
function* createAddress(action: any): any {
  try {
    const addressForm = yield call(addressService, action.payload);
    if (responseStatus.includes(addressForm.data.status)) {
      yield put({
        type: type.REGISTRATION_ADDRESS_SUCCESS,
        data: addressForm?.data?.data
      });
    } else {
      yield put({
        type: type.REGISTRATION_ADDRESS_FAILURE,
        error: addressForm?.data?.data?.error[0]
      });
    }
  } catch (e: any) {
    yield put({
      type: type.REGISTRATION_ADDRESS_FAILURE,
      error: e.error
    });
  }
}

function* updateAddress(action: any): any {
  try {
    const addressForm = yield call(updateAddressService, action.payload, action.userId);
    if (responseStatus.includes(addressForm.data.status)) {
      yield put({
        type: type.REGISTRATION_ADDRESS_SUCCESS,
        data: addressForm?.data?.data
      });
    } else {
      yield put({
        type: type.REGISTRATION_ADDRESS_FAILURE,
        error: addressForm?.data?.data?.error[0]
      });
    }
  } catch (e: any) {
    yield put({
      type: type.REGISTRATION_ADDRESS_FAILURE,
      error: e.error
    });
  }
}

function* digitalPresence(action: any): any {
  try {
    const digitalPresenceForm = yield call(digitalPresenceService, action.payload);
    if (responseStatus.includes(digitalPresenceForm.data.status)) {
      yield put({
        type: type.REGISTRATION_DIGITAL_PRESENCE_SUCCESS,
        data: digitalPresenceForm?.data?.data
      });
    } else {
      yield put({
        type: type.REGISTRATION_DIGITAL_PRESENCE_FAILURE,
        error: digitalPresenceForm?.data?.data?.error[0]
      });
    }
  } catch (e: any) {
    yield put({
      type: type.REGISTRATION_DIGITAL_PRESENCE_FAILURE,
      error: e.error
    });
  }
}

function* updateDigitalPresence(action: any): any {
  try {
    const digitalPresenceForm = yield call(
      updateDigitalPresenceService,
      action.payload,
      action.userId
    );
    if (responseStatus.includes(digitalPresenceForm.data.status)) {
      yield put({
        type: type.REGISTRATION_DIGITAL_PRESENCE_SUCCESS,
        data: digitalPresenceForm?.data?.data
      });
    } else {
      yield put({
        type: type.REGISTRATION_DIGITAL_PRESENCE_FAILURE,
        error: digitalPresenceForm?.data?.data?.error[0]
      });
    }
  } catch (e: any) {
    yield put({
      type: type.REGISTRATION_DIGITAL_PRESENCE_FAILURE,
      error: e.error
    });
  }
}

function* resendVerifyEmail(action: any): any {
  try {
    const verifyEmilData = yield call(resentEmailVerifyService, action.payload);
    if (responseStatus.includes(verifyEmilData.data.status)) {
      yield put({
        type: type.RESEND_VERIFY_EMAIL_SUCCESS,
        data: verifyEmilData?.data?.data
      });
    } else {
      yield put({
        type: type.RESEND_VERIFY_EMAIL_FAILURE,
        error: verifyEmilData?.data?.data?.detail
      });
    }
  } catch (e: any) {
    yield put({
      type: type.RESEND_VERIFY_EMAIL_FAILURE,
      error: e.error
    });
  }
}

function* verifyUserEmail(action: any): any {
  try {
    const verifiedMessage = yield call(verifyEmailService, action.payload);
    if (responseStatus.includes(verifiedMessage.data.status)) {
      yield put({
        type: type.VERIFY_EMAIL_SUCCESS,
        data: verifiedMessage?.data?.data?.email
      });
    } else {
      yield put({
        type: type.VERIFY_EMAIL_FAILURE,
        error: verifiedMessage?.data?.data?.error
      });
    }
  } catch (e: any) {
    // Need to update to open modal with response message
    yield put({
      type: type.VERIFY_EMAIL_FAILURE,
      error: e.error
    });
  }
}

function* registerSaga() {
  yield takeEvery(type.REGISTER_USER_REQUEST, addUser);
  yield takeEvery(type.VERIFY_EMAIL_REQUEST, verifyUserEmail);
  yield takeEvery(type.CLIENT_REGISTRATION_COMPANY_REQUEST, companyDetails);
  yield takeEvery(type.REGISTRATION_ADDRESS_REQUEST, createAddress);
  yield takeEvery(type.UPDATE_REGISTRATION_ADDRESS_REQUEST, updateAddress);
  yield takeEvery(type.RESEND_VERIFY_EMAIL_REQUEST, resendVerifyEmail);
  yield takeEvery(type.UPDATE_REGISTRATION_COMPANY_REQUEST, updateCompanyDetails);
  yield takeEvery(type.REGISTRATION_DIGITAL_PRESENCE_REQUEST, digitalPresence);
  yield takeEvery(type.UPDATE_REGISTRATION_DIGITAL_PRESENCE_REQUEST, updateDigitalPresence);
}

export default registerSaga;
