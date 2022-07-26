import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { LeaguesListContainer } from "./styles";
import { LeaguesListProps } from "./types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import moment from "moment-jalaali";

export default function LeaguesList({ list }: LeaguesListProps) {
  return (
    <LeaguesListContainer>
      {list.map((league) => (
        <Accordion className="league-accordion" defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Avatar
              className="league-avatar"
              alt={league.league.name}
              src={league.league.logo}
            />
            <Typography>{league.league.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {league.matches.map((match) => (
              <Box className="teams-box">
                <Box className="team-box">
                  <Typography>{match.teams.home.name}</Typography>
                  <Avatar
                    className="league-avatar"
                    alt={match.teams.home.name}
                    src={match.teams.home.logo}
                  />
                </Box>

                <Typography>
                  {moment(match.fixture.date).format("hh:mm")}
                </Typography>
                <Box className="team-box">
                  <Avatar
                    className="league-avatar"
                    alt={match.teams.away.name}
                    src={match.teams.away.logo}
                  />

                  <Typography>{match.teams.away.name}</Typography>
                </Box>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </LeaguesListContainer>
  );
}
