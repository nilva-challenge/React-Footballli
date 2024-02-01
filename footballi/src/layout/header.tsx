import Calendar from "./calendar";
import style from "./layout.module.css";
import { CiSearch } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={style.header}>
      {scroll <= 100 && (
        <>
          <div className={style.headerTitle}>
            <h2>نتایج زنده</h2>
            <FaRegClock size={40} />
          </div>

          <div className={style.inputContainer}>
            <CiSearch />
            <input placeholder="جستوجو..." />
          </div>
        </>
      )}

      <Calendar />
    </div>
  );
};

export default Header;
