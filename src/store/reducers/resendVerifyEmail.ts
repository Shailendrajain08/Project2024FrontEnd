import * as type from '../ActionTypes';

const initialState = {
  resendEmailData: {},
  loading: false,
  error: null,
  resendEmailStatus: false
};

export default function resendVerifyEmailReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.RESEND_VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        resendEmailStatus: false
      };
    case type.RESEND_VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        resendEmailData: action.data,
        resendEmailStatus: true
      };
    case type.RESEND_VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        resendEmailStatus: false
      };
    case type.RESET_RESEND_VERIFY_EMAIL_STATUS:
      return {
        ...state,
        loading: false,
        error: null,
        resendEmailStatus: false
      };
    default:
      return state;
  }
}
