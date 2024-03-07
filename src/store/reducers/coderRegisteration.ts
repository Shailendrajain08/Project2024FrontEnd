import * as type from '../ActionTypes';

const initialState = {
  skills: []
};

export default function getPrimarySkills(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_PRIMARY_SKILLS:
      return {
        ...state,
        loading: true,
        skills: [],
        error: ''
      };
    case type.GET_PRIMARY_SKILLS_SUCCESS:
      return {
        ...state,
        loading: false,
        skills: action.skills
      };
    case type.GET_PRIMARY_SKILLS_FAILURE:
      return {
        ...state,
        loading: false,
        skills: []
      };

    default:
      return state;
  }
}
