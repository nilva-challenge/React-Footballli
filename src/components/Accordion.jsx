import React, { useState } from "react";
import { UilAngleUp, UilAngleDown } from "@iconscout/react-unicons";
import { all } from "../api/fixtures.json";

const Accordion = () => {
  return all.map((item) => {
    return (
      <div key={item.id} className="my-2 shadow-sm cursor-pointer bg-white">
        <div className="px-6 items-center h-16 select-none flex justify-between flex-row border-b-2">
          <div className="flex flex-row items-center gap-2">
            <img src={item.logo} className="w-6 h-6 object-cover" />
            <h5 className="font-bold text-blue-600">{item.name}</h5>
          </div>
          <div className="flex-none">
            <UilAngleUp />
          </div>
        </div>
        <div className="p-6 overflow-hidden duration-200 ease-in-out">
          <div className="mb-2">
            <ul>
              {item.fixtures.map((item) => {
                return (
                  <li key={item.id} className="mb-5">
                    <div className="flex justify-between">
                      <div className="flex gap-2 mb-5">
                        <img src={item.home.logo} className="w-6 h-6" />
                        <p>
                          {item.home.name} <span> {item.home_goals}</span>
                        </p>
                      </div>
                      <span>-</span>
                      <div className="flex gap-2 mb-5">
                        <p>
                          <span className="ml-2"> {item.away_goals}</span>
                          {item.away.name}
                        </p>
                        <img src={item.away.logo} className="w-6 h-6" />
                      </div>
                    </div>
                    <p className="text-center text-gray-500">
                      زمان بازی : <span dir="ltr">{item.start_time}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  });
};

export default Accordion;
