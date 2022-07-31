import axios from "axios";
import { useState } from "react";
import { CompetitionsDataType } from "../types/server.ts";

const FARZAD_API_KEY = "5d33a96b7e714bdc90e4b5094636ffca";
//put your api key in .env file and use replace FARZAD_API_KEY with OTHER_API_KEY
let OTHER_API_KEY = process.env.REACT_APP_FARZAD;
// for see past matches score use --->  ?league=290&season=2021 <--- on param
let link = "https://v3.football.api-sports.io/fixtures?live=all";

export function useCompetitionsData() {
  let [data, setData] = useState<CompetitionsDataType[]>();
  let [loading, setLoading] = useState(false);
  let [hasError, setHasError] = useState(null);
  function retrieveCompetitionsData() {
    setLoading(true);
    setHasError(null);

    return axios
      .get(link, {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": FARZAD_API_KEY,
        },
      })
      .then((response) => {
        setData(response.data.response);
      })
      .catch((error) => {
        setHasError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { retrieveCompetitionsData, data, loading, hasError };
}
