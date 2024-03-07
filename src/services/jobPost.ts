import axiosApiInstance from './request';
const apiVersion = 'v2';

const getAllTechnologyService = async () => {
  const headers = { 'Content-Type': 'application/json' };
  const response: { [k: string]: any } = {};
  try {
    const res = await axiosApiInstance.get(`/technology-dropdown/`, {
      headers
    });
    if (res && res.status !== 502 && res.status !== 500) {
      response.data = res?.data;
    }
  } catch (error: any) {
    response.statusCode = error?.data?.status;
  }
  return response;
};

const getTechnologyService = async (id: string) => {
  const technology = await axiosApiInstance.get(`/technology-dropdown/${id}/`);
  return technology?.data;
};

const createJobPost = async (payload: any) => {
  const response: { [k: string]: any } = {};
  const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  };
  try {
    const res = await axiosApiInstance.post(`/job-posts/`, payload, {
      headers,
      apiVersion
    } as any);
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    response.statusCode = error?.data?.status;
  }
  return response;
};

const updateJobPostService = async (payload: any, id: any) => {
  const response: { [k: string]: any } = {};
  const headers = { 'Content-Type': 'application/json' };
  try {
    const res = await axiosApiInstance.patch(`/job-posts/${id}`, payload, {
      headers
    });
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    response.statusCode = error?.data?.status;
  }
  return response;
};

export { getAllTechnologyService, createJobPost, updateJobPostService, getTechnologyService };
