import React from "react";
import TopHeader from "../TopHeader/TopHeader";
import SearchBar from "../SearchBar/SearchBar";
const Header = () => {
  return (
    <header className='bg-white shadow-sm w-full fixed'>
      <TopHeader />
      <SearchBar />
    </header>
  );
};

export default Header;
