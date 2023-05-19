import { formatDate } from "./formatDate";

const today = new Date();
export const yesterday = new Date(Date.now() - 864e5);
const tomarrow = new Date(Date.now() + 864e5);


function checkFriday(date: Date) {
  if (formatDate(date,"fa-IR", { weekday: "long" }) === "جمعه") {
    return true;
  }
  return false;
}
export function checkDateAndConvert(date: Date) {
  const dayTitle =  date.getDate() === tomarrow.getDate()
    ? "فردا"
    : date.getDate() === today.getDate()
    ? "امروز"
    : date.getDate() === yesterday.getDate()
    ? "دیروز"
    : checkFriday(date)
    ? "جمعه"
    :formatDate(new Date(date), "fa-IR", {
        month: "long",
        day: "numeric",
        year:"numeric"
      });
  return dayTitle;
}
