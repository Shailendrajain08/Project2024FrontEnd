import * as type from '../ActionTypes';

export function getAllTechnology() {
  return {
    type: type.GET_ALL_TECHNOLOGY
  };
}

export function createJobPost(payload: any) {
  return {
    type: type.CREATE_JOB_POST,
    payload: payload
  };
}

export function updateJobPost(payload: any, id: string) {
  return {
    type: type.UPDATE_JOB_POST_REQUEST,
    payload: payload,
    id
  };
}

export function clearJobPostData() {
  return {
    type: type.CLEAR_JOB_CREATION
  };
}

export function saveSelectedSkill(payload: any) {
  return {
    type: type.SAVE_SELECTED_SKILL,
    payload
  };
}

export function saveSkillsExperience(payload: any) {
  return {
    type: type.SAVE_SKILL_EXPERIENCE,
    payload
  };
}

export function resetError() {
  return {
    type: type.RESET_ERROR
  };
}
