import * as type from '../ActionTypes';

const initialState = {
  technologies: [],
  loadingTech: false,
  loading: false,
  error: null,
  jobCreatedSuccessfully: false,
  jobCreationError: false,
  saveSkillExperience: null,
  skills: null,
  jobPostdata: {},
  updateJobData: {}
};

export default function jobPost(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_ALL_TECHNOLOGY:
      return {
        ...state,
        loadingTech: true
      };
      break;
    case type.SET_ALL_TECHNOLOGY:
      return {
        ...state,
        technologies: action.technology || [],
        error: '',
        loadingTech: false,
        jobCreatedSuccessfully: false
      };
    case type.GET_ALL_TECHNOLOGY_FAILURE:
      return {
        ...state,
        loadingTech: false,
        error: action.message
      };
    case type.CREATE_JOB_POST:
      return {
        ...state,
        loading: true
      };
    case type.JOB_CREATED_SUCCESSFULLY:
      return {
        ...state,
        jobPostdata: action.job,
        jobCreatedSuccessfully: true,
        loading: false
      };
    case type.UPDATE_JOB_POST_SUCCESS:
      return {
        ...state,
        updateJobData: action.job,
        jobCreatedSuccessfully: true,
        loading: false
      };
    case type.CLEAR_JOB_CREATION:
      return {
        ...state,
        job: {},
        jobPostdata: {},
        jobCreatedSuccessfully: false,
        jobCreationError: false,
        loading: false
      };
    case type.JOB_CREATION_ERROR:
      return {
        ...state,
        job: {},
        jobPostdata: {},
        jobCreatedSuccessfully: false,
        jobCreationError: true
      };
    case type.SAVE_SELECTED_SKILL:
      return {
        ...state,
        loading: true,
        skills: action.payload
      };
    case type.SAVE_SKILL_EXPERIENCE:
      return {
        ...state,
        loading: true,
        saveSkillExperience: action.payload
      };
    case type.SAVE_SKILL_EXPERIENCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong'
      };
    case type.SAVE_SELECTED_SKILL_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong'
      };
    case type.RESET_ERROR:
      return {
        ...state,
        error: ''
      };
    default:
      return state;
  }
}
