import React from "react";
import styled from "styled-components";

import LeagueAccordion from "./LeagueAccordion";

// types
import {leagueTypeResponse} from "types";


interface Props {
  data: leagueTypeResponse | []
}

const LiveScore: React.FC = () => {

  

  return (
    <Wrapper>
      <LeagueAccordion />
      <LeagueAccordion />
      <LeagueAccordion />
    </Wrapper>
  );
};

export default LiveScore;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
  gap: 0.8rem;
`;
