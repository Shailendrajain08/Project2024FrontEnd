import * as type from '../ActionTypes';

export function getAdminData(params: any) {
  return {
    type: type.GET_ADMIN_DATA_REQUEST,
    params: params
  };
}
