import * as type from '../ActionTypes';

export function addProposal(payload: any) {
  return {
    type: type.ADD_JOB_PROPOSAL_REQUEST,
    payload: payload
  };
}

export function getProposalByJob(params: any) {
  return {
    type: type.GET_PROPOSAL_BY_JOB_REQUEST,
    params: params
  };
}

export function getProposal(proposalId: string) {
  return {
    type: type.GET_PROPOSAL_REQUEST,
    proposalId: proposalId
  };
}
