import React, { useState } from "react";
import moment from "jalali-moment";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  // This will format the month and year for the header, e.g., "Farvardin 1400"
  const calendarHeader = currentDate.format("jMMMM jYYYY");

  // This function will get an array of day numbers for the current month
  const getDaysInMonth = () => {
    const daysInMonth = currentDate.clone().daysInMonth();
    return [...Array(daysInMonth)].map((_, i) => {
      return currentDate.clone().startOf("jMonth").add(i, "day").format("jD");
    });
  };

  // This function will advance the calendar by one month
  const nextMonth = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(1, "jMonth"));
  };

  // This function will take the calendar back by one month
  const prevMonth = () => {
    setCurrentDate((prevDate) => prevDate.clone().subtract(1, "jMonth"));
  };

  return (
    <div>
      <header>
        <button onClick={prevMonth}>&lt;</button>
        {calendarHeader}
        <button onClick={nextMonth}>&gt;</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>ش</th>
            <th>ی</th>
            <th>د</th>
            <th>س</th>
            <th>چ</th>
            <th>پ</th>
            <th>ج</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {getDaysInMonth().map((day, index) => (
              <td key={index}>{day}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
