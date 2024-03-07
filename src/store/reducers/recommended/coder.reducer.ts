import * as type from '../../ActionTypes';

const initialState = {
  recommendedCoder: [],
  loading: false,
  error: ''
};

export default function getRecommendedCoder(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_RECOMMENDED_CODER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case type.GET_RECOMMENDED_CODER_SUCCESS:
      return {
        ...state,
        loading: false,
        recommendedCoder: action.recommendedCoder
      };
    case type.GET_RECOMMENDED_CODER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message || `Oops! Something went wrong`
      };

    default:
      return state;
  }
}
