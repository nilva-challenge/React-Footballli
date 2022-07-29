import { useState, useEffect } from "react";
import { Days } from "../../container/components/Tabs/types";
import moment from "moment";

const specificDays: { [key: string]: string } = {
  "-1": "دیروز",
  "0": "امروز",
  "1": "فردا",
};
const useTabScroll = () => {
  const [days, setDays] = useState<Days[]>([]);
  const [focusDay, setFocusDay] = useState(
    moment(new Date()).format("YYYY/M/D")
  );

  useEffect(() => {
    const temp = [];
    for (let i = 10; i > -10; i--) {
      var now = moment(new Date());
      let newDay = now.add(i, "day");
      temp.push({
        key: newDay.format("YYYY/M/D"),
        value: specificDays[i] ? specificDays[i] : newDay.format("YYYY/M/D"),
      });
    }
    setDays(temp);
  }, []);

  useEffect(() => {
    if (document.getElementById("focus")) {
      document.getElementById("focus")!.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center",
      });
    }
  }, [days]);

  const handleScrollLeft = () => {
    setFocusDay(days[1].key);
    const first = days[0].key;
    const temp = [...days];
    for (let i = 1; i < 10; i++) {
      var now = moment(first, "jYYYY/jM/jD");
      let newDay = now.add(i, "day");
      temp.unshift({
        key: newDay.format("YYYY/M/D"),
        value: newDay.format("YYYY/M/D"),
      });
    }
    setDays(temp);
  };

  const handleScrollRight = () => {
    setFocusDay(days[days.length - 2].key);
    const last = days[days.length - 1].key;
    const temp = [...days];
    for (let i = 1; i < 10; i++) {
      var now = moment(last, "jYYYY/jM/jD");
      let newDay = now.subtract(i, "day");
      temp.push({
        key: newDay.format("YYYY/M/D"),
        value: newDay.format("YYYY/M/D"),
      });
    }
    setDays(temp);
  };

  return [days, focusDay, handleScrollLeft, handleScrollRight] as const;
};

export default useTabScroll;
