import * as type from '../ActionTypes';

const initialState = {
  recommendedTech: []
};

export default function getSkills(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_ALL_RECOMMENDED_TECH:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case type.GET_ALL_RECOMMENDED_TECH_SUCCESS:
      return {
        ...state,
        loading: false,
        recommendedTech: action.recommendedTech
      };
    case type.GET_ALL_RECOMMENDED_TECH_FAILURE:
      return {
        ...state,
        loading: false,
        recommendedTech: []
      };

    default:
      return state;
  }
}
