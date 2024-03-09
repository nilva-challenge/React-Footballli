import { format } from "date-fns-jalali";

export const toJalali = (date: string | number, dateFormat = "yyyy/MM/dd") => {
  try {
    return date ? format(new Date(date), dateFormat) : "-";
  } catch {
    return "-";
  }
};
