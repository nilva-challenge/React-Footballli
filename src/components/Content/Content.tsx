import { useQuery } from "@tanstack/react-query";
import { FC, useContext, useEffect, useState } from "react";
import { useDate } from "../../hooks/UseDate";
import DateSelection from "../DateSelection/DateSelection";
import LeagueCard from "../LeagueCard/LeagueCard";
// @ts-ignore
import { groupBy } from "lodash";
import { useData } from "../../hooks/UseData";

const Content: FC = () => {
  const { date } = useDate();
  const { setFilteredData, setMainData, filteredData } = useData();

  const { isLoading, error, data } = useQuery(
    ["fixtures", date],
    () =>
      fetch(`https://v3.football.api-sports.io/fixtures?date=${date}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "fb4debf164225cac508768e4f814a70e",
        },
      }).then((res) => {
        return res.json();
      }),
    {
      onSuccess: (data) => {
        setMainData(data.response);
        setFilteredData(data.response);
      },
    }
  );

  const groupedMatch = groupBy(filteredData, "league.name");

  return (
    <>
      <DateSelection />

      {isLoading && !data ? (
        <span>Loading...</span>
      ) : (
        <main className="bg-[#f5f6fb] pt-1 px-4">
          {Object.keys(groupedMatch).map((item) => (
            <LeagueCard title={item} matches={groupedMatch[item]} key={item} />
          ))}
        </main>
      )}
    </>
  );
};

export { Content };
