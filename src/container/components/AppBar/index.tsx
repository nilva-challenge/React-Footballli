import { Box, Typography } from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export default function AppBar() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      sx={{ width: "100%", padding: "11px 30px" }}
    >
      <AccessTimeOutlinedIcon />
      <Typography variant="h4">نتایج زنده</Typography>
    </Box>
  );
}
