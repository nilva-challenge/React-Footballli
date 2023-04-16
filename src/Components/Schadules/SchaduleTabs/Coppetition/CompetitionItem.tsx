import { Box, Divider, Avatar } from "@mui/material";
import { FixtureItem } from "../../../../types";
import CompetitionInnerItem from "./CompetitionInnerItem";
interface props {
  leagueName: string;
  logo: string;
  fixtures: FixtureItem[];
}
const CompetitionItem = (props: props) => {
  const { leagueName, fixtures, logo } = props;
  return (
    <Box
      sx={{
        width: "80%",
        backgroundColor: "#fff",
        margin: "10px 0",
        direction: "rtl",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "40px",
          padding: "10px",
          fontFamily: "cursive",
          fontWeight: "bold",
          color: "#4747d3",
          fontSize: "17px",
          display: "flex",
        }}
      >
        <Avatar
          alt={leagueName}
          src={logo}
          sx={{ width: 30, height: 30, marginLeft: "8px" }}
        />
        {leagueName}
      </Box>
      <Divider sx={{ marginTop: "5px" }} />
      <Box
        sx={{
          width: "100%",
          minHeight: "40px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {fixtures.map((item: FixtureItem) => {
          return (
            <CompetitionInnerItem
              startTime={item.start_time}
              home={item.home}
              away={item.away}
              key={item.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};
export default CompetitionItem;
