import { useState } from "react";
import clockImg from "../assets/images/clock.jpg";
import arrowDown from "../assets/images/down-arrow.svg";
import leagueLogo from "../assets/images/PersianGulfProLeague.png";

const LeagueCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="bg-white flex justify-between items-center py-3 px-2 rounded-t-md mb-1">
        <div className="flex">
          <img src={leagueLogo} className="w-4 h-4 bg-black rounded-lg" />
          <h3 className="text-[#4060c7] text-sm font-bold mr-2">
            لیگ برتر خلیج فارس
          </h3>
        </div>
        <img
          src={arrowDown}
          className={`w-3 h-4 ${
            isOpen ? "" : "rotate-180"
          } ease-in duration-1000`}
        />
      </div>
    </>
  );
};

export default LeagueCard;
