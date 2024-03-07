import * as type from '../ActionTypes';

const initialState = {
  job: {},
  loading: false,
  error: null
};

export default function job(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_JOB_REQUEST_BY_ID:
      return {
        ...state,
        loading: true
      };
    case type.GET_JOB_SUCCESS_BY_ID:
      return {
        ...state,
        loading: false,
        job: action.job
      };
    case type.GET_JOB_FAILURE_BY_ID:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    case type.CLEAR_JOB_DETAILS:
      return {
        ...state,
        job: {},
        loading: false
      };
    default:
      return state;
  }
}
