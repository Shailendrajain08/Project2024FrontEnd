import * as type from '../ActionTypes';

export function forgotPasswordAction(payload: any) {
  return {
    type: type.FORGOT_PASSWORD_REQUEST,
    payload: payload
  };
}

export function resetPasswordAction(payload: any) {
  return {
    type: type.RESET_PASSWORD_REQUEST,
    payload: payload
  };
}

export const resetPasswordUpdate = () => {
  return {
    type: type.RESET_PASSWORD_UPDATE
  };
};
