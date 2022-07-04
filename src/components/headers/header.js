import React from "react";
import HeaderSearch from "./headerSearch";
import style from "./header.module.css";
import SVGIcon from "../ui/icon/svgIcon";

const Header = () => {
  return (
    <>
      <div className={style["header-title"]}>
      <h2>Live Result</h2>
        <SVGIcon name="Clock" />
        
      </div>
      <div className={style["header-search"]}>
        <HeaderSearch />
      </div>
    </>
  );
};

export default Header;
