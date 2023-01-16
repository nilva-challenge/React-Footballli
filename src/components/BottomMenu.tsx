import {
  BorderOuterOutlined,
  EmojiEventsOutlined,
  ExploreOutlined,
  PermIdentityOutlined,
  SportsSoccerOutlined,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";

const BottomMenu = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="flex w-full overflow-hidden">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="پروفایل"
          icon={<PermIdentityOutlined />}
        />
        <BottomNavigationAction label="لیگ ها" icon={<EmojiEventsOutlined />} />
        <BottomNavigationAction
          label="فوتبان"
          icon={<SportsSoccerOutlined />}
        />
        <BottomNavigationAction label="اکتشاف" icon={<ExploreOutlined />} />
        <BottomNavigationAction
          label="مسابقات"
          icon={<BorderOuterOutlined />}
        />
      </BottomNavigation>
    </div>
  );
};
export default BottomMenu;
