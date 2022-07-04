import React from "react";
import style from "./contentItem.module.css";

const ContentItem = ({
  teamsawayname,
  teamsawaylogo,
  teamshomename,
  teamshomelogo,
  scoreAway,
  scorehome,
}) => {
  return (
    <>
      <div className={style["card-body"]}>
        <div className={style.teams}>
          <div className={style["team-away"]}>
            <h3>{teamsawayname}</h3>
            <img className={style.logo} src={teamsawaylogo} />
          </div>
          <div className={style.score}>
            <div className={style["team-away-score"]}>{scoreAway}</div>
            <div className={style["teams-score"]}>-</div>
            <div className={style["team-home-score"]}>{scorehome}</div>
          </div>
          <div className={style["team-home"]}>
            <h3>{teamshomename}</h3>
            <img className={style.logo} src={teamshomelogo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentItem;
