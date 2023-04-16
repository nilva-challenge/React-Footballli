import { Box } from "@mui/material";
import { useAppSelector } from "../../../../Redux/hooks";
import { rootStore } from "../../../../Redux/store";
import LeagueItems from "./LeagueItems";

const Leauge = () => {
  const { filteredLeagueData } = useAppSelector(
    (state: rootStore) => state.fetchDataReducer
  );
  console.log({ filteredLeagueData });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {filteredLeagueData.map((item) => {
        return (
          <LeagueItems
            item={{ logoSrc: item.logo, leagueName: item.name }}
            key={item.id}
          />
        );
      })}
    </Box>
  );
};
export default Leauge;
