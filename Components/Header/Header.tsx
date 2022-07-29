import React, { useEffect, useState } from "react";
import { TbAntennaBars5 } from "react-icons/tb";

const Header = () => {
  const [date, setDate] = useState(new Date());

  //update time every 30 seconds
  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  return (
    <div className="border-b-2 py-3 px-4 text-lg text-gray-500 border-gray-200 h-8 flex items-center justify-between">
      <div>
        {date.getHours()}:{date.getMinutes()}
      </div>
      <div>
        <TbAntennaBars5 />
      </div>
    </div>
  );
};

export default Header;
