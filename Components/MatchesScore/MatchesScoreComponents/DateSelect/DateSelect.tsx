import React, { FC, useEffect, useState } from "react";
import { DateSelectProps } from "./index.d";
import { getSpecificDate } from "../../../../utils/dateUtils";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const DateSelect: FC<DateSelectProps> = ({ activeDateTabHandler }) => {
  const [dateArray, setDateArray] = useState([
    { date: getSpecificDate(-1), displayName: "دیروز" },
    { date: getSpecificDate(0), displayName: "امروز" },
    { date: getSpecificDate(1), displayName: "فردا" },
    { date: getSpecificDate(2), displayName: getSpecificDate(2) },
  ]);

  const [activeDateTab, setActiveDateTab] = useState(dateArray[0].date);
  const [shownIndex, setShownIndex] = useState(0);

  useEffect(() => {
    activeDateTabHandler(activeDateTab);
  }, [activeDateTab]);

  const rightScrollClickHandler = () => {
    setShownIndex((prev) => prev - 1);
  };
  const leftScrollClickHandler = () => {
    //check to see if date is already added to array by previous clicks
    if (dateArray.some((e) => e.date === getSpecificDate(shownIndex + 3))) {
      setShownIndex((prev) => prev + 1);
    } else {
      const newArray = [
        ...dateArray,
        {
          date: getSpecificDate(shownIndex + 3),
          displayName: getSpecificDate(shownIndex + 3),
        },
      ];

      setDateArray(newArray);
      setShownIndex((prev) => prev + 1);
    }
  };

  return (
    <div>
      <ul className="h-12 flex gap-1  flex-row-reverse items-center justify-between px-1  ">
        <li
          className={shownIndex === 0 ? "invisible" : "cursor-pointer"}
          onClick={rightScrollClickHandler}
        >
          <AiFillCaretRight />
        </li>
        {dateArray.slice(shownIndex, shownIndex + 4).map((item, index) => {
          return (
            <li
              onClick={() => setActiveDateTab(item.date)}
              className={`text-sm py-2 cursor-pointer ${
                item.date === activeDateTab
                  ? "border-b-4 border-green-500"
                  : "text-gray-400 hover:text-gray-500"
              }
              `}
              key={index}
            >
              {item.displayName}
            </li>
          );
        })}{" "}
        <li onClick={leftScrollClickHandler} className="cursor-pointer">
          <AiFillCaretLeft />
        </li>
      </ul>
    </div>
  );
};

export default DateSelect;
