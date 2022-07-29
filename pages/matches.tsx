import React, { useEffect, useState } from "react";
import MatchesScore from "../Components/MatchesScore";
import { getSpecificDate } from "../utils/dateUtils";

const Matches = () => {
  //getting all available fixtures for a specific date
  const [allFixturesData, setAllfixturesData] = useState([]);
  const [allUniqueLeagues, setAllUniqueLeagues] = useState([]);

  //get yesterdays fixtures as initial props
  const [activeTab, setActiveTab] = useState(getSpecificDate(-1));

  //filtering data after search
  const [filteredLeagues, setFilteredLeagues] = useState([]);
  const [filteredFixtures, setFilteredFixtures] = useState([]);

  const [searchField, setSearchField] = useState("");

  //setting initial state after first page load
  useEffect(() => {
    fetch(`https://v3.football.api-sports.io/fixtures?date=${activeTab}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "bab104d7215beb3aa15b4edce909daa3",
      },
    })
      .then((response) => {
        console.log(response, "resp");
        return response.json();
      })
      .then((data) => {
        const allFixtures = data.response;
        setFilteredFixtures(allFixtures);
        setAllfixturesData(allFixtures);

        //extract unique league names
        const league: any = [];
        allFixtures.forEach((item: any) => {
          if (!league.includes(item.league.name)) {
            league.push(item.league.name);
          }
        });
        setAllUniqueLeagues(league);
        setFilteredLeagues(league);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [activeTab]);

  //filtering fixtures and leagues based on search
  useEffect(() => {
    if (searchField.length === 0) {
      setFilteredLeagues(allUniqueLeagues);
      setFilteredFixtures(allFixturesData);
    } else {
      const filteredFixtures = allFixturesData.filter(
        (item: any) =>
          item?.league?.name
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
          item?.teams?.home.name
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
          item?.teams?.away.name
            .toLowerCase()
            .includes(searchField.toLowerCase())
      );
      setFilteredFixtures(filteredFixtures);
      const league: any = [];
      filteredFixtures.forEach((item: any) => {
        if (!league.includes(item.league.name)) {
          league.push(item.league.name);
        }
      });
      setFilteredLeagues(league);
    }
  }, [searchField]);

  return (
    <MatchesScore
      searchField={searchField}
      activeDateTabHandler={(e: string) => setActiveTab(e)}
      fixtures={filteredFixtures}
      leagues={filteredLeagues}
      onSearchHandler={(e: string) => setSearchField(e)}
    />
  );
};

export default Matches;
