import { Box, Typography } from "@mui/material";

const NotEvent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 3,
      }}
    >
      <Typography variant="body2">
        رویدادی در این روز برگزار نمی گردد.
      </Typography>
      <Box
        component="img"
        sx={{ width: "90%", borderRadius: 1 }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopT6NWxxGQFauPQezsjYayhPvD-4oJCivV4PSNXHjZCCQJ-WTUdg9DD4tFAeI_1qJ0E4&usqp=CAU"
        alt="bare stadium"
      />
    </Box>
  );
};

export default NotEvent;
