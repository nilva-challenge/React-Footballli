import { Box, Avatar } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../../Redux/hooks";
import { rootStore } from "../../../../Redux/store";
import { selectALeague } from "../../../../Redux/actions/tabsActions";
import { useCallback, memo } from "react";
interface props {
  item: {
    leagueName: string;
    logoSrc: string;
  };
}
const LeagueItems = ({ item }: props) => {
  const { leagueName, logoSrc } = item;
  const dispatch = useAppDispatch();
  const { selectedLeague } = useAppSelector(
    (state: rootStore) => state.tabsReducer
  );

  const leagueItemOnclick = useCallback(() => {
    dispatch(selectALeague(leagueName));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "150px",
        height: "50px",
        borderRadius: "10px",
        margin: "8px",
        border: "1px solid gray",
        cursor: "pointer",
        padding: "0 5px",
        "&:hover": {
          border: "1px solid orange",
          color: "orange",
        },
      }}
      color={selectedLeague === leagueName ? "red" : ""}
      onClick={leagueItemOnclick}
    >
      <Avatar
        alt={leagueName}
        src={logoSrc}
        sx={{ width: 40, height: 40, margin: "auto 0" }}
      />
      <Box sx={{ margin: "auto 0", fontFamily: "cursive", fontWeight: "500" }}>
        {leagueName}
      </Box>
    </Box>
  );
};
export default memo(LeagueItems);
