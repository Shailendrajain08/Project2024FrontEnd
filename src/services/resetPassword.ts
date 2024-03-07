import axiosApiInstance from './request';

const resetPasswordService = async (payload: any) => {
  let response = { data: {}, statusCode: 500 };
  try {
    const res = await axiosApiInstance.post(`/password-reset-confirm/`, payload);
    response = res?.data;
    response.statusCode = res?.status;
  } catch (error) {
    console.error(error);
  }
  return response;
};

export { resetPasswordService };
