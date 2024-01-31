import React, { useContext } from "react";
import { useFetchGames } from "../hooks/useFetchGames";
import { GamesContext } from "../contexts/gameContext";

const GameList = () => {
  const gamesContext = useContext(GamesContext);
  const date = gamesContext?.date;

  const { loading, data, error } = useFetchGames(date as string);

  return <div></div>;
};

export default GameList;
