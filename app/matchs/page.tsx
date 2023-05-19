"use client";
import React, { useState } from "react";
import { ITabItem } from "../Interfaces/ITabItem";
import TabLayout from "../components/TabsLayout/TabLayout";

const Matchs = () => {
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
    <div>
      <TabLayout
        items={items}
        onClick={handleTabItemClick}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default Matchs;
