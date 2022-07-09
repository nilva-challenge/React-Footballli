import axios from "axios";

const baseUrl = "https://v3.football.api-sports.io";
const API_KEY = "a01e8e36f2a1c0fe63bc268d3219d55b";
const config = {
  "x-rapidapi-host": "v3.football.api-sports.io",
  "x-rapidapi-key": API_KEY,
};

export const leaguesApi = (country) => {
  const response = axios({
    method: "get",
    url: `${baseUrl}/leagues`,
    params : {
      country
    },
    headers: config,
  });

  return response;
};

export const matchesApi = ({ date, league , season }) => {
  const response = axios({
    method: "get",
    url: `${baseUrl}/fixtures`,
    params : {
      date,
      league,
      season
    },
    headers: config,
  });
  return response;
};
