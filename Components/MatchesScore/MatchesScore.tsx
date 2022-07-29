import React, { FC } from "react";
import { MatchesScoreProps } from "./index.d";
import DateSelect from "./MatchesScoreComponents/DateSelect";
import ResultSearch from "./MatchesScoreComponents/ResultSearch";
import SingleLeagueContainer from "./MatchesScoreComponents/SingleLeagueContainer";

const MatchesScore: FC<MatchesScoreProps> = ({
  fixtures,
  leagues,
  onSearchHandler,
  searchField,
  activeDateTabHandler,
}) => {
  return (
    <div>
      <div>
        <div className="text-xl font-bold text-right p-4">نتایج زنده</div>
        <div className="mx-4 bg-gray-100">
          <ResultSearch
            searchValue={onSearchHandler}
            searchField={searchField}
          />
        </div>
        <div>
          <DateSelect activeDateTabHandler={activeDateTabHandler} />
        </div>
      </div>

      <div className="h-96 overflow-y-scroll pb-4 bg-gray-200">
        {fixtures.length < 1 && (
          <div className="h-64  text-center w-full flex justify-center items-center">
            SomeThing went wrong or your search result is empty
          </div>
        )}
        {fixtures.length > 0 &&
          leagues.map((league: string) => {
            return (
              <SingleLeagueContainer
                leagueName={league}
                key={league}
                fixtures={fixtures}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MatchesScore;
