import axiosApiInstance from './request';
const apiVersion = 'v2';

const addProposalService = async (payload: any) => {
  const response: { [k: string]: any } = {};
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.post(`/proposal/`, payload, {
      headers,
      apiVersion
    } as any);
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    throw error;
  }
  return response;
};

const getProposalsService = async () => {
  const response: { [k: string]: any } = {};
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.post(`/proposal/`, {
      headers,
      apiVersion
    } as any);
    if (res && res.status !== 502 && res.status !== 500) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    throw error;
  }
  return response;
};

const getProposalsByJobService = async (params: any) => {
  const response: { [k: string]: any } = {};
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.get(`/proposal/`, {
      headers,
      apiVersion,
      params
    } as any);
    if (res && res.status === 200) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    throw error;
  }
  return response;
};

const getProposalService = async (proposalId: string) => {
  const response: { [k: string]: any } = {};
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.get(`/proposal/${proposalId}/`, {
      headers,
      apiVersion
    } as any);
    if (res && res.status === 200) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    throw error;
  }
  return response;
};

export { addProposalService, getProposalsByJobService, getProposalService };
