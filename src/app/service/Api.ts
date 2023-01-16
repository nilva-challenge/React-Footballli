import axios from "axios";

const Api = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // headers: {
    //   "Content-Type": "application/json",
    //   Accept: "application/json",
    // },
  });
  return instance;
};
export default Api;
