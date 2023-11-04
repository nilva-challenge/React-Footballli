"use client";

import DatesNavbarButton from "./DatesNavbarButton";
import {
  DATE_FORMAT,
  SOLAR_DATE_FORMAT,
} from "./DatesNavbar.config";
import useDatesNavbar from "./useDatesNavbar";
import "./DatesNavbar.scss";

export default function DatesNavbar() {
   
  const {
    selectedDate,
    dateTimes,
    handleMouseDown,
    handleScroll,
    selectDateTime,
    containerRef
  } = useDatesNavbar();
 
  return (
    <div
      ref={containerRef}
      id="dates-navbar"
      className="overflow-x-auto mx-3 flex whitespace-nowrap scrollbar-hide"
      onScroll={handleScroll}
      onMouseDown={handleMouseDown}
    >
      <div className="flex">
        {dateTimes.map((dateTime) => {
          const formattedDate: string = dateTime.toFormat(DATE_FORMAT);
          const dateButtonText: string = dateTime
            .reconfigure({
              outputCalendar: "persian",
            })
            .setLocale("fa")
            .toFormat(SOLAR_DATE_FORMAT);

          return (
            <DatesNavbarButton
              key={formattedDate}
              text={dateButtonText}
              isSelected={selectedDate?.toFormat(DATE_FORMAT) === formattedDate}
              onClick={() => {
                selectDateTime(dateTime);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
