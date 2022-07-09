import React, { useEffect } from "react";
import { leaguesApi, matchesApi } from "../services/APIs";
import { mockLeagues, mockMatches } from "./mock";
import { filterSeasons, getDate } from "../utils";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  //states for handling async data from APIs
  const [isLoading, setIsLoading] = React.useState(false);
  const [leagues, setLeagues] = React.useState([]);
  const [matches, setMatches] = React.useState(mockMatches.data.response);
  const [search, setSearch] = React.useState("england");
  const [error, setError] = React.useState();

  // console.log(matches);

  //states for handling sync logics
  const [dates, setDates] = React.useState();
  const [expanded, setExpanded] = React.useState(false);
  const [specificLeague, setSpecificLeague] = React.useState();
  const [specificSeason, setSpecificSeason] = React.useState();
  const [specificDate, setSpecificDate] = React.useState();

  // get Leagues base on country name
  const getLeagues = async () => {
    //loading state
    setIsLoading(true);
    //request
    try {
      const {
        data: { response },
      } = await leaguesApi(search);
      //set Leagues
      console.log(response);
      let items;
      if (response.length > 5) {
        items = response.slice(0, 5);
        setLeagues(() => filterSeasons(items));
      } else {
        setLeagues(() => filterSeasons(response));
      }
      setIsLoading(false);
    } catch (error) {
      // handle errors
      setIsLoading(false);
      console.log(error);
      setError(error);
    }
  };

  // get matches base on leagues-id & season & date
  const getMatches = async (league, season) => {
    //loading state
    setIsLoading(true);
    //request
    try {
      const {
        data: { response },
      } = await matchesApi({
        league,
        season,
      });
      //set Matches

      setMatches(() => {
        return response.map((data) => {
          const formatDate = new Date(data.fixture.date).toLocaleDateString(
            "us-en",
            {
              month: "long",
              day: "numeric",
            }
          );
          return {
            ...data,
            fixture: { ...data.fixture, date: formatDate },
          };
        });
      });

      setIsLoading(false);
    } catch (error) {
      //handle errors
      setIsLoading(false);
      console.log(error);
      setError(error);
    }
  };

  //set date base on the seasons
  const setDateHandler = React.useCallback((seasons) => {
    setDates(getDate(seasons.start, seasons.end));
  }, []);

  React.useEffect(() => {
    if (expanded) {
      getMatches(specificLeague, specificSeason);
    }
  }, [expanded, specificLeague, specificSeason]);

  return (
    <AppContext.Provider
      value={{
        getLeagues,
        getMatches,
        setSearch,
        setDateHandler,
        setDates,
        setExpanded,
        setSpecificLeague,
        setSpecificDate,
        setSpecificSeason,
        specificDate,
        isLoading,
        matches,
        leagues,
        search,
        dates,
        expanded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// global context
const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContextProvider, useGlobalContext };
