import React from "react";
import Card from "../ui/card/card";
import { NavLink } from "react-router-dom";

import style from "./navbar.module.css";
const Navbar = (props) => {
  return (
    <Card>
      <div className={style.header}>
        <nav>
          <ul>
            <li>
              <NavLink
                activeClassName={style.active}
                data-toggle="tab"
                to="/Contents/:2020-02-11"
              >
                <span className={style["nav-text"]}>Saturday</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={style.active}
                data-toggle="tab"
                to="/Contents/:2020-02-09"
              >
                <span className={style["nav-text"]}>Friday</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={style.active}
                data-toggle="tab"
                to="/Contents/:2020-02-08"
              >
                <span className={style["nav-text"]}>Tomorrow</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={style.active}
                data-toggle="tab"
                to="/Contents/:2020-02-07"
              >
                <span className={style["nav-text"]}>Today</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={style.active}
                data-toggle="tab"
                to="/Contents/:2020-02-05"
              >
                <span className={style["nav-text"]}>Yesterday</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Card>
  );
};

export default Navbar;
