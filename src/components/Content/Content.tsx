import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DateSelection from "../DateSelection/DateSelection";
import LeagueCard from "../LeagueCard/LeagueCard";

const Content = () => {
  // const [date, setDate] = useState("");

  // const { isLoading, error, data } = useQuery(['repoData',date], () =>
  //   fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
  //     res.json()
  //   ),{
  //     // set data
  //   }
  // )

  return (
    <>
      <DateSelection />

      <main className="bg-[#f5f6fb] h-[80vh] pt-1 px-4">
        <LeagueCard />
        <LeagueCard />
      </main>
    </>
  );
};

export { Content };
