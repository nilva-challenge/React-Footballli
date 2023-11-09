import axios, { type AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL, timeout: 10000 });

// set Authorization
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = getToken();
//     if (token) config.headers.Authorization = `Token ${getToken()}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// TODO: set Error Handling
// axiosInstance.interceptors.response.use(
//   function (response: AxiosResponse) {
//     return response;
//   },
//   function (error: AxiosError) {
//     handleRequestErrors(error);
//     return Promise.reject(error);
//   },
// );

export const http = {
  post: <T>(url: string, data?, config?) => axiosInstance.post<T>(url, data, config),
  get: <T, D>(url: string, config?: AxiosRequestConfig<D>) => axiosInstance.get<T>(url, config),
  put: <T>(url: string, data?, config?) => axiosInstance.put<T>(url, data, config),
  delete: <T>(url: string, data?) => axiosInstance.delete<T>(url, data),
};
