import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const SearchFilter = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="جستجو..." />

      <SearchIcon />
    </Wrapper>
  );
};

export default SearchFilter;

const Wrapper = styled.div`
  padding: 2rem;
  position: relative;

  input {
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 0.25rem;
    outline: none;
    font-size: 1rem;
    background: rgb(241, 241, 241);
    color: #877e7e;
    padding-right: 3.4rem;
  }

  svg {
    position: absolute;
    right: 3.2rem;
    top: 2.7rem;
    transform: scaleX(-1);
    color: #877e7e;
  }
`;
