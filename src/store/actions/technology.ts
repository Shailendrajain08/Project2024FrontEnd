import * as type from '../ActionTypes';

export function setTechnologyAction(value: string) {
  return {
    type: type.SET_TECHNOLOGY_NAME,
    name: value
  };
}
