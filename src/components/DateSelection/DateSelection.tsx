import React, { useState } from "react";

const DateSelection = () => {
  const [date, setDate] = useState("");
  return (
    <ul className="flex px-4  mt-6 mb-[-10px] w-full gap-7 flex-nowrap overflow-auto">
      {["دیروز", "امروز", "فردا"].map((item) => {
        return (
          <li
            className="flex-shrink-0 cursor-pointer"
            onClick={() => {
              setDate(item);
            }}
          >
            {item}

            <span
              className={`h-1 w-full rounded-t-md ${
                date === item ? "bg-green-600" : ""
              } inline-block`}
            ></span>
          </li>
        );
      })}
    </ul>
  );
};

export default DateSelection;
