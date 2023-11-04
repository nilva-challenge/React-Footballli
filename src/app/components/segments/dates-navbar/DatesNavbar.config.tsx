import { DateTime } from "luxon";

export enum ScrollDirection {
  LEFT = "left",
  RIGHT = "right",
}

const CURRENT_DATE_TIME: DateTime = DateTime.now();
export const DATE_FORMAT: string = "yyyy-MM-dd";
export const SOLAR_DATE_FORMAT: string = "d LLLL";

export const DEFAULT_DATE_TIMES: DateTime[] = [
  CURRENT_DATE_TIME.minus({ days: 3 }),
  CURRENT_DATE_TIME.minus({ days: 2 }),
  CURRENT_DATE_TIME.minus({ days: 1 }),
  CURRENT_DATE_TIME,
  CURRENT_DATE_TIME.plus({ days: 1 }),
  CURRENT_DATE_TIME.plus({ days: 2 }),
  CURRENT_DATE_TIME.plus({ days: 3 }),
];
