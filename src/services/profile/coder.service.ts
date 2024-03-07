import axiosApiInstance from '../request';

const getCoderProfileService = async () => {
  const response = { data: {}, statusCode: 500 };
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.get(`/coder/`, { headers });
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    console.error(error);
    response.statusCode = error?.data?.status;
  }
  return response;
};

const getCoderAddressService = async () => {
  const response = { data: {}, statusCode: 500 };
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.get(`/address/`, { headers });
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    console.error(error);
    response.statusCode = error?.data?.status;
  }
  return response;
};

const getDigitalPresenceService = async () => {
  const response = { data: {}, statusCode: 500 };
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.get(`/digital-presence/`, { headers });
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    console.error(error);
    response.statusCode = error?.data?.status;
  }
  return response;
};

const getSkillsAndExperienceService = async () => {
  const response = { data: {}, statusCode: 500 };
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.get(`/skills-experience/`, { headers });
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    console.error(error);
    response.statusCode = error?.data?.status;
  }
  return response;
};

const getCoderEducationalQualificationService = async () => {
  const response = { data: {}, statusCode: 500 };
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.get(`/educational-qualification/`, { headers });
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    console.error(error);
    response.statusCode = error?.data?.status;
  }
  return response;
};

const getCoderByIdService = async (id: string) => {
  const response = { data: {}, statusCode: 500 };
  try {
    const headers = { 'Content-Type': 'application/json' };
    const res = await axiosApiInstance.get(`/coder/${id}/`, { headers });
    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    console.error(error);
    response.statusCode = error?.data?.status;
  }
  return response;
};

export {
  getCoderProfileService,
  getCoderAddressService,
  getDigitalPresenceService,
  getSkillsAndExperienceService,
  getCoderEducationalQualificationService,
  getCoderByIdService
};
