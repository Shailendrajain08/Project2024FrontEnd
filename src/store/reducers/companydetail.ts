import * as type from '../ActionTypes';

const initialState = {
  companydetails: {},
  loading: false,
  error: null,
  companydetailsStatus: false
};

export default function companydetailsReducers(state = initialState, action: any) {
  switch (action.type) {
    case type.CLIENT_REGISTRATION_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        companydetailsStatus: false
      };
    case type.CLIENT_REGISTRATION_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        companydetails: action.data,
        companydetailsStatus: true
      };
    case type.CLIENT_REGISTRATION_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        companydetailsStatus: false
      };
    case type.RESET_REGISTRATION_COMPANY_STATUS:
      return {
        ...state,
        loading: false,
        error: null,
        companydetailsStatus: false
      };
    case type.COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        companydetails: action.data,
        companydetailsStatus: true,
        error: null
      };
    default:
      return state;
  }
}
