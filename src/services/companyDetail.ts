import axiosApiInstance from './request';

const companyDetailService = async () => {
  let response = {};
  try {
    const res = await axiosApiInstance.get(`/company-details/`);
    response = res;
  } catch (error) {
    console.error(error);
  }
  return response;
};

export { companyDetailService };
