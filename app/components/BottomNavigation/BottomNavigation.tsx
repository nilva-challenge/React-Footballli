import React from "react";
import {
  IconSoccerField,
  IconBrandSafari,
  IconBallFootball,
  IconUser,
  IconTrophy,
} from "@tabler/icons-react";
import BottomNavigationItem from "./BottomNavigationItem";

const BottomNavigation = () => {
  const items = [
    { id: 1, label: "پروفایل", icon: <IconUser />, link: "/profile" },
    { id: 2, label: "لیگ‌ها", icon: <IconTrophy />, link: "/leagues" },
    { id: 3, label: "فوتبان", icon: <IconBallFootball />, link: "/footban" },
    {
      id: 4,
      label: "اکتشاف",
      icon: <IconBrandSafari />,
      link: "/explore",
    },
    {
      id: 5,
      label: "مسابقات",
      icon: <IconSoccerField />,
      link: "/matchs",
    },
  ];

  return (
    <nav className='fixed bg-white w-full h-20 bottom-0 mt-auto shrink-0 flex ring-1 ring-gray-100 flex-row gap-2 items-center justify-between px-5 '>
      {items.map((item) => (
        <BottomNavigationItem key={item.id} info={item} />
      ))}
    </nav>
  );
};

export default BottomNavigation;
