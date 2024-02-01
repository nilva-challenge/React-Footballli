import LeagueCard from "../league-card";
import React, { useContext } from "react";
import { useFetchGames } from "../hooks/useFetchGames";
import { GamesContext } from "../contexts/gameContext";

const GameList = () => {
  const gamesContext = useContext(GamesContext);
  const date = gamesContext?.date;

  const { loading, data, error } = useFetchGames(date as string);

  if (!data.length && loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return data?.all?.map((league: any) => <LeagueCard key={league.id} league={league} />);
};

export default GameList;
