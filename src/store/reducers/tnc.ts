import * as type from '../ActionTypes';

const initialState = {
  tncData: {},
  loading: false,
  error: null
};

export default function tncReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_TnC_REQUEST:
      return {
        ...state,
        loading: true
      };
    case type.GET_TnC_SUCCESS:
      return {
        ...state,
        loading: false,
        tncData: action.data
      };
    case type.GET_TnC_FAIURES:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    default:
      return state;
  }
}
