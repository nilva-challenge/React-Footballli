import { Tab, Tabs } from "@mui/material";

const date = new Date();
const CURRENT_TIME = date.getTime();
const DAY = 60 * 60 * 24 * 1000;
const DATES: Record<string, string> = {
  "-1": "دیروز",
  "0": "امروز",
  "1": "فردا",
};

const getString = (time: number) => new Date(time).toLocaleDateString("fa");

const getDay = (time: number) =>
  new Date(time).toLocaleDateString("fa", { weekday: "long" });

function getStringDate(dayShift: number) {
  if (dayShift === 2) {
    return getDay(CURRENT_TIME + dayShift * DAY);
  } else if (dayShift > 1) {
    // // @ts-ignore
    // getDay();
    return getString(CURRENT_TIME + dayShift * DAY);
  } else if (dayShift === 1) {
    // return getDay(time);
    // return getDay(time);
  }

  return DATES[dayShift];

  // return new Date(date.getTime() + dayShift * A_DAY).toLocaleDateString("fa");
}

const DateTabs = () => (
  <Tabs>
    {Array.from(new Array(10)).map((_x, index) => (
      <Tab label={getStringDate(index - 1)} />
    ))}
  </Tabs>
);

export default DateTabs;
