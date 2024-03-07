import * as type from '../ActionTypes';

const initialState = {
  verifyEmailData: {},
  loading: false,
  error: null,
  verfiyEmailStatus: false
};

export default function VerifyEmailReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        verfiyEmailStatus: false
      };
    case type.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        verifyEmailData: action.data,
        verfiyEmailStatus: true
      };
    case type.VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        verfiyEmailStatus: false
      };
    default:
      return state;
  }
}
