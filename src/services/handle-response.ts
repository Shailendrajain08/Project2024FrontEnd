import { AxiosError } from 'axios';
import TokenService from './auth/token.service';
import axiosApiInstance from './request';

export const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  const originalConfig = error.config as any;
  if (error.response) {
    const status = error.response.status;

    // Access Token was expired
    if (!originalConfig?.url?.includes('/login') && status === 401 && !originalConfig?.['_retry']) {
      originalConfig['_retry'] = true;

      const refreshToken = TokenService.getLocalRefreshToken();

      try {
        const rs = await axiosApiInstance.post(`/token-refresh/`, {
          refresh_token: refreshToken
        });
        const { access_token } = rs.data;

        TokenService.updateLocalAccessToken(access_token);
        if (originalConfig) {
          originalConfig.headers['Authorization'] = `Bearer ${TokenService.getLocalAccessToken()}`;
        }

        return axiosApiInstance(originalConfig);
      } catch (_error) {
        // Need to update with status code and routh path
        TokenService.removeUser();
        window.location.href = '/login';
        return Promise.reject(_error);
      }
    } else {
      if (originalConfig?.url?.includes('/token-refresh')) {
        TokenService.removeUser();
        // Need to update with status code and routh path
        window.location.href = '/login';
      }
    }
    return error?.response as any;
  }

  return Promise.reject(error);
};
