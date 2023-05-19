import React, {useEffect, useState} from 'react';
import MatchesContent from "@components/matches/MatchesContent";
import MatchesHead from "@components/matches/MatchesHead";
import {axiosInstance, getDate} from "../../libs/utiles";
import {GET_DAY_MATCHES} from "@constants/webservices";

const MatchesContainer = () => {
  const [matches, setMatches] = useState([]);
  const [day, setDay] = useState(getDate);
  const handleDay = (day: string) => setDay(day)

  useEffect(() => {
    axiosInstance.get(GET_DAY_MATCHES + day).then(res => {
      setMatches(res?.data?.all)
    })
  }, [day])

  return (
    <>
      <MatchesHead handleDay={handleDay}/>
      <MatchesContent matches={matches}/>
    </>
  );
};

export default MatchesContainer;
