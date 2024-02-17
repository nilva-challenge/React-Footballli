import React from "react";

interface match {
  start_time: string;
  home_logo: string;
  home_name: string;
  away_logo: string;
  away_name: string;
}

interface RenderMatchesProps {
  matches: match[];
}

const RenderMatches: React.FC<RenderMatchesProps> = ({ matches }) => {
  return (
    <div className="w-100 h-100 text-muted">
      {matches &&
        matches.map((el) => {
          return (
            <>
              <div className="d-flex justify-content-cetner">
                <div>{el.home_name}</div>
                <div>{el.home_logo}</div>
                <div>{el.start_time}</div>
                <div>{el.away_logo}</div>
                <div>{el.away_name}</div>
              </div>
              <hr />
            </>
          );
        })}
    </div>
  );
};

export default RenderMatches;
