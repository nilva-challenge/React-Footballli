import { useState, useEffect } from "react";
import { getPostPage } from "../api/axios";

const usePosts = (query, pageNum) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  // for developing Calandar for app
  //const [date, setDate] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;
    if (query.length >= 3 || query.length === 0) {
      getPostPage(query)
        .then((data) => {
          setResults((prev) => [...prev, ...data]);
          setIsLoading(false);
        })
        .catch((e) => {
          setIsLoading(false);
          if (signal.aborted) return;
          setIsError(true);
          setError({ message: e.message });
        });
    }

    return () => controller.abort();
  }, [query, pageNum]);

  return { isLoading, isError, results, error };
};

export default usePosts;
