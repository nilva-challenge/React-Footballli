import { formatDate } from "./formatDate";

export function getDatesInRange(startDate: any, endDate: any) {
  const date = new Date(startDate.getTime());
  const dates = [];
  while (date <= endDate) {
    dates.push(formatDate(new Date(date), "en-UK"));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}
