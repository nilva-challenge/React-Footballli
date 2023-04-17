import moment from "moment";
export const getFormatDateApi = (date: string | null): string => {
  if (date) return moment(date).format("YYYY MM DD").split(" ").join("-");
  else
    return moment(moment().toDate()).format("YYYY MM DD").split(" ").join("-");
};

export const getTabsDatesArray = (
  selectedDate: string = moment().format("YYYY MM DD")
): string[] => {
  return [
    moment(selectedDate)
      .add("day", 2)
      .format("YYYY MM DD")
      .split(" ")
      .join("-"),
    moment(selectedDate)
      .add("day", 1)
      .format("YYYY MM DD")
      .split(" ")
      .join("-"),
    moment(selectedDate).format("YYYY MM DD").split(" ").join("-"),
    moment(selectedDate)
      .add("day", -1)
      .format("YYYY MM DD")
      .split(" ")
      .join("-"),
    moment(selectedDate)
      .add("day", -2)
      .format("YYYY MM DD")
      .split(" ")
      .join("-"),
  ];
};
