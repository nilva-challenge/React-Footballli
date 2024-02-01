import GameCard from "../game-card";
import React, { useState } from "react";
import style from "./leagueCard.module.css";
import { FaChevronDown } from "react-icons/fa";

const LeagueCard = ({ league }: { league: any }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={style.container}>
      <div className={style.header} onClick={() => setIsVisible((state) => !state)}>
        <div>
          <img width={24} height={24} src={league.logo} alt={`لوگوی ${league.name}`} />
          <h4>{league.name}</h4>
        </div>
        <FaChevronDown className={isVisible ? style.chevronUp : style.chevronDown} />
      </div>

      {isVisible && (
        <>
          <hr className={style.mainDivider} />

          {!league.fixtures.length && <p style={{ textAlign: "center" }}>موردی وجود ندارد</p>}

          {league.fixtures.map((fixture: any) => (
            <div key={fixture.id} className={style.gameCard}>
              <GameCard fixture={fixture} />
              <hr className={style.divider} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LeagueCard;
