import axiosApiInstance from './request';

const tncService = async () => {
  let response = {};
  try {
    const res = await axiosApiInstance.get(`/terms-and-condition/`);
    response = res;
  } catch (error) {
    throw error;
  }
  return response;
};

export { tncService };
