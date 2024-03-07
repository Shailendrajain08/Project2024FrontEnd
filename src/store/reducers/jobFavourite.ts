import * as type from '../ActionTypes';

const initialState = {
  jobFavaourite: []
};

export default function jobFavaourite(state = initialState, action: any) {
  switch (action.type) {
    case type.SET_JOB_FAVOURITE:
      return {
        ...state,
        jobFavaourite: [...state.jobFavaourite, action.data]
      };
    default:
      return state;
  }
}
