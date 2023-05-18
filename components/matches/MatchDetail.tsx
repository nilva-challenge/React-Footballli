import React from 'react';
import styles from "./styles.module.scss"
import ImageComponent from "@components/shared/ImageComponent/ImageComponent";

const MatchDetail = () => {
  return (
    <div className={styles.match}>
      <div className={styles.match_team}>
        <p>title</p>
        <ImageComponent height={25} width={25} src={"https://media-1.api-sports.io/football/teams/51.png"} alt={""}/>
      </div>
      <div className={styles.match_result}>2:0</div>
      <div className={styles.match_team}>
        <ImageComponent height={25} width={25} src={"https://media-1.api-sports.io/football/teams/51.png"} alt={""}/>
        <p>title</p>
      </div>
    </div>
  );
};

export default MatchDetail;