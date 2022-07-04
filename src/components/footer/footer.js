import React from "react";
import SVGIcon from "../ui/icon/svgIcon";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <ul className={style.navi}>
      <li className={style["navi-item"]}>
        <Link className={style["navi-link"]} to="#">
          <span className={style["navi-icon"]}>
            <SVGIcon name="User" />
          </span>
          <span className={style["navi-text"]}>Competitions</span>
        </Link>
      </li>
      <li className={style["navi-item"]}>
        <Link className={style["navi-link"]} to="#">
          <span className={style["navi-icon"]}>
            <SVGIcon name="User" />
          </span>
          <span className={style["navi-text"]}>Discovery</span>
        </Link>
      </li>
      <li className={style["navi-item"]}>
        <Link className={style["navi-link"]} to="#">
          <span className={style["navi-icon"]}>
            <SVGIcon name="User" />
          </span>
          <span className={style["navi-text"]}>Soccer</span>
        </Link>
      </li>
      <li className={style["navi-item"]}>
        <Link className={style["navi-link"]} to="#">
          <span className={style["navi-icon"]}>
            <SVGIcon name="User" />
          </span>
          <span className={style["navi-text"]}>Leagues</span>
        </Link>
      </li>
      <li className={style["navi-item"]}>
        <Link className={style["navi-link"]} to="#">
          <span className={style["navi-icon"]}>
            <SVGIcon name="User" />
          </span>
          <span className={style["navi-text"]}>Profile</span>
        </Link>
      </li>
    </ul>
  );
};

export default Footer;
