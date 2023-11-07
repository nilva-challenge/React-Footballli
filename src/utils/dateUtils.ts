import moment from "moment-jalaali";

moment.loadPersian({ dialect: "persian-modern" });
const days: { [key: string]: string } = {
  "-1": "دیروز",
  "0": "امروز",
  "1": "فردا",
};

export const formatToday = () =>
  moment(new Date().toISOString(), "YYYY/M/D").format("YYYY-MM-DD");

const formatDayTitle = (date: moment.Moment, title?: string) =>
  title || date.format("jD jMMMM");

export const createDatesArray = (min = -2, max = 2) => {
  let result = [];
  for (let ind = min; ind <= max; ind++) {
    const date = moment(new Date().toISOString(), "YYYY/M/D");
    ind > 0 ? date.add(ind, "d") : date.subtract(Math.abs(ind), "d");

    result.push({
      date,
      title: formatDayTitle(date, days[ind]),
    });
  }

  return result;
};
