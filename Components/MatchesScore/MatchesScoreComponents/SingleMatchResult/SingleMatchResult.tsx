import React, { FC } from "react";
import { SingleMatchResultProps } from "./index.d";

const SingleMatchResult: FC<SingleMatchResultProps> = ({ teams, score }) => {
  return (
    <div className="flex  justify-center items-center p-1 my-1 border-t-2 border-gray-100">
      <div className="flex items-center justify-end gap-1  flex-1 ">
        <div>{teams.home.name.substr(0, 8)}</div>
        <div>
          <img
            className="w-4 h-4"
            src={teams.home.logo}
            alt={teams.home.name}
          />
        </div>
      </div>
      <div className="\ flex-2  w-12 text-center ">
        {score.fulltime.home}:{score.fulltime.away}
      </div>
      <div className="flex  flex-1 items-center gap-1 \ ">
        <div>
          <img
            className="w-4 h-4"
            src={teams.away.logo}
            alt={teams.away.name}
          />
        </div>
        <div>{teams.away.name.substr(0, 8)}</div>
      </div>
    </div>
  );
};

export default SingleMatchResult;
