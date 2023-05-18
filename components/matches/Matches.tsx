import React, {useEffect, useState} from 'react';
import MatchesContent from "@components/matches/MatchesContent";
import MatchesHead from "@components/matches/MatchesHead";
import {axiosInstance} from "../../libs/utiles";
import {GET_DAY_MATCHES} from "@constants/webservices";

const MatchesContainer = () => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    axiosInstance.get(GET_DAY_MATCHES).then(res => {
      // console.log(res.data)
      setMatches(res?.data?.all)
    })
  }, [])
  return (
    <>
      <MatchesHead/>
      <MatchesContent matches={matches}/>
    </>
  );
};

export default MatchesContainer;
