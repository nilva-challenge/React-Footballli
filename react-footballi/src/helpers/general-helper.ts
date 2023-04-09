import dayjs from "dayjs";
import { CompetitionsDataType } from "../types/server.ts";
import { NormalizeDataType } from "../types/shares.ts";
import { dayTitle } from "./date-helper.ts";
import { formatNumber } from "./format-helper.ts";

interface FilterDataByLeaguesType {
  league: string;
  logo: string;
  data: NormalizeDataType[];
}

export function normalizeData(
  data: CompetitionsDataType[]
): NormalizeDataType[] {
  let output: NormalizeDataType[] = [];

  if (data) {
    data.forEach((item) => {
      let insertedItemIndex = output.findIndex((element) => {
        return (
          dayjs(element?.date).format("D MMMM YY") ===
          dayjs(item?.fixture.date).format("D MMMM YY")
        );
      });

      if (insertedItemIndex >= 0) {
        output[insertedItemIndex].data.push(item);
      } else {
        output.push({
          date: item.fixture.date,
          data: [item],
        });
      }
    });
  }

  return output.sort((a, b) => {
    let a_date = a.date;
    let b_date = b.date;
    if (a_date === b_date) {
      return 0;
    }
    return dayjs(a_date).isBefore(dayjs(b_date)) ? -1 : 1;
  });
}

export function filterDataByLeagues(
  data: NormalizeDataType[],
  selectedDay: string
): FilterDataByLeaguesType[] {
  let filterDataBySelectedDay: CompetitionsDataType[] = [];
  let output: FilterDataByLeaguesType[] = [];
  if (data) {
    data.forEach((item) => {
      if (selectedDay === dayjs(item.date).format("YYYY-MM-DD")) {
        filterDataBySelectedDay = item.data;
      }
    });
  }

  if (filterDataBySelectedDay) {
    filterDataBySelectedDay.forEach((item) => {
      let insertedItemIndex = output.findIndex((element) => {
        return element.league === item.league.name;
      });

      if (insertedItemIndex >= 0) {
        output[insertedItemIndex].data.push(item);
      } else {
        output.push({
          league: item.league.name,
          logo: item.league.logo,
          data: [item],
        });
      }
    });
  }

  return output;
}

export function dateRender(date: string): string {
  let output: string;
  let today = dayjs().format("YYYY-MM-DD");
  let yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
  let tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");
  let formatedDate = dayjs(date).format("YYYY-MM-DD");
  let diff = dayjs(formatedDate).diff(today, "days");

  if (formatedDate === today) {
    output = "امروز";
  } else if (formatedDate === yesterday) {
    output = "دیروز";
  } else if (formatedDate === tomorrow) {
    output = "فردا";
  } else if (diff < 6 && diff > -6) {
    output = formatNumber(dayTitle(dayjs(date).toDate()));
  } else {
    output = formatNumber(dayjs(date).format("D MMMM"));
  }

  return output;
}
