import http from "./http.service";
import urls from "./urls";

export const getMatches = async () => {
  const response = await http.get(urls.FOOTBALL_FIXTURES);
  return response;
};
