import React, { FC, useEffect, useState } from "react";
import { SingleLeagueProps } from "./index.d";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import SingleMatchResult from "../SingleMatchResult";

const SingleLeagueContainer: FC<SingleLeagueProps> = ({
  fixtures,
  leagueName,
}) => {
  const [leagueMatches, setLeagueMatches] = useState([]);
  const [showResults, setShowResults] = useState(false);
  useEffect(() => {
    const filteredLeague = fixtures.filter(
      (item: any) => item.league.name === leagueName
    );
    setLeagueMatches(filteredLeague);
  }, []);

  return (
    <div className="mx-4 my-4  bg-white rounded-lg py-1 ">
      <div className="flex flex-row-reverse justify-between items-center p-3 ">
        <div className="flex flex-row-reverse gap-2 items-center ">
          <div className="w-5 h-5">
            {/* @ts-ignore */}
            <img src={leagueMatches[0]?.league.logo} alt={leagueName} />
          </div>
          <div>{leagueName}</div>
        </div>
        <div
          className="cursor-pointer hover:scale-125 hover:text-yellow-800"
          onClick={() => setShowResults((prevState) => !prevState)}
        >
          {showResults ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
      {showResults && (
        <div>
          {leagueMatches.map((item: any) => {
            const { teams, score, fixture } = item;
            return (
              <SingleMatchResult score={score} teams={teams} key={fixture.id} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SingleLeagueContainer;
