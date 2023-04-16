import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { AiOutlineClockCircle } from "react-icons/ai";

const HeaderBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 10%",
});
const Header = () => {
  return (
    <HeaderBox>
      <Box sx={{ fontSize: "40px", margin: "auto 0" }}>
        <AiOutlineClockCircle />
      </Box>
      <Box sx={{ fontFamily: "fantasy" }}>
        <h2>نتایج زنده</h2>
      </Box>
    </HeaderBox>
  );
};
export default Header;
