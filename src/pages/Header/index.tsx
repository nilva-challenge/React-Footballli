import React from "react";
import styled from "styled-components";

// components
import Title from "./Title";
import SearchFilter from "./SearchFilter";
import MatchDate from "./MatchDate";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title />
      <SearchFilter />
      <MatchDate />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color: white;
`;
