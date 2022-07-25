import moment, { max } from "moment-jalaali";

//#region global
moment.loadPersian({ dialect: "persian-modern" });
const days: { [key: string]: string } = {
  "-1": "دیروز",
  "0": "امروز",
  "1": "فردا",
};
// #region global

const formatDayTitle = (date: moment.Moment, title?: string) =>
  title || date.format("jMMMM jDD");

export const createDatesArray = (min = -2, max = 2) => {
  let result = [];
  for (let ind = min; ind <= max; ind++) {
    const date = moment(new Date().toISOString(), "YYYY/M/D");
    ind > 0 ? date.add(ind, "d") : date.subtract(Math.abs(ind));
    result.push({
      date,
      title: formatDayTitle(date, days[ind]),
    });
  }

  return result;
};
