import axiosApiInstance from './request';

const registerService = async (payload: any) => {
  const response = { data: {}, statusCode: 500 };
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.post(`/register/`, payload, {
      headers
    });
    response.data = res?.data;
    response.statusCode = res?.status;
  } catch (error: any) {
    throw error;
  }
  return response;
};

const companyDetailServices = async (payload: any) => {
  const response = { data: {} };
  try {
    const headers = {
      'Content-Type': 'multipart/form-data'
    };
    const res = await axiosApiInstance.post(`/company-details/`, payload, {
      headers
    });
    response.data = res;
  } catch (error: any) {
    throw error;
  }

  return response;
};

const updateCompanyDetailIdService = async (payload: any, userId: string) => {
  const response = { data: {} };
  try {
    const headers = {
      'Content-Type': 'multipart/form-data'
    };
    const res = await axiosApiInstance.patch(`/company-details/${userId}/`, payload, { headers });
    if (res) {
      response.data = res;
    }
  } catch (error: any) {
    throw error;
  }
  return response;
};
const addressService = async (payload: any) => {
  const response = { data: {} };
  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    const res = await axiosApiInstance.post(`/address/`, payload, { headers });
    if (res) {
      response.data = res;
    }
  } catch (error: any) {
    throw error;
  }
  return response;
};
const updateAddressService = async (payload: any, userId: string) => {
  const response = { data: {} };
  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    const res = await axiosApiInstance.put(`/address/${userId}/`, payload, { headers });
    if (res) {
      response.data = res;
    }
  } catch (error: any) {
    throw error;
  }
  return response;
};

const digitalPresenceService = async (payload: any) => {
  const response = { data: {} };
  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    const res = await axiosApiInstance.post(`/digital-presence/`, payload, { headers });
    if (res) {
      response.data = res;
    }
  } catch (error: any) {
    throw error;
  }
  return response;
};
const updateDigitalPresenceService = async (payload: any, userId: string) => {
  const response = { data: {} };
  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    const res = await axiosApiInstance.put(`/digital-presence/${userId}/`, payload, { headers });
    if (res) {
      response.data = res;
    }
  } catch (error: any) {
    throw error;
  }
  return response;
};

const verifyEmailService = async (payload: any) => {
  const response = { data: {} };
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.post(`/verify-email/`, payload, {
      headers
    });
    response.data = res;
  } catch (error) {
    throw error;
  }
  return response;
};
const resentEmailVerifyService = async (payload: any) => {
  const response = { data: {} };
  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    const res = await axiosApiInstance.post(`/resend-verification-email/`, payload, {
      headers
    });
    response.data = res;
  } catch (error: any) {
    throw error;
  }

  return response;
};

const getCountries = async () => {
  let response = {};
  try {
    // Need to update path when backend confirmed
    const res = await axiosApiInstance.get('/countries/');
    response = res?.data;
  } catch (error) {
    console.error(error);
  }
  return response;
};

const getStates = async () => {
  let response = {};
  try {
    // Need to update path when backend confirmed
    const res = await axiosApiInstance.get('/states/');
    response = res?.data;
  } catch (error) {
    console.error(error);
  }
  return response;
};

const getCities = async () => {
  let response = {};
  try {
    // Need to update path when backend confirmed
    const res = await axiosApiInstance.get('/cities/');
    response = res?.data;
  } catch (error) {
    console.error(error);
  }
  return response;
};

export {
  getCountries,
  getStates,
  getCities,
  registerService,
  addressService,
  updateAddressService,
  verifyEmailService,
  companyDetailServices,
  updateCompanyDetailIdService,
  digitalPresenceService,
  updateDigitalPresenceService,
  resentEmailVerifyService
};
