import { Box } from "@mui/material";
import { styled } from "@mui/system";
import TabItem from "./TabItem";
import { useAppSelector } from "../../Redux/hooks";
import { rootStore } from "../../Redux/store";
const TabBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 10px",
  backgroundColor: "transparent",
  height: "60px",
  width: "100%",
});
const InfiniteTab = () => {
  const { tabDatesArray } = useAppSelector(
    (state: rootStore) => state.tabsReducer
  );

  return (
    <TabBox>
      {tabDatesArray.map((date: string, index: number) => {
        return <TabItem date={date} index={index} key={date} />;
      })}
    </TabBox>
  );
};
export default InfiniteTab;
