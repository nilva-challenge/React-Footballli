import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Header = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          //   alignItems: "center",
          flexDirection: "row",
          p: 1,
          m: 1,
        }}
      >
        <AccessTimeIcon fontSize="large" />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          نتایج زنده
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f5f6fb",
          mx: 2,
          borderRadius: 2,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, direction: "rtl" }}
          placeholder="جستجو ..."
        />
        <IconButton type="submit" sx={{ transform: "rotateY(180deg)" }}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Header;
