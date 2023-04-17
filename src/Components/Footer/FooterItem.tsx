import { memo } from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../Redux/hooks";
import { rootStore } from "../../Redux/store";
import { useAppDispatch } from "./../../Redux/hooks";
import { selectTabPartToShow } from "../../Redux/actions/tabsActions";
interface props {
  elem: {
    name: string;
    icon: JSX.Element;
    id: number;
  };
}
const FooterItem: React.FC<props> = ({ elem }) => {
  const { name, icon } = elem;
  const dispatch = useAppDispatch();
  const { selectedPartTabToShow } = useAppSelector(
    (state: rootStore) => state.tabsReducer
  );

  const footerItemOnclick = () => {
    dispatch(selectTabPartToShow(name));
  };

  return (
    <Box
      sx={{
        cursor: "pointer",
        "&:hover": {
          color: "orange",
        },
      }}
      onClick={footerItemOnclick}
    >
      <Box
        sx={{ fontSize: "25px", display: "flex", justifyContent: "center" }}
        color={selectedPartTabToShow === name ? "green" : ""}
      >
        {icon}
      </Box>
      <Box
        sx={{
          fontSize: "14px",
          display: "flex",
          justifyContent: "center",
          fontFamily: "cursive",
          fontWeight: "600",
        }}
        color={selectedPartTabToShow === name ? "green" : ""}
      >
        {name}
      </Box>
    </Box>
  );
};
export default memo(FooterItem);
