import * as type from '../../ActionTypes';

const initialState = {
  profile: {},
  loading: false,
  error: null
};

export default function coderProfileReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_CODER_PROFILE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case type.GET_CODER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        profile: action.profile
      };
    case type.GET_CODER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

const addressInitialState = {
  address: {},
  loading: true,
  error: null
};

export function coderAddressReducer(state = addressInitialState, action: any) {
  switch (action.type) {
    case type.GET_CODER_ADDRESS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case type.GET_CODER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        address: action.address
      };
    case type.GET_CODER_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

const digitalPresenceInitialState = {
  digitalPresence: {},
  loading: true,
  error: null
};

export function coderDigitalPresence(state = digitalPresenceInitialState, action: any) {
  switch (action.type) {
    case type.GET_CODER_DIGITAL_PRESENCE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case type.GET_CODER_DIGITAL_PRESENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        digitalPresence: action.digitalPresence
      };
    case type.GET_CODER_DIGITAL_PRESENCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

const skillsExperienceInitialState = {
  skillsExperience: {},
  loading: true,
  error: null
};

export function coderSkillsAndExperience(state = skillsExperienceInitialState, action: any) {
  switch (action.type) {
    case type.GET_CODER_SKILLS_AND_EXPERIENCE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case type.GET_CODER_SKILLS_AND_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        skillsExperience: action.skillsExperience
      };
    case type.GET_CODER_SKILLS_AND_EXPERIENCE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

const coderEducationInitialState = {
  educationQualification: {},
  loading: true,
  error: null
};

export function coderEducationQualification(state = coderEducationInitialState, action: any) {
  switch (action.type) {
    case type.GET_CODER_EDUCATIONAL_QUALIFICATION:
      return {
        ...state,
        loading: true,
        error: null
      };
    case type.GET_CODER_EDUCATIONAL_QUALIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        educationQualification: action.educationQualification
      };
    case type.GET_CODER_EDUCATIONAL_QUALIFICATION_FAILURE:
      return {
        ...state,
        educationQualification: {},
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
