import * as type from '../ActionTypes';

export function getJobs(params: any) {
  return {
    type: type.GET_JOB_REQUEST,
    params: params
  };
}

export function getJobById(jobId: string) {
  return {
    type: type.GET_JOB_REQUEST_BY_ID,
    id: jobId
  };
}

export function setJobProposal(data: any) {
  return {
    type: type.SET_JOB_PROPOSAL,
    data: data
  };
}

export function setJobFavourite(data: any) {
  return {
    type: type.SET_JOB_FAVOURITE,
    data: data
  };
}

export function addJobProposal(payload: any) {
  return {
    type: type.ADD_JOB_PROPOSAL_REQUEST,
    payload: payload
  };
}

export function clearJobDetails() {
  return {
    type: type.CLEAR_JOB_DETAILS
  };
}
