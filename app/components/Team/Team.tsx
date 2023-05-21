import { ITeam } from "@/app/Types/ITeam";
import React from "react";
import Image from "next/image";

const Team = ({ info }: { info: ITeam }) => {
  const { logo, name, home = true } = info;
  const homeClass = home ? "flex-row-reverse text-left" : "flex-row";
  return (
    <div className={`flex ${homeClass} items-center gap-2`}>
      <Image
        width='10'
        height='10'
        className='w-10 h-10'
        alt='team logo'
        src={logo}
      />
      <div className='text-xs whitespace-pre-wrap'>{name}</div>
    </div>
  );
};

export default Team;
