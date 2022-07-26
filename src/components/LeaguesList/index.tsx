import { Box } from "@mui/material";
import React from "react";
import { LeaguesListContainer } from "./styles";
import { LeaguesListProps } from "./types";

export default function LeaguesList({ list }: LeaguesListProps) {
  return (
    <LeaguesListContainer>
      {list.map((league) => (
        <Box>{league.league.name}</Box>
      ))}
    </LeaguesListContainer>
  );
}
