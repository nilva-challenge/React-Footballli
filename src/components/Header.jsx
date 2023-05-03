import React from "react";
import Searchbar from "./Searchbar";
import { UilClockEight } from '@iconscout/react-unicons'

const Header = () => {
  return (
    <header className="p-4 bg-white">
      <div className="flex justify-between items-center font-bold text-xl">
        <h3>نتایج زنده</h3>
        <UilClockEight />
      </div>
      <Searchbar/>
    </header>
  );
};

export default Header;
