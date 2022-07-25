import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { FixturesPageContainer } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/icons-material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export function Fixtures() {
  return (
    <FixturesPageContainer>
      <Box className="fixtures-top-bar">
        <Typography variant="h6">نتایج زنده</Typography>
        <AccessTimeOutlinedIcon className="topbar-icon" />
      </Box>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </FixturesPageContainer>
  );
}
