import React from "react";
import TabItem from "./TabsItem/TabItem";
import { ITabItem } from "../../Interfaces/ITabItem";
import "./style.scss";

interface TabLayoutProps {
  items: Array<ITabItem>;
  onClick: (item: ITabItem) => void;
  selectedItem: ITabItem;
}

const TabLayout = ({ items, onClick, selectedItem }: TabLayoutProps) => {
  return (
    <ul className='flex flex-row py2 h-12 tabLayout bg-white shadow-sm'>
      {items.map((item) => (
        <TabItem
          key={item.id}
          info={item}
          onClick={onClick}
          selectedItem={selectedItem}
        />
      ))}
    </ul>
  );
};

export default TabLayout;
