import axiosApiInstance from './request';

const getTimezonesService = async () => {
  const headers = { 'Content-Type': 'application/json' };
  const response: { [k: string]: any } = {};
  try {
    const res = await axiosApiInstance.get(`/timezone/`, {
      headers
    });
    if (res && res.status !== 502 && res.status !== 500) {
      response.data = res?.data?.results;
    }
  } catch (error: any) {
    response.statusCode = error?.data?.status;
  }
  return response;
};

export { getTimezonesService };
