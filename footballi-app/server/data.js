import GetPersianDate from "../common/GetPersianDate";
import esteghlal from "../public/images/teams/esteghlal.png";
import persepolis from "../public/images/teams/persepolis.png";
import foolad from "../public/images/teams/foolad.png";
import sepahan from "../public/images/teams/sepahan.png";
import chelsea from "../public/images/teams/chelsea.png";
import liverpool from "../public/images/teams/Liverpool.png";
import premier_league from "../public/images/flag/premier-league.jpg";
import iran_league from "../public/images/flag/iran-league.jpg";

const base_url = "http://localhost:3000/live";

export const persianDate = [
  {
    title: "دیروز",
    date: `${base_url}/${GetPersianDate().sunyear}-${
      GetPersianDate().monthday
    }-${GetPersianDate().daysun - 1}`,
    id: 1,
    leagues: [
      {
        League_title: "لیگ برتر خلیج فارس",

        games: [
          {
            team1_logo: persepolis,
            team1_name: "پرسپولیس",
            team2_logo: esteghlal,
            team2_name: "استقلال",
            time: "17:30",
            id: 14,
          },
        ],
        id: 8,
      },
    ],
  },
  {
    title: "امروز",
    date: `${base_url}/${GetPersianDate().sunyear}-${
      GetPersianDate().monthday
    }-${GetPersianDate().daysun}`,
    id: 2,
    leagues: [
      {
        League_title: "لیگ برتر خلیج فارس",
        League_logo: iran_league,
        games: [
          {
            team1_logo: persepolis,
            team1_name: "پرسپولیس",
            team2_logo: esteghlal,
            team2_name: "استقلال",
            time: "19:30",
            id: 15,
          },
          {
            team1_logo: foolad,
            team1_name: "فولاد",
            team2_logo: sepahan,
            team2_name: "سپاهان",
            time: "17:30",
            id: 21,
          },
        ],
        id: 9,
      },
      {
        League_title: "لیگ برتر انگلیس",
        League_logo: premier_league,
        games: [
          {
            team1_logo: chelsea,
            team1_name: "چلسی",
            team2_logo: liverpool,
            team2_name: "لیورپول",
            time: "22:30",
            id: 22,
          },
        ],
        id: 24,
      },
    ],
  },
  {
    title: "فردا",
    date: `${base_url}/${GetPersianDate().sunyear}-${
      GetPersianDate().monthday
    }-${GetPersianDate().daysun + 1}`,
    id: 3,
    leagues: [
      {
        League_title: "لیگ برتر خلیج فارس",
        games: [
          {
            team1_logo: persepolis,
            team1_name: "پرسپولیس",
            team2_logo: esteghlal,
            team2_name: "استقلال",
            id: 16,
          },
        ],
        id: 10,
      },
    ],
  },
  {
    title: `${GetPersianDate().sunmonth} ${GetPersianDate().daysun + 2}`,
    date: `${base_url}/${GetPersianDate().sunyear}-${
      GetPersianDate().monthday
    }-${GetPersianDate().daysun + 2}`,
    id: 4,
    leagues: [
      {
        League_title: "لیگ برتر خلیج فارس",
        games: [
          {
            team1_logo: persepolis,
            team1_name: "پرسپولیس",
            team2_logo: esteghlal,
            team2_name: "استقلال",
            id: 17,
          },
        ],
        id: 11,
      },
    ],
  },
  {
    title: `${GetPersianDate().sunmonth} ${GetPersianDate().daysun + 3}`,
    date: `${base_url}/${GetPersianDate().sunyear}-${
      GetPersianDate().monthday
    }-${GetPersianDate().daysun + 3}`,
    id: 5,
    leagues: [
      {
        League_title: "لیگ برتر خلیج فارس",
        games: [
          {
            team1_logo: persepolis,
            team1_name: "پرسپولیس",
            team2_logo: esteghlal,
            team2_name: "استقلال",
            id: 18,
          },
        ],
      },
    ],
  },
  {
    title: `${GetPersianDate().sunmonth} ${GetPersianDate().daysun + 4}`,
    date: `${base_url}/${GetPersianDate().sunyear}-${
      GetPersianDate().monthday
    }-${GetPersianDate().daysun + 4}`,
    id: 6,
    leagues: [
      {
        League_title: "لیگ برتر خلیج فارس",
        games: [
          {
            team1_logo: persepolis,
            team1_name: "پرسپولیس",
            team2_logo: esteghlal,
            team2_name: "استقلال",
            id: 19,
          },
        ],
        id: 12,
      },
    ],
  },
  {
    title: `${GetPersianDate().sunmonth} ${GetPersianDate().daysun + 5}`,
    date: `${base_url}/${GetPersianDate().sunyear}-${
      GetPersianDate().monthday
    }-${GetPersianDate().daysun + 5}`,
    id: 7,
    leagues: [
      {
        League_title: "لیگ برتر خلیج فارس",
        games: [
          {
            team1_logo: persepolis,
            team1_name: "پرسپولیس",
            team2_logo: esteghlal,
            team2_name: "استقلال",
            time: "12:30",
            id: 20,
          },
        ],
        id: 13,
      },
    ],
  },
];
