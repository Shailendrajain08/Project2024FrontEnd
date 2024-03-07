import * as type from '../ActionTypes';

const initialState = {
  timezones: []
};

export default function timezones(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_TIMEZONE_REQUEST:
      return {
        ...state,
        error: null
      };
    case type.GET_TIMEZONE_SUCCESS:
      return {
        ...state,
        timezones: action.payload
      };
    case type.GET_TIMEZONE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
