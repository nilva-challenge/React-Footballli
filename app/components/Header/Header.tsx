import React from "react";
import { IconClockHour4 } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className='h-12 flex flex-row justify-between items-center px-4 py-2'>
      <h1 className='font-bold text-lg'>نتایج زنده</h1>
      <IconClockHour4 size={28} />
    </header>
  );
};

export default Header;
