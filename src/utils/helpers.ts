export const getFullDate = (date: Date = new Date()): string =>
  date.toISOString().replace("-", "/").split("T")[0].replace("/", "-");

export const dateGeneration = (date: Date = new Date(), day: number = 0) => {
  let date_ = date || new Date();
  // Change the date by adding or miness day
  date_.setDate(date_.getDate() + day);
  // return yyyy-mm-dd format
  return date_.toISOString().split("T")[0];
};

let options: any = { month: "long", day: "numeric" };
export const getPersisanDate = (date: Date) => date.toLocaleDateString("fa-IR", options);
