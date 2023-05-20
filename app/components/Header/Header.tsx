import React from "react";
import TopHeader from "../TopHeader/TopHeader";
import SearchBar from "../SearchBar/SearchBar";
import TabLayout from "../TabsLayout/TabLayout";
import { ITabItem } from "@/app/Types/ITabItem";
import _ from "lodash";

const Header = () => {
  return (
    <header className='bg-white shadow-sm'>
      <TopHeader />
      <SearchBar />
    </header>
  );
};

export default Header;
