import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE_URL, RAPID_API_HOST } from "./endpoints";

const config: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY || "",
    "x-rapidapi-host": RAPID_API_HOST,
  },
};

export const apiInstance: AxiosInstance = axios.create(config);
