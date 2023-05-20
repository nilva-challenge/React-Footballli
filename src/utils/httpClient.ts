import { IParams } from "@/shared/types";
import axios from "axios";
const BASE_URL="https://core-sport-api.zarebin.ir/api/";
const instance = axios.create({
  baseURL: BASE_URL,
});

export const axiosGet = async (url:string, params:IParams) => {
  const options = {
    method: "GET",
    url: url,
    params,
  
  };
  const response = await instance
    .request(options)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};
