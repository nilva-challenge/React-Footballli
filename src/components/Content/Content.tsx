import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import { useDate } from "../../hooks/UseDate";
import DateSelection from "../DateSelection/DateSelection";
import LeagueCard from "../LeagueCard/LeagueCard";
// @ts-ignore
import { groupBy } from "lodash";

const Content: FC = () => {
  const { date, setDate } = useDate();

  // const { status, data } = useQuery(["characters"], () =>
  //   fetch("https://rickandmortyapi.com/api/character/").then((res) =>
  //     res.json()
  //   )
  // );

  // const { isLoading, error, data } = useQuery(["fixtures", date], () =>
  //   fetch(`https://v3.football.api-sports.io/fixtures?date=${date}`, {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "v3.football.api-sports.io",
  //       "x-rapidapi-key": "49d02c77b5706e7a570cfa7c63e6d2a4",
  //     },
  //   }).then((res) => {
  //     return res.json();
  //   })
  // );

  const groupedMatch = groupBy(data?.response, "league.name");
  console.log("Grouped Matches are:", Object.keys(groupedMatch));

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
