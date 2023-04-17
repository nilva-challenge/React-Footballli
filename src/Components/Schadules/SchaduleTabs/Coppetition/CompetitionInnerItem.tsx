import { memo } from "react";
import { Box, Avatar } from "@mui/material";
import { AwayHome } from "../../../../types";
import moment from "moment";

interface props {
  startTime: string;
  home: AwayHome;
  away: AwayHome;
}
const CompetitionInnerItem = (props: props) => {
  const { startTime, home, away } = props;

  return (
    <Box sx={{ display: "flex", margin: "10px 0" }}>
      <Box
        sx={{
          fontFamily: "cursive",
          display: "flex",
          width: "42.5%",
          justifyContent: "flex-end",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {away.name}
        <Avatar
          alt={away.name}
          src={away.logo}
          sx={{ width: 30, height: 30, marginRight: "5px" }}
        />
      </Box>

      <Box
        sx={{
          width: "15%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {moment(startTime).format("HH:mm")}
      </Box>

      <Box
        sx={{
          fontFamily: "cursive",
          display: "flex",
          width: "42.5%",
          justifyContent: "flex-start",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <Avatar
          alt={home.name}
          src={home.logo}
          sx={{ width: 30, height: 30, marginLeft: "5px" }}
        />
        {home.name}
      </Box>
    </Box>
  );
};
export default memo(CompetitionInnerItem);
