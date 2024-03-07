import * as type from '../ActionTypes';

const initialState = {
  digitaldetails: {},
  loading: false,
  error: null,
  digitalStatus: false
};

export default function digitalPresenceReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.REGISTRATION_DIGITAL_PRESENCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        digitalStatus: false
      };
    case type.REGISTRATION_DIGITAL_PRESENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        digitaldetails: action.data,
        digitalStatus: true
      };
    case type.REGISTRATION_DIGITAL_PRESENCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        digitalStatus: false
      };
    case type.RESET_REGISTRATION_DIGITAL_PRESENCE_STATUS:
      return {
        ...state,
        loading: false,
        error: null,
        digitalStatus: false
      };
    default:
      return state;
  }
}
