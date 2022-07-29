import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate, useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsIcon from "@mui/icons-material/Sports";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Typography } from "@mui/material";

type BottomNavigatorProps = {
  children: React.ReactNode;
};

export default function FixedBottomNavigation({
  children,
}: BottomNavigatorProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    ref.current!.ownerDocument.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      {children}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={location.pathname}
          onChange={(event, newValue) => {
            navigate(newValue);
          }}
        >
          <BottomNavigationAction
            label={
              <Typography variant="body2" sx={{ fontFamily: "BYekan" }}>
                بازی ها
              </Typography>
            }
            icon={<SportsSoccerIcon />}
            value="/matches"
          />
          <BottomNavigationAction
            label={
              <Typography variant="body2" sx={{ fontFamily: "BYekan" }}>
                لیگ ها
              </Typography>
            }
            icon={<SportsIcon />}
            value="/leagues"
          />
          <BottomNavigationAction
            label={
              <Typography variant="body2" sx={{ fontFamily: "BYekan" }}>
                بازیکن ها
              </Typography>
            }
            icon={<SupervisedUserCircleIcon />}
            value="/players"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
