import axios from "axios";
import { useState, useCallback } from "react";

const UseHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const RequestHttp = useCallback(async (reqconfig, applyData) => {
    try {
      let data;
      setIsLoading(true);
      setError(null);
      if (reqconfig.method === "POST") {
        data = await axios.post(reqconfig.url, {
          headers: reqconfig.headers ? reqconfig.headers : {},
          data: reqconfig.data ? reqconfig.data : null,
        });
      } else {
        data = await axios.get(reqconfig.url, {
          headers: reqconfig.headers ? reqconfig.headers : {},
          data: reqconfig.data ? reqconfig.data : null,
          params: reqconfig.params ? reqconfig.params : {},
        });
      }

      applyData?.(data.response);
    } catch (err) {
      if (err.response) {
        // The client was given an error response (5xx, 4xx)
        console.log(err.response);
      } else if (err.request) {
        // The client never received a response, and the request was never left
        console.log(err.request);
      } else {
        // Anything else
        console.log(err);
      }
      setError(err.message);
    }
    setIsLoading(false);
  }, []);
  return { isLoading, error, RequestHttp };
};

export default UseHttp;
