import React, { useState, useEffect } from "react";

import apiService from "utils/api";

const Home = () => {
  const [data, setData] = useState([]);
  const {getLiveScores}: {getLiveScores: Function} = apiService;

  useEffect(() => {
    getLiveScores("2023-01-25").then((res: any) => {
        console.log('fuuuckckckckc', res)
    })
    }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
