import React from "react";
import Team from "../Team/Team";
import { IFixture } from "@/app/Types/IFixture";
import "./style.scss";
import { persianNumber } from "@/app/utils/PersianNumber";

const Fixture = ({ info }: { info: IFixture }) => {
  {
    console.log("info", info);
  }

  return (
    <div className='border-b border-b-gray-300 grid-cols-3 grid-flow-col py-3 fixtureContainer'>
      <Team info={{ ...info.home, home: true }} />
      <div className='flex items-center flex-col w-full justify-center'>
        {info.status !== "NS" ? (
          <div className='flex gap-4'>
            <span>{persianNumber(info.away_goals)}</span>
            <span>{persianNumber(info.home_goals)}</span>
          </div>
        ) : null}

        {info.status === "NS" ? (
          <span>
            {new Date(info.start_time).toLocaleTimeString("fa-IR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        ) : null}
        {info.elapsed ? (
          <span className='text-xs'>
            {(info.elapsed && info.elapsed === 90) || info.elapsed === 120
              ? "پایان"
              : `\'${persianNumber(info.elapsed)}`}
          </span>
        ) : null}
      </div>
      <Team info={{ ...info.away, home: false }} />
    </div>
  );
};

export default Fixture;
