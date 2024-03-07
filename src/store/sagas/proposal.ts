import { call, put, takeEvery } from 'redux-saga/effects';
import {
  addProposalService,
  getProposalsByJobService,
  getProposalService
} from '../../services/proposal';
import * as type from '../ActionTypes';

function* addProposal(action: any): any {
  try {
    const proposal = yield call(addProposalService, action.payload);
    yield put({
      type: type.ADD_JOB_PROPOSAL_SUCCESS,
      proposal: proposal.data
    });
  } catch (e: any) {
    yield put({ type: type.ADD_JOB_PROPOSAL_FAILURE, message: e.message });
    console.warn(e.message);
  }
}

function* getProposalByJob(action: any): any {
  try {
    const proposal = yield call(getProposalsByJobService, action.params);
    yield put({
      type: type.GET_PROPOSAL_BY_JOB_SUCCESS,
      proposal: proposal.data?.results
    });
  } catch (e: any) {
    yield put({ type: type.ADD_JOB_PROPOSAL_FAILURE, message: e.message });
    console.warn(e.message);
  }
}

function* getProposal(action: any): any {
  try {
    const proposal = yield call(getProposalService, action.proposalId);
    yield put({
      type: type.GET_PROPOSAL_SUCCESS,
      proposal: proposal.data
    });
  } catch (e: any) {
    yield put({ type: type.ADD_JOB_PROPOSAL_FAILURE, message: e.message });
    console.warn(e.message);
  }
}

function* proposalSaga() {
  yield takeEvery(type.ADD_JOB_PROPOSAL_REQUEST, addProposal);
  yield takeEvery(type.GET_PROPOSAL_BY_JOB_REQUEST, getProposalByJob);
  yield takeEvery(type.GET_PROPOSAL_REQUEST, getProposal);
}

export default proposalSaga;
