import * as type from '../ActionTypes';

const initialState = {
  addressdetails: {},
  loading: false,
  error: null,
  addressStatus: false
};

export default function addressReducer(state = initialState, action: any) {
  switch (action.type) {
    case type.REGISTRATION_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        addressStatus: false
      };
    case type.REGISTRATION_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        addressdetails: action.data,
        addressStatus: true
      };
    case type.REGISTRATION_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        addressStatus: false
      };
    case type.RESET_REGISTRATION_ADDRESS_STATUS:
      return {
        ...state,
        loading: false,
        error: null,
        addressStatus: false
      };
    default:
      return state;
  }
}
