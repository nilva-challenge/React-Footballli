import React from "react";
import moment from "jalali-moment";
import style from "./gameCard.module.css";

const GameCard = ({ fixture }: { fixture: any }) => {
  return (
    <div className={style.container}>
      <div title={fixture.home.name} className={style.team}>
        <p>{fixture.home.name}</p>
        <img width={30} height={30} src={fixture.home.logo} alt={`لوگوی ${fixture.home.name}`} />
      </div>

      <p className={style.time}>{moment(fixture.start_time).locale("fa").format("HH:mm")}</p>

      <div title={fixture.away.name} className={style.team}>
        <img width={30} height={30} src={fixture.away.logo} alt={`لوگوی ${fixture.away.name}`} />
        <p>{fixture.away.name}</p>
      </div>
    </div>
  );
};

export default GameCard;
