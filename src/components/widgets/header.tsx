import Image from "next/image";

import Logo from "@/assets/images/livescore.png";
import SearchInput from "../common/searchInput";
import InfintiTabs from "./infinittabs";

const Header = () => {
  return (
    <>
      <header className="bg-white m-auto  p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-dark font-bold font-yekan  text-3xl">نتایج زنده</h1>
          <div className="w-12 h-12 relative">
            <Image alt="live-score" src={Logo} fill
            sizes="(max-width: 768px) 48px, (max-width: 1200px) 48px, 48px"
            />
          </div>
        </div>
        <SearchInput placeholder="جستجو..." />
      </header>
      <InfintiTabs />
    </>
  );
};

export default Header;
