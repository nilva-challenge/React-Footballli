import Calendar from "./calendar";
import style from "./layout.module.css";
import React, { ReactNode } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={style.header}>
        <div className={style.headerTitle}>
          <h2>نتایج زنده</h2>
          <FaRegClock size={40} />
        </div>

        <div className={style.inputContainer}>
          <CiSearch />
          <input placeholder="جستوجو..." />
        </div>

        <Calendar />
      </div>

      <div className={style.container}>{children}</div>
    </>
  );
};

export default Layout;
