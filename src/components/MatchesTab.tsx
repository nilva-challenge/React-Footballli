import React, { useEffect } from "react";
import ApiService from "../services/ApiService";
import { appConfig } from "../config/app.config";

const MatchesTab: React.FC = () => {
  useEffect(() => {
    async function getData() {
      await fetchData();
    }

    getData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await ApiService.get(appConfig.API_BASE_URL);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return <></>;
};

export default MatchesTab;
