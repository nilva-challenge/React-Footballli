import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://core-sport-api.zarebin.ir/api/football",
});

export default apiCall;
