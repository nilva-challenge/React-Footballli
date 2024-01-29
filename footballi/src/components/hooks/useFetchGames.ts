import { useState, useEffect } from "react";
import { fetchGames } from "../services/api";

export const useFetchGames = (date: string) => {
  const [fetchDataState, setFetchDataState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    setFetchDataState((prevState) => ({ ...prevState, loading: true }));

    fetchGames(date)
      .then((data) => {
        setFetchDataState({ loading: false, data, error: null });
      })
      .catch((error) => {
        setFetchDataState({ loading: false, data: null, error: error.message });
      });
  }, [date]);

  return { loading: fetchDataState.loading, data: fetchDataState.data, error: fetchDataState.error };
};
