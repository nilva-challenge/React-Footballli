import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDate } from "../../hooks/UseDate";
import DateSelection from "../DateSelection/DateSelection";
import LeagueCard from "../LeagueCard/LeagueCard";
// @ts-ignore
import { groupBy } from "lodash";

const Content = () => {
  const { date, setDate } = useDate();

  // const { status, data } = useQuery(["characters"], () =>
  //   fetch("https://rickandmortyapi.com/api/character/").then((res) =>
  //     res.json()
  //   )
  // );

  const { isLoading, error, data } = useQuery(["fixtures", date], () =>
    fetch(`https://v3.football.api-sports.io/fixtures?date=${date}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "70b752e2897a07944ad7f8c1f1af3ce3",
      },
    }).then((res) => {
      return res.json();
    })
  );

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
