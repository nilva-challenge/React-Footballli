import { Box } from "@mui/material";
import { useAppSelector } from "../../../../Redux/hooks";
import { rootStore } from "../../../../Redux/store";
import CompetitionItem from "./CompetitionItem";
import { DataType } from "../../../../types";

const Comppetition = () => {
  const { filteredCompetitionData } = useAppSelector(
    (state: rootStore) => state.fetchDataReducer
  );
  console.log({ filteredCompetitionData });

  return (
    <Box
      sx={{
        width: "100",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {filteredCompetitionData.map((item: DataType) => {
        return (
          <CompetitionItem
            leagueName={item.name}
            logo={item.logo}
            fixtures={item.fixtures}
            key={item.id}
          />
        );
      })}
    </Box>
  );
};
export default Comppetition;
