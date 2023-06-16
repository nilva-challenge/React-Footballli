import axios from "axios";

const callApi = () => {

    const axiosInstance = axios.create({
        baseURL: 'https://core-sport-api.zarebin.ir/api/football/fixtures' //?date=2023-01-04
    });

    axiosInstance.interceptors.request.use(
        (config) => {
            return config
        },
        err => { throw err }
    );

    axiosInstance.interceptors.response.use(
        (res) => {
            return res
        },
        err => {
            throw err
        });

    return axiosInstance;

}

export default callApi;