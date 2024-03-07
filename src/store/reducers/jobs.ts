import * as type from '../ActionTypes';

const initialState = {
  jobs: {},
  loading: false,
  error: ''
};

export default function jobs(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_JOB_REQUEST:
      return {
        ...state,
        loading: true
      };
    case type.GET_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.jobs
      };
    case type.GET_JOB_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message || 'Oops, something went wrong!'
      };
    default:
      return state;
  }
}
