"use client";
import {
  BallIcon,
  CompassIcon,
  FootballBitchcon,
  LeagueIcon,
  PersonIcon,
} from "@/constants/svgIcons";
import Link from "next/link";
import { useState } from "react";
import FooterTab from "../common/footetab";

const Footer = () => {
  const [activeTab, setActiveTab] = useState<string>("competitions");
  return (
    <footer className="bg-white border-t border-gray1 p-4 rounded-b-[10px]">
      <div className="flex items-center gap-9">
        <FooterTab
          TabIcon={
            <PersonIcon
              isActive={activeTab === "profile" ? true : false}
              width={"40px"}
              height={"40px"}
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
              width={"40px"}
              height={"40px"}
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
              width={"40px"}
              height={"40px"}
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
              width={"40px"}
              height={"40px"}
            />
          }
          url="exploration"
          text=" اکتشاف"
          activeTab={activeTab}
          handleClick={() => setActiveTab("exploration")}
        />
        <FooterTab
          TabIcon={
            <FootballBitchcon
              isActive={activeTab === "competitions" ? true : false}
              width={"40px"}
              height={"40px"}
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
