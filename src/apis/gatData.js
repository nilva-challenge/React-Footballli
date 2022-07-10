import axios from "axios";
const url = "https://v3.football.api-sports.io/fixtures";
const key1 = "2d396689c6d7e7d473527644589a9210";
const key2 = "367b5a4e2fbd90f710f90c07155b6f95";
const key3 = "02fcf2d6785e14b4135eaf55b5168401";
export const persianGalf2021 = () =>
  axios.get(`${url}?league=290&season=2021`, {
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": key3,
    },
  });

export const azadegan2021 = () =>
  axios.get(`${url}?league=291&season=2021`, {
    headers: {
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": key3,
    },
  });
