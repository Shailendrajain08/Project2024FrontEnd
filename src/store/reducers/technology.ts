import * as type from '../ActionTypes';

const initialState = {
  skills: []
};

export default function technology(state = initialState, action: any) {
  switch (action.type) {
    case type.SET_TECHNOLOGY_NAME:
      return {
        name: action.name
      };
    default:
      return state;
  }
}
