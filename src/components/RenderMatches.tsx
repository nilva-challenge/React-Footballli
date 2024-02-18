import React from "react";
import ImageWrapper from "./ImageWrapper";

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
    <div className="w-100 h-100 text-muted d-flex flex-column justify-content-center">
      {matches &&
        matches.map((el) => {
          return (
            <div key={el.away_logo}>
              <div className="d-flex justify-content-between align-items-center mx-3 gap-2">
                <div style={{ width: "100px" }}>{el.home_name}</div>
                <div>
                  <ImageWrapper url={el.home_logo} />
                </div>
                <div>
                  {el.start_time.split("T")[1].split(":")[0]}:
                  {el.start_time.split("T")[1].split(":")[1]}
                </div>
                <div>
                  <ImageWrapper url={el.away_logo} />
                </div>
                <div style={{ width: "100px", direction: "ltr" }}>
                  {el.away_name}
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default RenderMatches;
