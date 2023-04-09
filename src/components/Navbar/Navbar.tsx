import { TbSoccerField } from "react-icons/tb";
import { GiCompass } from "react-icons/gi";
import { IoFootballOutline } from "react-icons/io5";
import { GiLaurelsTrophy } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { IconType } from "react-icons";
import { FC } from "react";

interface NavItemType {
  icon: IconType;
  name: string;
}

const navItems: NavItemType[] = [
  {
    icon: TbSoccerField,
    name: "مسابقات",
  },
  {
    icon: GiCompass,
    name: "اکتشاف",
  },
  {
    icon: IoFootballOutline,
    name: "فوتبال",
  },
  {
    icon: GiLaurelsTrophy,
    name: "لیگ‌ها",
  },
  {
    icon: BiUser,
    name: "پروفایل",
  },
];

const Navbar: FC = () => {
  return (
    <div className="bg-white  bg-lightMode-secondary text-darkMode-primary fixed bottom-0 flex justify-between w-full py-3 border-t">
      {navItems.reverse().map((navItem) => {
        console.log("Nav Items are: ", navItems.reverse());
        let Icon = navItem.icon;
        return (
          <div
            key={navItem.name}
            className={`flex flex-col items-center flex-1 cursor-pointer text-[#acb1be] ${
              navItem.name === "مسابقات" ? "text-[#5b9a3f]" : ""
            }`}
          >
            <Icon className="w-6 h-6" />
            <p className=" mt-2 text-xs font-bold">{navItem.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
