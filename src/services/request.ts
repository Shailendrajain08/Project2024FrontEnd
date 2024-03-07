import axios from 'axios';
import { onResponseError } from './handle-response';
import TokenService from './auth/token.service';

const axiosApiInstance = axios.create();

// Need to update when api is working
const apiPath = 'https://api-main.hirecoder.info/api';

axiosApiInstance.interceptors.request.use(
  async (config: any) => {
    const token = TokenService.getLocalAccessToken()
      ? `Bearer ${TokenService.getLocalAccessToken()}`
      : config.headers.Authorization;
    if (config?.apiVersion) {
      config.baseURL = `${apiPath}/${config.apiVersion}`;
    } else {
      config.baseURL = `${apiPath}/v1`;
    }

    // config.baseURL = apiPath;
    config.headers.Authorization = token;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => onResponseError(error)
);

export default axiosApiInstance;
