import { instance } from "./defaultAxios";

const http = {
  get: async (url: string) => {
    return instance.get(url);
  },
};

export default http;
