import * as type from '../ActionTypes';

export function companyDetailAction() {
  return {
    type: type.GET_COMPANY_DETAILS
  };
}
export function companyDetailSuccessAction(payload: any) {
  return {
    type: type.COMPANY_DETAILS_SUCCESS,
    payload: payload
  };
}
export function companyDetailFailureAction(payload: any) {
  return {
    type: type.COMPANY_DETAILS_FAILURES,
    payload: payload
  };
}
