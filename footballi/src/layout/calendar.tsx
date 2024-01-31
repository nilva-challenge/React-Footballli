import Moment from "react-moment";
import moment from "jalali-moment";
import style from "./index.module.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { GamesContext } from "../components/contexts/gameContext";

const convertToPersian = (date: Moment) => moment(date).locale("fa").format("D MMMM");

const Calendar = () => {
  const today = convertToPersian(new Date());
  const gamesContext = useContext(GamesContext);
  const [selected, setSelected] = useState(today);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [currentDate, setCurrentDate] = useState(moment());
  const endOfMonth = convertToPersian(currentDate.clone().endOf("jMonth"));
  const startOfMonth = convertToPersian(currentDate.clone().startOf("jMonth"));

  const getDaysInMonth = () => {
    const startOfMonth = currentDate.clone().startOf("jMonth");
    const startWeekday = startOfMonth.weekday();
    const daysInMonth = startOfMonth.daysInMonth();
    const paddingDays = Array.from({ length: startWeekday }, () => null);

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
      return convertToPersian(startOfMonth.clone().add(i, "day"));
    });

    return [...paddingDays, ...daysArray];
  };

  useEffect(() => {
    startOfMonth === selected && setCurrentDate((prevDate) => prevDate.clone().subtract(1, "jMonth"));
    endOfMonth === selected && setCurrentDate((prevDate) => prevDate.clone().add(1, "jMonth"));
  }, [selected]);

  useEffect(() => {
    if (calendarRef.current) {
      const dayWidth = (calendarRef.current.querySelector("." + style.day) as HTMLDivElement).offsetWidth;

      const todayIndex = daysInMonth.indexOf(today);
      const scrollPosition = todayIndex * dayWidth - calendarRef.current.offsetWidth / 2 + dayWidth / 2;
      calendarRef.current.scrollLeft = -scrollPosition * 2.4;
    }
  }, [today]);

  const daysInMonth = getDaysInMonth();

  const handleSelect = (item: string) => {
    const startOfMonth = currentDate.clone().startOf("jMonth");
    const daysInMonth = startOfMonth.daysInMonth();

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
      return startOfMonth.clone().add(i, "day").format("YYYY-MM-DD");
    });

    const selectedd = daysArray.find((date) => convertToPersian(date) === item);
    setSelected(item);
    gamesContext?.setDate(selectedd as string);
  };

  return (
    <div ref={calendarRef} className={style.calendar}>
      {daysInMonth.map((date) => (
        <p onClick={() => handleSelect(date as string)} className={`${style.day} ${selected === date ? style.selectedDate : ""}`}>
          {date === today ? "امروز" : date}
        </p>
      ))}
    </div>
  );
};

export default Calendar;
