import moment from "moment";

export const dates = [
  moment().subtract(1, "days").format("L"),
  moment().subtract(0, "days").format("L"),
  moment().subtract(-1, "days").format("L"),
];
