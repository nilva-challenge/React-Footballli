import { useGlobalContext } from "../context/context";
import { FaSearch } from "react-icons/fa";

import styled from "styled-components";

const Search = styled.form`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    font-family: "Open Sans";
    font-size: 62.5%;
    color: #ba265d;
    background-color: #f4f2f2;
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 100px;
    width: 90%;
    transition: all 0.2s;
    margin-right: -2rem;
    :focus {
      outline: none;
      width: 100%;
      background-color: #f0eeee;
    }
  }

  button {
    border: none;
    background-color: #f4f2f2;
    :focus {
      outline: none;
    }
    :active {
      transform: translateY(2px);
    }
  }
`;

export default function Searchbox() {
  const { search, setSearch, getLeagues } = useGlobalContext();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (search) {
      getLeagues();
    } else {
      console.log("pls fill the text box");
    }
  };

  return (
    <Search onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search Country"
      />
      <button type="submit">
        <FaSearch className="icon" />
      </button>
    </Search>
  );
}
