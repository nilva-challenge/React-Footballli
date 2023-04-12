import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DayNav from "../../components/DayNav";

function Header() {
  return (
    <section className="font-sans bg-white p-3 pb-0">
      <div className="flex items-center justify-between">
        <ClockIcon className="w-10" />
        <h2 className="text-xl font-bold">نتایج زنده</h2>
      </div>
      <div className="bg-[#f5f6fb] p-3 mt-4 rounded flex items-center justify-end">
        <input
          type="text"
          placeholder="...جستجو"
          className="bg-transparent text-right outline-none font-light mr-3 w-full"
        />
        <MagnifyingGlassIcon className="w-6 text-[#b4b4b4] cursor-pointer" />
      </div>
      <DayNav />
    </section>
  );
}

export default Header;
