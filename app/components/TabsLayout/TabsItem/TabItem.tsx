import React from "react";
import { ITabItem } from "app/Interfaces/ITabItem";
import classes from "./style.module.scss";

interface TabItemProps {
  info: ITabItem;
  onClick: (item: ITabItem) => void;
  selectedItem: ITabItem;
}

const TabItem = ({ info, onClick, selectedItem }: TabItemProps) => {
  const activeClassName = info.id === selectedItem.id ? classes.ActiveTab : "";
  return (
    <li
      className={[
        "bg-transparent focus-visible:outline-none text-sm font-light items-center flex justify-center",
        activeClassName,
      ].join(" ")}
      onClick={() => onClick(info)}
    >
      {info.label}
    </li>
  );
};

export default TabItem;
