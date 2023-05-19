"use client";

import React, { useState } from "react";
import TopHeader from "../TopHeader/TopHeader";
import SearchBar from "../SearchBar/SearchBar";
import TabLayout from "../TabsLayout/TabLayout";
import { ITabItem } from "@/app/Interfaces/ITabItem";
import _ from "lodash";

const Header = () => {
  const [selectedItem, setSelectedItem] = useState<ITabItem>({
    id: 2,
    label: "امروز",
  });
  const [items, setItems] = useState([
    { id: 1, label: "دیروز" },
    { id: 2, label: "امروز" },
    { id: 3, label: "فردا" },
  ]);

  const handleTabItemClick = (item: ITabItem): void => {
    setSelectedItem(item);
  };

  return (
    <header className='bg-white shadow-sm'>
      <TopHeader />
      <SearchBar />
      <TabLayout
        items={items}
        onClick={handleTabItemClick}
        selectedItem={selectedItem}
      />
    </header>
  );
};

export default Header;
