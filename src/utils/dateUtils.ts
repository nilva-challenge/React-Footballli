import moment from "moment-jalaali";

//#region global
moment.loadPersian({ dialect: "persian-modern" });
const days = [
  { id: -2, title: undefined },
  { id: -1, title: "دیروز" },
  { id: 0, title: "امروز" },
  { id: 1, title: "فردا" },
  { id: 2, title: undefined },
];
// #region global

const formatDayTitle = (date: moment.Moment, title?: string) =>
  title || date.format("jMMMM jDD");

export const createDatesArray = () => {
  return days.map((day) => {
    const date = moment(new Date().toISOString(), "YYYY/M/D");
    day.id > 0 ? date.add(day.id, "d") : date.subtract(Math.abs(day.id));
    return {
      date,
      title: formatDayTitle(date, day.title),
    };
  });
};
