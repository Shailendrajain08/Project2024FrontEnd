import * as type from '../ActionTypes';

export function signup(payload: any) {
  return {
    type: type.REGISTER_USER_REQUEST,
    payload: payload
  };
}
export function resetSignup() {
  return {
    type: type.RESET_REGISTER_USER
  };
}

export function companyDetails(payload: any) {
  return {
    type: type.CLIENT_REGISTRATION_COMPANY_REQUEST,
    payload: payload
  };
}

export function updateCompanyDetails(payload: any, userId: string) {
  return {
    type: type.UPDATE_REGISTRATION_COMPANY_REQUEST,
    payload: payload,
    userId: userId
  };
}
export function resetCompanyStatus() {
  return {
    type: type.RESET_REGISTRATION_COMPANY_STATUS
  };
}
export function createAddress(payload: any) {
  return {
    type: type.REGISTRATION_ADDRESS_REQUEST,
    payload: payload
  };
}

export function updateAddress(payload: any, userId: string) {
  return {
    type: type.UPDATE_REGISTRATION_ADDRESS_REQUEST,
    payload: payload,
    userId: userId
  };
}

export function resetAddressStatus() {
  return {
    type: type.RESET_REGISTRATION_ADDRESS_STATUS
  };
}

export function createDigitalPresence(payload: any) {
  return {
    type: type.REGISTRATION_DIGITAL_PRESENCE_REQUEST,
    payload: payload
  };
}

export function updateDigitalPresence(payload: any, userId: string) {
  return {
    type: type.UPDATE_REGISTRATION_DIGITAL_PRESENCE_REQUEST,
    payload: payload,
    userId: userId
  };
}
export function resetdigitalPresenceStatus() {
  return {
    type: type.RESET_REGISTRATION_DIGITAL_PRESENCE_STATUS
  };
}

export function veifyEmail(payload: any) {
  return {
    type: type.VERIFY_EMAIL_REQUEST,
    payload: payload
  };
}

export function resendVerifyEmail(payload: any) {
  return {
    type: type.RESEND_VERIFY_EMAIL_REQUEST,
    payload: payload
  };
}
export function resetVerifyEmailStatus() {
  return {
    type: type.RESET_RESEND_VERIFY_EMAIL_STATUS
  };
}
