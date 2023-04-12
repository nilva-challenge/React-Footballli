import React from "react";
import MatchComp from "../../components/MatchComp";
import { useRouter } from 'next/router'
import { persianDate } from "../../server/data";

function LivePage() {
  const router = useRouter()
  const gamesData = persianDate.filter(item => item.date.includes(router.query.date))
  return (
      <MatchComp gamesData={gamesData[0]}/>
  );
}

export default LivePage;
