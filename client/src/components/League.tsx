import { useState } from "react";
import { TLeague } from "../types";
import Fixture from "./Fixture";
import "../styles/League.css";

type props = {
  league: TLeague;
};
const League = ({ league }: props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="league-card">
      <div className="league-header" onClick={() => setShow(!show)}>
        <div>
          <img src={league.logo} width={30}></img>
          <div>{league.name}</div>
        </div>
        <img src={show ? "up.svg" : "down.svg"} alt="expand"></img>
      </div>
      {show ? (
        league.fixtures.map((fixture) => {
          return <Fixture key={fixture.id} fixture={fixture}></Fixture>;
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default League;
