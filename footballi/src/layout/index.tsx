import style from "./index.module.css";
import React, { ReactNode } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import Calendar from "./calendar";

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
