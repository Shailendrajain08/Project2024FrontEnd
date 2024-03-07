import * as type from '../ActionTypes';

export function getClientProfileData() {
  return {
    type: type.GET_CLIENT_PROFILE_DATA
  };
}
export function getClientProfileDataById(clientId: any) {
  return {
    type: type.GET_CLIENT_PROFILE_DATA_BY_ID,
    params: clientId
  };
}
