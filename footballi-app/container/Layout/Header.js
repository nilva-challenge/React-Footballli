import React, { useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import DayNav from "../../components/DayNav";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const [searchValue,setSearchValue] = useState("")
  const pushToSerach = () => {
    if (!searchValue) {
      return;
    } else {
      router.push({
        pathname: "/search",
        query: { search: searchValue },
      });
      setSearchValue("")
    }
  }
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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <MagnifyingGlassIcon className="w-6 text-[#b4b4b4] cursor-pointer" onClick={()=>pushToSerach()}/>
      </div>
      <DayNav />
    </section>
  );
}

export default Header;
