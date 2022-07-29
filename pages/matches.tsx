import React, { useEffect, useState } from "react";
import MatchesScore from "../Components/MatchesScore";

const Matches = () => {
  const [fixtures, setFixtures] = useState([]);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    fetch("https://v3.football.api-sports.io/fixtures?date=2022-07-29", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "bab104d7215beb3aa15b4edce909daa3",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const allFixtures = data.response;
        setFixtures(allFixtures);

        //extract unique league names
        const league: any = [];
        allFixtures.forEach((item: any) => {
          if (!league.includes(item.league.name)) {
            league.push(item.league.name);
          }
        });
        setLeagues(league);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <MatchesScore fixtures={fixtures} leagues={leagues} />;
};

export default Matches;
