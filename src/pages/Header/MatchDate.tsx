import React from 'react';
import styled from "styled-components";

const MatchDate = () => {
  return (
    <Wrapper>
        <h3>امروز</h3>
    </Wrapper>
  )
}

export default MatchDate;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: darkgray;
  padding-bottom: 1.6rem;
`;
