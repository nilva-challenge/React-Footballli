import { Box, Typography } from "@mui/material";
import React from "react";
import { FixturesPageContainer } from "./styles";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export function Fixtures() {
  return (
    <FixturesPageContainer>
      <Box className="fixtures-top-bar">
        <Typography variant="h6">نتایج زنده</Typography>
        <AccessTimeOutlinedIcon className="topbar-icon" />
      </Box>
    </FixturesPageContainer>
  );
}
