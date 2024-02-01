import { useState, useEffect } from "react";
import { fetchGames } from "../services/api";

export type DataType = {
  loading: boolean;
  error: string;
  data: any;
};

export const useFetchGames = (date: string) => {
  const [fetchDataState, setFetchDataState] = useState<DataType>({
    loading: true,
    error: "",
    data: [],
  });

  useEffect(() => {
    setFetchDataState((prevState) => ({ ...prevState, loading: true }));

    fetchGames(date)
      .then((data) => {
        setFetchDataState({ loading: false, data, error: "" });
      })
      .catch((error) => {
        setFetchDataState({ loading: false, data: [], error: error.message });
      });
  }, [date]);

  return { loading: fetchDataState.loading, data: fetchDataState.data, error: fetchDataState.error };
};
