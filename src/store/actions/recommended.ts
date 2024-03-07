import * as type from '../ActionTypes';

export function getRecommendedTech() {
  return {
    type: type.GET_ALL_RECOMMENDED_TECH
  };
}

export function getRecommendedCoder() {
  return {
    type: type.GET_RECOMMENDED_CODER_REQUEST
  };
}
