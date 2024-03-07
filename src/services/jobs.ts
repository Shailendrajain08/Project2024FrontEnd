import axiosApiInstance from './request';
const apiVersion = 'v2';

const getJobsService = async (params: any) => {
  const response = { data: {}, statusCode: 500 };
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.get('/job-posts/', {
      headers,
      apiVersion,
      params: params
    } as any);
    if (res && res.status === 200) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    console.error(error);
    response.statusCode = error?.data?.status;
  }
  return response;
};

const getJobByIdService = async (jobId: string) => {
  const response = { data: {}, statusCode: 500 };
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.get(`/job-posts/${jobId}/`, { headers, apiVersion } as any);
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    console.error(error);
    response.statusCode = error?.data?.status;
  }
  return response;
};

const deleteJobByIdService = async (jobId: string) => {
  const response = { data: {}, statusCode: 500 };
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.delete(`/job-posts/${jobId}/`, {
      headers
    });
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    console.error(error);
    response.statusCode = error?.data?.status;
  }
  return response;
};

export { getJobsService, getJobByIdService, deleteJobByIdService };
