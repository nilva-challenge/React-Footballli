import React, { FC } from "react";
import { MatchesScoreProps } from "./index.d";
import ResultSearch from "./MatchesScoreComponents/ResultSearch";
import SingleLeagueContainer from "./MatchesScoreComponents/SingleLeagueContainer";

const MatchesScore: FC<MatchesScoreProps> = ({ fixtures, leagues }) => {
  return (
    <div>
      <div>
        <div className="text-xl font-bold text-right p-4">Live Results</div>
        <div className="mx-4 mb-4 bg-gray-300">
          <ResultSearch />
        </div>
        <div>tabs</div>
      </div>

      <div className="h-96 overflow-y-scroll pb-4 bg-gray-200">
        {leagues.map((item: string) => {
          return (
            <SingleLeagueContainer leagueName={item} fixtures={fixtures} />
          );
        })}
      </div>
    </div>
  );
};

export default MatchesScore;
