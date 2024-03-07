import * as type from '../../ActionTypes';

export function fetchCoderProfile() {
  return {
    type: type.GET_CODER_PROFILE
  };
}
export function fetchCoderAddress() {
  return {
    type: type.GET_CODER_ADDRESS
  };
}

export function fetchCoderDigitalPresence() {
  return {
    type: type.GET_CODER_DIGITAL_PRESENCE
  };
}

export function fetchCoderSkillsAndExperience() {
  return {
    type: type.GET_CODER_SKILLS_AND_EXPERIENCE
  };
}

export function fetchCoderEducation() {
  return {
    type: type.GET_CODER_EDUCATIONAL_QUALIFICATION
  };
}
