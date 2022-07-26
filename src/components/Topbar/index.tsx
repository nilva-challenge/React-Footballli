import { Box, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { TopbarContainer } from "./styles";

export function Topbar() {
  return (
    <TopbarContainer>
      <Typography variant="h5">نتایج زنده</Typography>
      <AccessTimeOutlinedIcon className="topbar-icon" />
    </TopbarContainer>
  );
}
