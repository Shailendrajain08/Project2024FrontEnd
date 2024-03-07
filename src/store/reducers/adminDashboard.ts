import * as type from '../ActionTypes';

const initialState = {
  adminData: {},
  loading: false,
  error: ''
};

export default function adminData(state = initialState, action: any) {
  switch (action.type) {
    case type.GET_ADMIN_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case type.GET_ADMIN_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        // need to change this after API changes
        adminData: { ...action.adminData, results: action.adminData.results[0] }
      };
    case type.GET_ADMIN_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message || 'Oops, something went wrong!'
      };
    default:
      return state;
  }
}
