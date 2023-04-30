import { Card } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Leagues = ({ data }) => {
  console.log(data);
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
        <ArrowDropDownIcon />
      </div>
      <hr />
    </Card>
  );
};

export default Leagues;
