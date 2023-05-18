import React, {useEffect} from 'react';
import MatchesContent from "@components/matches/MatchesContent";
import MatchesHead from "@components/matches/MatchesHead";
import {axiosInstance} from "../../libs/utiles";
import {GET_DAY_MATCHES} from "@constants/webservices";

const MatchesContainer = () => {
  useEffect(() => {
    axiosInstance.get(GET_DAY_MATCHES).then(res => {
      console.log(res.data)
    })
  }, [])
  return (
    <>
      <MatchesHead/>
      <MatchesContent/>
    </>
  );
};

export default MatchesContainer;
