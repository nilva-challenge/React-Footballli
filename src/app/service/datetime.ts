import { TodaySharp } from "@mui/icons-material";
import numberFormat from "./numberFormat";

const getTime = (date?: Date) => {
  let today = new Date(date || new Date());
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  let todayStr = yyyy + "-" + mm + "-" + dd;
  return todayStr;
};

const customizeDateAndTime = (time: any, options: any) => {
  // We need to use a try-catch here to support IE11!

  try {
    return options
      ? new Intl.DateTimeFormat("fa-FA", options).format(time)
      : new Intl.DateTimeFormat("fa-FA").format(time);
  } catch (err) {
    return options
      ? new Intl.DateTimeFormat("en-GB", options).format(time)
      : new Intl.DateTimeFormat("en-GB").format(time);
  }
};

const dateTimeCustom = (date: any) => {
  const day = customizeDateAndTime(date * 1000, {
    day: "numeric",
  });
  const dayNumber = parseInt(
    numberFormat.toEnglishDigitsOnlyNum(
      customizeDateAndTime(date * 1000, {
        day: "numeric",
      })
    )
  );
  const month = customizeDateAndTime(date * 1000, {
    month: "short",
  });

  const monthNumber = parseInt(
    numberFormat.toEnglishDigitsOnlyNum(
      customizeDateAndTime(date * 1000, {
        month: "numeric",
      })
    )
  );

  const year = customizeDateAndTime(date * 1000, {
    year: "numeric",
  });
  const yearNumber = parseInt(
    numberFormat.toEnglishDigitsOnlyNum(
      customizeDateAndTime(date * 1000, {
        year: "numeric",
      })
    )
  );
  // const time = customizeDateAndTime(date * 1000, {
  //     hour: "numeric",
  //     minute: "numeric",
  //     second: "numeric",
  // });

  const hour = parseInt(
    numberFormat.toEnglishDigitsOnlyNum(
      customizeDateAndTime(date * 1000, {
        hour: "numeric",
      })
    )
  );

  const minute = parseInt(
    numberFormat.toEnglishDigitsOnlyNum(
      customizeDateAndTime(date * 1000, {
        minute: "numeric",
      })
    )
  );
  const second = parseInt(
    numberFormat.toEnglishDigitsOnlyNum(
      customizeDateAndTime(date * 1000, {
        second: "numeric",
      })
    )
  );
  const week = customizeDateAndTime(date * 1000, {
    weekday: "long",
  });
  const weekNumber = customizeDateAndTime(date * 1000, {
    weekday: "narrow",
  });

  return {
    day,
    dayNumber: dayNumber > 9 ? dayNumber : `0${dayNumber}`,
    month,
    monthNumber: monthNumber > 9 ? monthNumber : `0${monthNumber}`,
    year,
    yearNumber: yearNumber > 9 ? yearNumber : `0${yearNumber}`,
    time: `${hour > 9 ? hour : `0${hour}`}:${
      minute > 9 ? minute : `0${minute}`
    }`,
    hour,
    minute,
    second,
    date,
    week,
    weekNumber,
  };
};
const timeToPersian = (date?: Date) => {};

export { getTime, timeToPersian, dateTimeCustom };
