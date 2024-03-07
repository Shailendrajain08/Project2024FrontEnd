import * as type from '../ActionTypes';

const initialState = {
  resetPassword: {},
  loading: false,
  error: null,
  resetPasswordStatus: false
};

export default function resetPassword(state = initialState, action: any) {
  switch (action.type) {
    case type.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        resetPasswordStatus: false
      };
    case type.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        resetPassword: action.data,
        resetPasswordStatus: true
      };
    case type.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        resetPasswordStatus: false
      };
    default:
      return state;
  }
}
