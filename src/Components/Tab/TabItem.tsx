import { Box } from "@mui/material";
import { useAppDispatch } from "./../../Redux/hooks";
import { selectDate } from "../../Redux/actions/tabsActions";
import moment from "moment";

interface props {
  date: string;
  index: number;
}
const TabItem = ({ date, index }: props) => {
  const dispatch = useAppDispatch();

  const onTabItemClick = () => {
    dispatch(selectDate(date));
  };

  return (
    <Box
      sx={{
        width: "200px",
        textAlign: "center",
        fontWeight: "500",
        fontSize: "14px",
        fontFamily: "cursive",
        cursor: "pointer",
        "&:hover": {
          color: "orange",
          fontWeight: "bold",
        },
      }}
      borderBottom={index === 2 ? "3px solid green" : ""}
      color={index === 2 ? "green" : ""}
      onClick={onTabItemClick}
    >
      <p>{moment(date).format("MMM DD")}</p>
    </Box>
  );
};
export default TabItem;
