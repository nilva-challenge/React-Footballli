import React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { FaRegCompass } from "react-icons/fa";
import { TbBallFootball, TbDeviceGamepad3 } from "react-icons/tb";
import { TfiCup } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [value, setValue] = React.useState("/");
  const currentUrl = location.href;
  console.log(currentUrl);
  const navigate = useNavigate();
  const checkRoute = (url: string) => {
    if (url.includes("/profile/orders")) {
      return "/profile/orders";
    } else if (url.includes("/profile/chats")) {
      return '/profile/chats";';
    } else if (url.includes("/profile")) {
      return "/profile";
    } else if (url.includes("/category")) {
      return "/category";
    } else if (url === "/") {
      return "/";
    } else return "";
  };
  React.useEffect(() => {
    setValue(checkRoute(currentUrl));
  }, [currentUrl]);
  const bottomNavigationMenu = [
    {
      pathName: "/profile",
      label: "پروفایل",
      icon: <FaRegUser size={20} />,
    },
    {
      pathName: "/leagus",
      label: "لیگ ها",
      icon: <TfiCup size={20} />,
    },
    {
      pathName: "/footban",
      label: "فوتبان",
      icon: <TbBallFootball size={20} />,
    },
    {
      pathName: "/discover",
      label: "اکتشاف",
      icon: <FaRegCompass size={20} />,
    },
    {
      pathName: "/matches",
      label: "مسابقات",
      icon: <TbDeviceGamepad3 size={20} />,
    },
  ];
  return (
    <Box
      sx={(theme) => ({
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        borderRadius: "4px 4px 0 0 ",
        boxShadow: "0px -1px 16px rgba(0,0,0,0.08)",
        padding: "8px 24px",
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <BottomNavigation
        showLabels
        sx={(theme) => ({
          backgroundColor: theme.palette.background.paper,
          "& .MuiBottomNavigationAction-label": {
            fontFamily: "IranSans",
            fontSize: "10px",
            "&.Mui-selected": {
              fontSize: "10px",
            },
          },
        })}
        value={value}
        onChange={(_event, newValue) => {
          console.log({ newValue });
          setValue(newValue);
          navigate(newValue);
        }}
      >
        {bottomNavigationMenu.map((navigation) => (
          <BottomNavigationAction
            label={navigation.label}
            value={navigation.pathName}
            icon={navigation.icon}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};
export default Navigation;
