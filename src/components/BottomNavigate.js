import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";

import { useState } from "react";

import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StadiumIcon from "@mui/icons-material/Stadium";
const BottomNavigate = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigationAction label="مسابقات" icon={<StadiumIcon />} />
      <BottomNavigationAction label="اکتشافات" icon={<ExploreOutlinedIcon />} />
      <BottomNavigationAction label="فوتبال" icon={<SportsSoccerIcon />} />
      <BottomNavigationAction
        label="لیگ ها"
        icon={<EmojiEventsOutlinedIcon />}
      />
      <BottomNavigationAction
        label="پروفایل"
        icon={<AccountCircleOutlinedIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigate;
