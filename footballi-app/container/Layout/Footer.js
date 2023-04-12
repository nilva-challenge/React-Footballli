import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import { FireIcon } from "@heroicons/react/24/outline";

function Footer() {
  return (
    <section className="bg-white p-3 flex items-center justify-between font-sans">
      <div className="flex flex-col items-center text-green-600 text-sm gap-y-1 cursor-pointer">
        <FireIcon className="w-6 text-green-600" />
        <span>مسابقات</span>
      </div>
      <div className="flex flex-col items-center text-sm gap-y-1 cursor-pointer hover:text-green-600">
        <BellAlertIcon className="w-6" />
        <span>اکتشافات</span>
      </div>
      <div className="flex flex-col items-center text-sm gap-y-1 cursor-pointer hover:text-green-600">
        <CubeTransparentIcon className="w-6" />
        <span>فوتبال</span>
      </div>

      <div className="flex flex-col items-center text-sm gap-y-1 cursor-pointer hover:text-green-600">
        <TrophyIcon className="w-6" />
        <span>لیگ ها</span>
      </div>
      <div className="flex flex-col items-center text-sm gap-y-1 cursor-pointer hover:text-green-600">
        <UserIcon className="w-6" />
        <span>پروفایل</span>
      </div>
    </section>
  );
}

export default Footer;
