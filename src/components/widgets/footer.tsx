"use client";
import {
  BallIcon,
  CompassIcon,
  FootballBitchIcon,
  LeagueIcon,
  PersonIcon,
} from "@/constants/svgIcons";
import { useState } from "react";
import FooterTab from "../common/footetab";

const Footer = () => {
  const [activeTab, setActiveTab] = useState<string>("competitions");
  return (
    <footer className="bg-white overflow-hidden
     border-t border-gray1 p-4 m-auto rounded-b-[10px]">
      <div className="flex items-center justify-center gap-7 m-auto ">
        <FooterTab
          TabIcon={
            <PersonIcon
              isActive={activeTab === "profile" ? true : false}
              width={"35px"}
              height={"35px"}
            />
          }
          url="profile"
          text="پروفایل"
          activeTab={activeTab}
          handleClick={() => setActiveTab("profile")}
        />
        <FooterTab
          TabIcon={
            <LeagueIcon
              isActive={activeTab === "league" ? true : false}
              width={"35px"}
              height={"35px"}
            />
          }
          url="league"
          text="لیگ ها"
          activeTab={activeTab}
          handleClick={() => setActiveTab("league")}
        />

        <FooterTab
          TabIcon={
            <BallIcon
              isActive={activeTab === "footban" ? true : false}
              width={"35px"}
              height={"35px"}
            />
          }
          url="footban"
          text="فوتبان"
          activeTab={activeTab}
          handleClick={() => setActiveTab("footban")}
        />
        <FooterTab
          TabIcon={
            <CompassIcon
              isActive={activeTab === "exploration" ? true : false}
              width={"35px"}
              height={"35px"}
            />
          }
          url="exploration"
          text=" اکتشاف"
          activeTab={activeTab}
          handleClick={() => setActiveTab("exploration")}
        />
        <FooterTab
          TabIcon={
            <FootballBitchIcon
              isActive={activeTab === "competitions" ? true : false}
              width={"35px"}
              height={"90px"}
            />
          }
          url="competitions"
          text="  مسابقات"
          activeTab={activeTab}
          handleClick={() => setActiveTab("competitions")}
        />
      </div>
    </footer>
  );
};

export default Footer;
