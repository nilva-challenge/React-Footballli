import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getMatches = async (date: string) => {
  return axios.get(
    `https://core-sport-api.zarebin.ir/api/football/fixtures/?date=${date}`
  );
};

export const useMatchesListAPI = (date: string) => {
  return useQuery({
    queryKey: ["MATCHS", date],
    queryFn: () => getMatches(date),
    select: (data) => data.data,
  });
};
