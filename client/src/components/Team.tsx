import { TTeam } from "../types";
import "../styles/Team.css";
type props = {
  team: TTeam;
  isHome: boolean;
};
const Team = ({ team, isHome }: props) => {
  return (
    <div className="team">
      {isHome ? (
        <>
          <img src={team.logo} width={25}></img>
          <div>{team.name}</div>
        </>
      ) : (
        <>
          <div>{team.name}</div>
          <img src={team.logo} width={25}></img>
        </>
      )}
    </div>
  );
};

export default Team;
