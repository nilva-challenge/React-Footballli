import axios from "axios";
import { setScores } from "../redux/football/slice";
import { store } from "../redux/store";

const Api = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // headers: {
    //   "Content-Type": "application/json",
    //   Accept: "application/json",
    // },
  });

  //instance req Error
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      console.log("error", error);
      store.dispatch(setScores(null));
      return Promise.reject(error);
    }
  );

  //instance response Error
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("error", error);
      store.dispatch(setScores(null));
      return Promise.reject(error);
    }
  );
  return instance;
};
export default Api;
