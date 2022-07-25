import { BottomNavigationAction } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { StyledBottomNavigation } from "./styles";

export default function BottomNavigation() {
  return (
    <StyledBottomNavigation showLabels value={4}>
      <BottomNavigationAction label="مسابقات" icon={<SportsSoccerIcon />} />
      <BottomNavigationAction label="مسابقات" icon={<SportsSoccerIcon />} />
      <BottomNavigationAction label="مسابقات" icon={<SportsSoccerIcon />} />
      <BottomNavigationAction label="مسابقات" icon={<SportsSoccerIcon />} />
      <BottomNavigationAction label="مسابقات" icon={<SportsSoccerIcon />} />
    </StyledBottomNavigation>
  );
}
