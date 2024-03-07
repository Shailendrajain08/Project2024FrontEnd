import * as type from '../ActionTypes';

const initialState = {
  forgotPassword: {},
  loading: false,
  error: null,
  forgetPasswordStatus: false
};

export default function forgotPassword(state = initialState, action: any) {
  switch (action.type) {
    case type.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        forgetPasswordStatus: false
      };
    case type.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotPassword: action.data,
        forgetPasswordStatus: true
      };
    case type.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message,
        forgetPasswordStatus: false
      };
    case type.RESET_PASSWORD_UPDATE:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
