import axiosApiInstance from './request';

const saveSelectedSkillService = async (payload: any) => {
  const headers = { 'Content-Type': 'application/json' };
  const response: { [k: string]: any } = {};
  try {
    const res = await axiosApiInstance.post(`/skills/`, payload, {
      headers
    });

    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    response.statusCode = error?.data?.status;
  }
  return response;
};

const saveSkillExperienceService = async (payload: any) => {
  const headers = { 'Content-Type': 'application/json' };
  const response: { [k: string]: any } = {};
  try {
    const res = await axiosApiInstance.post(`/skills-experience/`, payload, {
      headers
    });

    if (res) {
      response.data = res?.data;
      response.statusCode = res?.status;
    }
  } catch (error: any) {
    response.statusCode = error?.data?.status;
  }
  return response;
};

export { saveSelectedSkillService, saveSkillExperienceService };
