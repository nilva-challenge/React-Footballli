import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "styled-components";

const Title = () => {
  return (
    <Wrapper>
      <h1>نتایج زنده</h1>

      <AccessTimeIcon fontSize="large" />
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;
