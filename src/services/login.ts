import axiosApiInstance from './request';

const loginService = async (payload: any) => {
  const response: { [k: string]: any } = {};
  const headers = { 'Content-Type': 'application/json' };
  try {
    const res = await axiosApiInstance.post(`/login/`, payload, { headers });
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    response.statusCode = error?.data?.status;
  }
  return response;
};

export { loginService };
