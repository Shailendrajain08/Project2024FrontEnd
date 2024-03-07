import axiosApiInstance from './request';

const clientProfileDataService = async () => {
  let response = {};
  try {
    const res = await axiosApiInstance.get(`/client/`);
    response = res;
  } catch (error) {
    console.error(error);
  }
  return response;
};
const clientProfileDataByIdService = async (clientId: any) => {
  let response = {};
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.get('/client/' + clientId + '/', { headers });
    response = res;
  } catch (error) {
    console.error(error);
  }
  return response;
};

export { clientProfileDataService, clientProfileDataByIdService };
