import * as type from '../ActionTypes';

const initialState = {
  data: {},
  loading: false,
  error: null,
  registrationStatus: false
};

export default function register(state = initialState, action: any) {
  switch (action.type) {
    case type.REGISTER_USER_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case type.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action?.user,
        registrationStatus: true
      };
    case type.REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action?.error,
        registrationStatus: false
      };
    case type.RESET_REGISTER_USER:
      return {
        data: {},
        loading: false,
        error: null,
        registrationStatus: false
      };
    default:
      return state;
  }
}
