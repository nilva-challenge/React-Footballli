import clockImg from "../../../assets/images/clock.jpg";
import Match from "../../../models/Match.model";

interface Props {
  isOpen: boolean;
  match: Match;
}

const LeagueCardMatches = (props: Props) => {
  return (
    <div>
      <div
        className={`${
          props.isOpen ? "flex justify-between items-center" : "hidden"
        }  rounded-b-md mt-[2px] bg-white py-4 flex justify-between items-center px-4 text-xs md:text-base`}
      >
        <div className="md:flex hidden">
          <img
            src={props.match.league.flag}
            className="max-w-[24px]"
            alt="country flag league"
          />
          <p className="mx-2">{props.match.league.name}</p>
        </div>

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
              : "-"}
            {/* {"34" + " : " + "12"} */}
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
