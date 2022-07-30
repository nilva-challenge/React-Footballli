import { FC, useContext, useEffect, useRef, useState } from "react";
import dates, { differenceInDays } from "../../utils/DateMaker";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useDate } from "../../hooks/UseDate";
import { DataContext } from "../../App";

const DateSelection: FC = () => {
  // const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const { setSearchValue } = useContext(DataContext);
  const { date, setDate } = useDate();
  const dateRef = useRef<null | HTMLLIElement>(null);
  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, []);

  return (
    <ul className="flex px-4 mt-6 mb-[-10px] w-full gap-7 flex-nowrap overflow-auto">
      {dates.map((item) => {
        const dayInPersian = new DateObject({
          date: item,
          calendar: persian,
          locale: persian_fa,
        })
          .format("YYYY-MM-D")
          .split("-")[2];
        const monthInPersian = new DateObject({
          date: item,
          calendar: persian,
          locale: persian_fa,
        }).month.name;
        return (
          <li
            ref={item.split("T")[0] === date ? dateRef : null}
            key={item.split("T")[0]}
            className="flex-shrink-0 cursor-pointer overflow-hidden"
            onClick={() => {
              setDate(item.split("T")[0]);
              setSearchValue("");
            }}
          >
            {differenceInDays(new Date(item), new Date()) === 0
              ? "امروز"
              : differenceInDays(new Date(item), new Date()) === 1
              ? "فردا"
              : differenceInDays(new Date(item), new Date()) === -1
              ? "دیروز"
              : `${dayInPersian} ${monthInPersian}`}

            <span
              className={`h-1 w-full rounded-t-md ${
                date === item.split("T")[0] ? "bg-green-600" : ""
              } inline-block`}
            ></span>
          </li>
        );
      })}
    </ul>
  );
};

export default DateSelection;
