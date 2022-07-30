import { FC } from "react";
import Match from "../../../models/Match.model";

interface IProps {
  isOpen: boolean;
  match: Match;
}

const LeagueCardMatches: FC<IProps> = (props) => {
  const hour = props.match.fixture.date
    .toLocaleString("fa-IR")
    .split("T")[1]
    .split(":")[0];
  const minute = props.match.fixture.date
    .toLocaleString("fa-IR")
    .split("T")[1]
    .split(":")[1];
  return (
    <div>
      <div
        className={`${
          props.isOpen ? "flex justify-between items-center" : "hidden"
        }  rounded-b-md mt-[2px] bg-white py-4 flex justify-between items-center px-4 text-xs md:text-base`}
      >
        <div className="flex flex-1 justify-center">
          <div className="flex-1 justify-end flex items-center ml-2">
            <p>{props.match.teams.home.name}</p>
            <img
              src={props.match.teams.home.logo}
              className="w-8 h-8 mr-1"
              alt="home team logo"
            />
          </div>
          <p className="mt-2">
            {props.match.fixture.status.short === "FT"
              ? props.match.goals.home + " - " + props.match.goals.away
              : hour + ":" + minute}
          </p>
          <div className="flex-1 flex  items-center mr-2">
            <img
              src={props.match.teams.away.logo}
              className="w-8 h-8 ml-2"
              alt="away team logo"
            />
            <p>{props.match.teams.away.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueCardMatches;
