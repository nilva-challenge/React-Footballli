import { useState } from "react";
import { Card, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Leagues = ({ data }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "1rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <img src={data?.logo} width={20} height={20} />
          <span style={{ color: "blue" }}>{data?.name}</span>
        </div>
        <span onClick={() => setExpanded(!expanded)}>
          {expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </span>
      </div>
      <hr />
      {data?.fixtures?.map((league) => {
        let leagueTime = league?.start_time.slice(11);
        return (
          <Collapse in={expanded} unmountOnExit>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.6rem",
              }}
            >
              <span>{league?.home?.name}</span>
              <img src={league?.home?.logo} width={20} height={20} />
              <span>{leagueTime}</span>
              <img src={league?.away?.logo} width={20} height={20} />
              <span>{league?.away?.name}</span>
            </div>
          </Collapse>
        );
      })}
    </Card>
  );
};

export default Leagues;
