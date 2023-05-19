import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/images/livescore.png";
import { ChevronLeftIcon } from "@/constants/svgIcons";
import { ILeague } from "@/shared/types.d";
import Competetion from "./competition";
const League = ({leagueData}:{leagueData:ILeague}) => {
  const [openLeage, setOpenLeage] = useState<boolean>(true);
 
  return (
    <div className="rounded-xl mt-6">
      <header className="flex justify-between p-3 bg-white">
        <div className="flex gap-1 items-center ">
          <Image
            alt="leagename"
            src={leagueData.logo}
            width={20}
            height={20}
            className=" rounded-full"
          />
          <span className="text-primary text-base font-bold font-vazir">
          {leagueData.name}
          </span>
        </div>
        <span className={`${openLeage ? "rotate-90" : ""}`}>
          <ChevronLeftIcon width="22px" height="22px" />
        </span>
      </header>
      <section className={`${openLeage?"block" : "hidden"}  mt-1`}>
       
        {leagueData.fixtures.map((compet)=><Competetion key={compet.id} competetion={compet}/>)}
      </section>
    </div>
  );
};

export default League;
