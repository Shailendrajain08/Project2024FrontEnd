import axiosApiInstance from './request';
const getAdminDataService = async (params: any) => {
  try {
    const headers = { 'Content-Type': 'application/json' };
    const response = await axiosApiInstance.get('/admin-dashboard/', { headers, params: params });
    return response;
  } catch (error: any) {
    throw error;
  }
};

export { getAdminDataService };
