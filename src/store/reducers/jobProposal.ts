import * as type from '../ActionTypes';

const initialState = {
  jobProposal: {},
  newProposal: {},
  proposalByJob: [],
  proposalData: {},
  loading: false,
  error: null
};

export default function jobProposal(state = initialState, action: any) {
  switch (action.type) {
    case type.SET_JOB_PROPOSAL:
      return {
        ...state,
        jobProposal: action.data
      };
    case type.ADD_JOB_PROPOSAL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case type.ADD_JOB_PROPOSAL_SUCCESS:
      return {
        ...state,
        loading: false,
        newProposal: action.proposal
      };
    case type.GET_PROPOSAL_BY_JOB_REQUEST:
      return {
        ...state,
        loading: true
      };
    case type.GET_PROPOSAL_BY_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        proposalByJob: action.proposal
      };
    case type.GET_PROPOSAL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case type.GET_PROPOSAL_SUCCESS:
      return {
        ...state,
        loading: false,
        proposalData: action.proposal
      };
    case type.ADD_JOB_PROPOSAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    default:
      return state;
  }
}
