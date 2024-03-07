import axiosApiInstance from './request';

const recommendedTechService = async () => {
  const response: { [k: string]: any } = {};
  const headers = { 'Content-Type': 'application/json' };
  try {
    const res = await axiosApiInstance.get(`/recommended-technology/`, { headers });
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    response.statusCode = error?.data?.status;
  }
  return response;
};

export { recommendedTechService };
