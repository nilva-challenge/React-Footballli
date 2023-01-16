import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getScores } from "./service";
import { footballSlice } from "./slice";

const footballActions = footballSlice.actions;

export const scores = (
  date?: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(footballActions.setScores([]));
    // const response = await getScores(date || "2021-01-01");
    //   SnackbarUtils.success("logged in successfully");
    dispatch(
      footballActions.setScores( [
          {
            fixtures: [
              {
                home: {
                  logo: "https://media-1.api-sports.io/football/teams/2703.png",
                  id: "210",
                  api_id: "2703",
                  name: "آلومینیوم اراک",
                },
                away: {
                  logo: "https://media.api-sports.io/football/teams/2714.png",
                  id: "213",
                  api_id: "2714",
                  name: "گل‌گهر",
                },
                id: "b4f61692-346a-4d03-b5fa-5c1d9ffda7ea",
                api_id: "972971",
                status: "FT",
                elapsed: 90,
                start_time: "2023-01-16T15:00:00",
                home_goals: 0,
                away_goals: 0,
                home_penalty_goals: null,
                away_penalty_goals: null,
                live_url: "live/115",
                archive_url: null,
              },
            ],
            logo: "https://media.api-sports.io/football/leagues/290.png",
            id: "2811",
            api_id: "290",
            name: "لیگ برتر خلیج فارس",
            season: "2022",
          },
          {
            fixtures: [
              {
                home: {
                  logo: "https://media-1.api-sports.io/football/teams/724.png",
                  id: "54",
                  api_id: "724",
                  name: "کادیس",
                },
                away: {
                  logo: "https://media.api-sports.io/football/teams/797.png",
                  id: "57",
                  api_id: "797",
                  name: "الچه",
                },
                id: "4d088eb0-0ad0-4577-97a1-d86746a6ab5a",
                api_id: "878103",
                status: "NS",
                elapsed: null,
                start_time: "2023-01-16T23:30:00",
                home_goals: null,
                away_goals: null,
                home_penalty_goals: null,
                away_penalty_goals: null,
                live_url: null,
                archive_url: null,
              },
            ],
            logo: "https://media.api-sports.io/football/leagues/140.png",
            id: "124",
            api_id: "140",
            name: "لالیگا",
            season: "2022",
          },
          {
            fixtures: [
              {
                home: {
                  logo: "https://media-1.api-sports.io/football/teams/511.png",
                  id: "33",
                  api_id: "511",
                  name: "امپولی",
                },
                away: {
                  logo: "https://media.api-sports.io/football/teams/498.png",
                  id: "26",
                  api_id: "498",
                  name: "سمپدوریا",
                },
                id: "f4eb9df1-55e1-4c4a-bf48-29058a61fde2",
                api_id: "881952",
                status: "NS",
                elapsed: null,
                start_time: "2023-01-16T23:15:00",
                home_goals: null,
                away_goals: null,
                home_penalty_goals: null,
                away_penalty_goals: null,
                live_url: null,
                archive_url: null,
              },
            ],
            logo: "https://media.api-sports.io/football/leagues/135.png",
            id: "85",
            api_id: "135",
            name: "سری آ ایتالیا",
            season: "2022",
          },
          {
            fixtures: [
              {
                home: {
                  logo: "https://media.api-sports.io/football/teams/212.png",
                  id: "6044",
                  api_id: "212",
                  name: "پورتو",
                },
                away: {
                  logo: "https://media.api-sports.io/football/teams/242.png",
                  id: "4837",
                  api_id: "242",
                  name: "فامالیسائو",
                },
                id: "a1cf03f2-1da0-49db-8769-d0563f49de81",
                api_id: "898742",
                status: "FT",
                elapsed: 90,
                start_time: "2023-01-16T00:00:00",
                home_goals: 4,
                away_goals: 1,
                home_penalty_goals: null,
                away_penalty_goals: null,
                live_url: null,
                archive_url: "vod/1787",
              },
              {
                home: {
                  logo: "https://media-1.api-sports.io/football/teams/230.png",
                  id: "1294",
                  api_id: "230",
                  name: "اشتوریل پرایا",
                },
                away: {
                  logo: "https://media-1.api-sports.io/football/teams/4716.png",
                  id: "6187",
                  api_id: "4716",
                  name: "کازاپیا",
                },
                id: "febf28d3-1e43-4438-979d-59056f1b930c",
                api_id: "898743",
                status: "NS",
                elapsed: null,
                start_time: "2023-01-16T22:30:00",
                home_goals: null,
                away_goals: null,
                home_penalty_goals: null,
                away_penalty_goals: null,
                live_url: null,
                archive_url: null,
              },
            ],
            logo: "https://sport-cdn.zarebin.ir/sport-files-prod/media/league/logo/S%C3%ADmbolo_da_Liga_Portugal_bwin.png",
            id: "111",
            api_id: "94",
            name: "لیگ برتر پرتغال",
            season: "2022",
          },
        ])
    );
  };
};
