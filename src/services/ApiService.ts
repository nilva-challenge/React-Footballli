 import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {appConfig} from '../config/app.config';


const api = axios.create({
    baseURL: appConfig.API_BASE_URL,
});


export default class ApiService {
    public static baseUrl = '';


    public static init() {
        // no interceptor needed. 
    }


    public static setHeader(key: string, value: string) {
        api.interceptors.request.use(
            (config: any) => {
                config.headers = {
                    ...config.headers,
                    [key]: value
                }
                return config;
            }, (error) => {
                return Promise.reject(error);
            }
        )
    }

    public static removeHeader(key: string) {
        api.interceptors.request.use(
            (config) => {
                delete config.headers[key];

                return config;
            }, (error) => {
                return Promise.reject(error);
            }
        )
    }

    public static async get(resource: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
        return await api.get(resource, config);
    }

    public static async post(resource: string, data: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
        return await api.post(resource, data, config);
    }

    public static async patch(recourse: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
        return await api.patch(recourse, config);
    }

    public static async delete(recourse: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
        return await api.delete(recourse, config);
    }

    public static async put(recourse: string, data: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse> {
        return await api.put(recourse, data, config);
    }
}
