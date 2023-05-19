import React, { useState, useEffect } from "react";

// api services
import apiService from "services/api";

// utils
import getToday from "utils/getToday";

// context
import { useStateSelectedDate } from "contexts/SelectedDateContext";

// components
import Loader from "components/Loader";

const Home = () => {
  const [data, setData] = useState([]);
  const { getLiveScores }: { getLiveScores: Function } = apiService;

  // context methods
  const {selectedDate, onChangeSelectedDate} = useStateSelectedDate();


  useEffect(() => {
    getLiveScores(getToday()).then((res: any) => {

    });

    // onChangeSelectedDate('new dddaatteee')
  }, []);

  return (
    <div>
      <h1>محمد لطفی</h1>

      <Loader />
    </div>
  );
};

export default Home;
