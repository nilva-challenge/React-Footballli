import React from "react";
import moment from "jalali-moment";
import PersianNumber from "./PersianNumber";

export const persianDatetime = ({ children }) => {
  return (
    <PersianNumber>
      {moment
        .from(children, "YY-MM-DD HH:mm:ss")
        .locale("fa")
        .format("HH:mm  در   YYYY/MM/DD")}
    </PersianNumber>
  );
};
