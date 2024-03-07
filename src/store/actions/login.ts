import * as type from '../ActionTypes';

export function login(payload: any) {
  return {
    type: type.LOGIN_USER_REQUEST,
    payload: payload
  };
}

export function logout() {
  return {
    type: type.LOGIN_USER_CLEAR
  };
}
