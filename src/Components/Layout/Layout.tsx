import { styled } from "@mui/system";
import { Box } from "@mui/material";
import SearchInput from "./../SearchInput.tsx/SearchInput";
import InfiniteTab from "../Tab/InfiniteTab";
import SchaduleBox from "../Schadules/SchaduleBox";
const LayoutBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
});
const Layout = () => {
  return (
    <LayoutBox>
      <SearchInput />
      <InfiniteTab />
      <SchaduleBox />
    </LayoutBox>
  );
};
export default Layout;
