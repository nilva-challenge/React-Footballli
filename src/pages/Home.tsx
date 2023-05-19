import React, { useState, useEffect } from "react";

// api services
import apiService from "services/api";

// utils
import getToday from "utils/getToday";

// context
import { useStateSelectedDate } from "contexts/SelectedDateContext";

// components
import Loader from "components/Loader";
import Header from "./Header";
import LiveScore from "./LiveScore";

// types
import leagueTypeResponse from "types/leagueTypeResponse";

// contexts
import { useStateLiveScores } from "contexts/LiveScoresContext";

const Home = () => {
  const [data, setData] = useState<leagueTypeResponse | []>([]);
  const [loading, setLoading] = useState(false);
  const { getLiveScores }: { getLiveScores: Function } = apiService;
  const {onLiveScoresChange} = useStateLiveScores();

  // context methods
  const { selectedDate, onChangeSelectedDate } = useStateSelectedDate();


  useEffect(() => {
    setLoading(true);
    getLiveScores(getToday()).then((res: any) => {
      setData(res as leagueTypeResponse);
      console.log('akdcmccffff', res)
      onLiveScoresChange(res)
      setLoading(false);
    });
  }, []);

  // onChangeSelectedDate('new dddaatteee')

  return (
    <div>
      <Header />

      <LiveScore/>

      <Loader loading={loading} />
    </div>
  );
};

export default Home;
