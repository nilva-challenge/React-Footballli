import React from "react";
import styled from "styled-components";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// components
import Match from "./Match";

// contexts
import { useStateLiveScores } from "contexts/LiveScoresContext";

// types
import leagueTypeResponse from "types/leagueTypeResponse";

const LeagueAccordion = () => {
  const { liveScores }: { liveScores: leagueTypeResponse } =
    useStateLiveScores();

  console.log("cmcmcmcm", liveScores);

  return (
    <Wrapper>
      {liveScores?.all?.map((score: any) => (
        <Accordion key={score.id} defaultExpanded={true}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className="title">
              <img src={score.logo} alt="لوگو" />
              <p className="leagua-name">{score.name}</p>
            </div>
          </AccordionSummary>

          {score.fixtures.map((fixture: any) => (
            <AccordionDetails key={fixture.id}>
              <Match fixture={fixture} />
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </Wrapper>
  );
};

export default LeagueAccordion;

const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    img {
      width: 20px;
    }
  }

  .MuiPaper-root {
    box-shadow: none;
  }
  .MuiButtonBase-root {
    border-bottom: 1.5px solid lightgray;
  }

  .MuiAccordionDetails-root {
    border-bottom: 1.5px solid #ededed;
    padding: 10px;
  }

  .leagua-name {
    font-weight: bold;
    color: #1818f6;
  }
`;
