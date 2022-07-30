import { FC, useState } from "react";
import arrowDown from "../../assets/images/down-arrow.svg";
import Match from "../../models/Match.model";
import LeagueCardMatches from "./LeagueCardMatches/LeagueCardMatches";

interface IProps {
  title: string;
  matches: Match[];
}

const LeagueCard: FC<IProps>= (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownClickedHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mt-4 bg-white flex justify-between items-center py-3 px-2 rounded-t-md">
        <div className="flex">
          <img
            src={props.matches[0].league.logo}
            className="w-4 h-4 bg-black rounded-lg"
            alt="league's logo"
          />
          <h3 className="text-[#4060c7] text-sm font-bold mr-2">
            {props.title}
          </h3>
        </div>
        <img
          src={arrowDown}
          className={`w-3 h-4 ml-4 ${
            isOpen ? "rotate-180" : ""
          } ease-in duration-150`}
          alt="arrow down icon"
          onClick={dropDownClickedHandler}
        />
      </div>
      {props.matches
        .sort((a, b) => (b.fixture.status.short === "FT" ? 1 : 0))
        .map((match) => (
          <LeagueCardMatches
            isOpen={isOpen}
            match={match}
            key={match.fixture.id}
          />
        ))}
      {/* <LeagueCardMatches isOpen={isOpen} /> */}
    </>
  );
};

export default LeagueCard;
