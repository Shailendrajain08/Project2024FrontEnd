import * as type from '../ActionTypes';

const initialState = {
  user: {},
  loginStatus: false,
  loading: false,
  error: ''
};

export default function login(state = initialState, action: any) {
  switch (action.type) {
    case type.LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case type.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
        loginStatus: true
      };
    case type.LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message[0],
        loginStatus: false
      };
    case type.LOGIN_USER_CLEAR:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
}
