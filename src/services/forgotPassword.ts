import axiosApiInstance from './request';

const forgotPasswordService = async (payload: any) => {
  let response = {};
  try {
    const res = await axiosApiInstance.post(`/password-reset/`, payload);
    response = res;
  } catch (error) {
    console.error(error);
  }
  return response;
};

export { forgotPasswordService };
