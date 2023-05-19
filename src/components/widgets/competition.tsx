import { Fixture } from "@/shared/types.d";
import Image from "next/image";
import React from "react";

const Competetion = ({ competetion }: { competetion: Fixture }) => {
  return (
    <div className="flex items-center justify-center gap-4 bg-white mt-1 py-4">
      {/* ///home team */}
      <div className="flex items-center gap-1">
        <span className="text-gray3 text-base font-medium">
          {competetion.home.name}
        </span>
        <Image
          src={competetion.home.logo}
          width={30}
          height={30}
          alt={competetion.home.name}
        />
      </div>
      <span className="text-primary font-bold text-base">12:33</span>
      {/* ////away team */}
      <div className="flex items-center gap-1 ">
        <Image
          src={competetion.away.logo}
          width={30}
          height={30}
          alt={competetion.away.name}
        />
        <span className="text-gray3 text-base font-medium">
          {competetion.away.name}
        </span>
      </div>
    </div>
  );
};

export default Competetion;
