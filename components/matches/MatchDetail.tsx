import React from 'react';
import styles from "./styles.module.scss"
import ImageComponent from "@components/shared/ImageComponent/ImageComponent";
import {Global} from "@constants/responses";

type Props = {
  match: Global.match
}
const MatchDetail = ({match}: Props) => {
  return (
    <div className={styles.match}>
      <div className={styles.match_team} style={{justifyContent: "end"}}>
        <p>{match.home.name}</p>
        <ImageComponent height={25} width={25} src={match.home.logo} alt={match.home.name}/>
      </div>
      <div className={styles.match_result}>{match.away_goals}:{match.home_goals}</div>
      <div className={styles.match_team}>
        <ImageComponent height={25} width={25} src={match.away.logo} alt={match.away.name}/>
        <p>{match.away.name}</p>
      </div>
    </div>
  );
};

export default MatchDetail;