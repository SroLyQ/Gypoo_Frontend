import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const buildAuthHeader = (request: AxiosRequestConfig<any>) => {
  return {
    ...request.headers,
    'x-access-token': localStorage.getItem('token') || '',
  };
};

axios.interceptors.request.use(
  (request: AxiosRequestConfig<any>) => {
    const authHeader = buildAuthHeader(request);
    request = {
      ...request,
      headers: {
        ...authHeader,
      },
    };
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    return response;
  },
  (error) => {
    if (error.response?.status == 403 || error.response?.status == 401) {
      localStorage.setItem('token', '');
      return error.response;
    }
    return Promise.reject(error);
  },
);

const apiClient = axios;

export default apiClient;
