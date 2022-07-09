import axios from "axios";

const baseUrl = "https://v3.football.api-sports.io";
const API_KEY = "b1e5edfeb01ec2fb3ab4223f30151ad1";
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
