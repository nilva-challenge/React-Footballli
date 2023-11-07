import React from "react";
import { BiUser, BiFootball, BiTrophy } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { GiTennisCourt } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const { route: activeRoute } = useRouter();
  const footerArray = [
    { route: "/matches", persianName: "مسابقات", icon: <GiTennisCourt /> },
    { route: "/explore", persianName: "اکتشاف", icon: <MdOutlineExplore /> },
    { route: "/footban", persianName: "فوتبان", icon: <BiFootball /> },
    { route: "/leagues", persianName: "لیگ‌ها", icon: <BiTrophy /> },
    { route: "/profile", persianName: "پروفایل", icon: <BiUser /> },
  ];

  return (
    <div className="py-4  right-0 h-8 border-t-2 border-gray-200">
      <div className="flex justify-between items-center px-3">
        {footerArray.map((item) => {
          const { route, persianName, icon } = item;
          return (
            <Link href={route} key={route}>
              <div
                className={`flex gap-1 flex-col items-center cursor-pointer ${
                  route === activeRoute
                    ? "text-green-600"
                    : "hover:text-green-500"
                }`}
              >
                <div className="text-xl">{icon}</div>
                <div>{persianName}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
