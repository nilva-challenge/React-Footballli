import { useState } from "react";
import { Button } from "./Button";
import { toJalaali } from "jalaali-js";

const MatchCalender = () => {
  const [active, setActive] = useState(1);
  const currentDate = new Date();
  const today = currentDate.toISOString().split("T")[0];
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  const yesterdayDate = yesterday.toISOString().split("T")[0];

  const tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1);
  const tomorrowDate = tomorrow.toISOString().split("T")[0];

  const aftertomorrow = new Date(currentDate);
  aftertomorrow.setDate(currentDate.getDate() + 2);
  const aftertomorrowDate = aftertomorrow.toISOString().split("T")[0];

  const afteraftertomorrow = new Date(currentDate);
  afteraftertomorrow.setDate(currentDate.getDate() + 3);
  const afteraftertomorrowDate = afteraftertomorrow.toISOString().split("T")[0];

  const gregorianDate = new Date(aftertomorrow);
  const gregorianDates = new Date(afteraftertomorrow);


  const jalaliDate = toJalaali(gregorianDate);
  const aftertomarowjalaliDate = toJalaali(gregorianDates);

  const data = [
    {
      id: 0,
      title: "دیروز",
      value: "1",
      date: yesterdayDate,
    },
    {
      id: 1,
      title: "امروز",
      value: "2",
      date: today,
    },
    {
      id: 2,
      title: "فردا",
      value: "3",
      date: tomorrowDate,
    },
    {
      id: 3,
      title: `${jalaliDate.jd} ${jalaliDate.jm == 8 ? "آبان" : "آذر"}`,
      value: "4",
      date: aftertomorrowDate,
    },
    {
      id: 4,
      title: `${aftertomarowjalaliDate.jd} ${aftertomarowjalaliDate.jm == 8 ? "آبان" : "آذر"}`,
      value: "5",
      date: afteraftertomorrowDate,
    },
  ];
  return (
    <div className='flex items-center gap-3 justify-around max-w-[350px] overflow-hidden scrollbar-hidden py-1'>
      {data.map((date) => {
        return (
          <Button
            key={data.id}
            className={`${(date.id === active )&& "border border-b-2 border-green-500"} min-w-[70px]`}
            onClick={() => setActive(date.id)}>
            <p>{date.title}</p>
          </Button>
        );
      })}
    </div>
  );
};

export default MatchCalender;
