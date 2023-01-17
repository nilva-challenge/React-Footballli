import {
  BorderOuterOutlined,
  EmojiEventsOutlined,
  ExploreOutlined,
  PermIdentityOutlined,
  SportsSoccerOutlined,
} from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { useState } from "react";

type BottomMenuProps = {
  page: string;
  setPage: (page: string) => void;
};
const BottomMenu = ({ page, setPage }: BottomMenuProps) => {
  // const [value, setValue] = useState(0);
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, padding:"4px 0" }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={page}
        onChange={(event, newValue) => {
          setPage(newValue);
        }}
        sx={{
          justifyContent: "space-around",
          padding: "8px",
          "& .Mui-selected": {
            color: green[600] + '!important',
          },
          "& .MuiBottomNavigationAction-root":{
            color: grey[400]
          }
        }}
      >
        <BottomNavigationAction
          label="پروفایل"
          value={"/"}
          icon={<PermIdentityOutlined />}
          sx={{
            minWidth: "60px",
            maxWidth: "60px",
            width: "auto",
            "& .MuiBottomNavigationAction-label": {
              marginTop: "4px !important",
            },
          }}
        />
        <BottomNavigationAction
          sx={{ minWidth: "60px", maxWidth: "60px", width: "auto" }}
          label="لیگ ها"
          value={"/leagues"}
          icon={<EmojiEventsOutlined />}
        />
        <BottomNavigationAction
          label="فوتبان"
          value={"/footban"}
          icon={<SportsSoccerOutlined />}
          sx={{ minWidth: "60px", maxWidth: "60px", width: "auto" }}
        />
        <BottomNavigationAction
          label="اکتشاف"
          value={"/discover"}
          icon={<ExploreOutlined />}
          sx={{ minWidth: "60px", maxWidth: "60px", width: "auto" }}
        />
        <BottomNavigationAction
          label="مسابقات"
          value={"/matchesList"}
          icon={<BorderOuterOutlined />}
          sx={{ minWidth: "60px", maxWidth: "60px", width: "auto" }}
        />
      </BottomNavigation>
    </Paper>
  );
};
export default BottomMenu;
