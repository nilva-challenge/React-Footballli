import { useState } from "react";
import {
  UilTrophy,
  UilFootball,
  UilUser,
  UilCompass,
  UilAward,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isActive, setActive] = useState("مسابقات");
  return (
    <footer className="bg-white px-4 pt-2 pb-3 fixed bottom-0 left-0 right-0 shadow">
      <ul className="flex justify-between">
        <li>
          <Link
            to="/profile"
            className={`text-center ${
              isActive === "پروفایل" ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => setActive("پروفایل")}

          >
            <UilUser className="m-auto mb-1" />
            <p className="text-sm">پروفایل</p>
          </Link>
        </li>
        <li>
          <Link
            to="/leagues"
            className={`text-center ${
              isActive === "لیگ‌ها" ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => setActive("لیگ‌ها")}
          >
            <UilTrophy className="m-auto mb-1" />
            <p className="text-sm">لیگ‌ها</p>
          </Link>
        </li>
        <li>
          <Link
            to="/football"
            className={`text-center ${
              isActive === "فوتبال" ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => setActive("فوتبال")}
          >
            <UilFootball className="m-auto mb-1" />
            <p className="text-sm">فوتبال</p>
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            className={`text-center ${
              isActive === "اکتشاف" ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => setActive("اکتشاف")}
          >
            <UilCompass className="m-auto mb-1" />
            <p className="text-sm">اکتشاف</p>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={`text-center ${
              isActive === "مسابقات" ? "text-primary" : "text-gray-500"
            }`}
            onClick={() => setActive("مسابقات")}
          >
            <UilAward className="m-auto mb-1" />
            <p className="text-sm">مسابقات</p>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
