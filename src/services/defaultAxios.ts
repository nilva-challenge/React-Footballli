import axios, { AxiosInstance } from "axios";

export const instance = axios.create({
  baseURL: "https://core-sport-api.zarebin.ir/api",
});

export const axiosSetup = (axiosInstance: AxiosInstance): void => {
  axiosInstance.interceptors.request.use(
    (req) => {
      return req;
    },
    (err) => {
      return err;
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res?.data;
    },
    (err) => {
      return err;
    }
  );
};

axiosSetup(instance);

const defaultAxios = {
  instance,
};
export default defaultAxios;
