import * as type from '../ActionTypes';

const initialState = {
  clientProfileData: {},
  loading: false,
  error: null
};

export default function clientProfileReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_CLIENT_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        clientProfileData: action.data
      };
    case type.GET_CLIENT_PROFILE_DATA_FAILURES:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    default:
      return state;
  }
}
