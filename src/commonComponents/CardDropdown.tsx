import { FC, memo, useState } from "react";
import ImageLoader from "../commonComponents/ImageLoader";

const data = [
  {
    fixtures: [
      {
        home: {
          logo: "https://media-2.api-sports.io/football/teams/45.png",
          id: 234,
          api_id: 45,
          name: "اورتون",
        },
        away: {
          logo: "https://media-1.api-sports.io/football/teams/51.png",
          id: 240,
          api_id: 51,
          name: "برایتون",
        },
        id: "a56b617b-3de5-49bd-814c-7f479caf9373",
        api_id: "868131",
        status: "FT",
        elapsed: 90,
        start_time: "2023-01-03T23:15:00",
        home_goals: 1,
        away_goals: 4,
        home_penalty_goals: null,
        away_penalty_goals: null,
        live_url: null,
        archive_url: "vod/1645",
      },
      {
        home: {
          logo: "https://media-3.api-sports.io/football/teams/46.png",
          id: 235,
          api_id: 46,
          name: "لسترسیتی",
        },
        away: {
          logo: "https://media-3.api-sports.io/football/teams/36.png",
          id: 229,
          api_id: 36,
          name: "فولام",
        },
        id: "3f85a69a-e384-40f7-ab52-a0a82a7d6f96",
        api_id: "868133",
        status: "FT",
        elapsed: 90,
        start_time: "2023-01-03T23:15:00",
        home_goals: 0,
        away_goals: 1,
        home_penalty_goals: null,
        away_penalty_goals: null,
        live_url: null,
        archive_url: null,
      },
      {
        home: {
          logo: "https://media-2.api-sports.io/football/teams/42.png",
          id: 233,
          api_id: 42,
          name: "آرسنال",
        },
        away: {
          logo: "https://media-1.api-sports.io/football/teams/34.png",
          id: 227,
          api_id: 34,
          name: "نیوکاسل",
        },
        id: "30e794f1-34a9-4ca6-9728-d015230a21b6",
        api_id: "868126",
        status: "FT",
        elapsed: 90,
        start_time: "2023-01-03T23:15:00",
        home_goals: 0,
        away_goals: 0,
        home_penalty_goals: null,
        away_penalty_goals: null,
        live_url: null,
        archive_url: "vod/1623",
      },
      {
        home: {
          logo: "https://media-3.api-sports.io/football/teams/33.png",
          id: 226,
          api_id: 33,
          name: "منچستریونایتد",
        },
        away: {
          logo: "https://media-3.api-sports.io/football/teams/35.png",
          id: 228,
          api_id: 35,
          name: "بورنموث",
        },
        id: "f64a967d-7402-42d3-8c22-0a8a225a0084",
        api_id: "868134",
        status: "FT",
        elapsed: 90,
        start_time: "2023-01-03T23:30:00",
        home_goals: 3,
        away_goals: 0,
        home_penalty_goals: null,
        away_penalty_goals: null,
        live_url: null,
        archive_url: "vod/1647",
      },
    ],
    logo: "https://media.api-sports.io/football/leagues/39.png",
    id: "6",
    api_id: "39",
    name: "لیگ برتر انگلیس",
    season: "2022",
  },
];

const CardDropDown: FC = () => {
  const [hidden, setHidden] = useState<string[]>([]);
  const setClock = (date: string) => {
    return `${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
  };

  return (
    <>
      {data.map((item) => (
        <div className="card-dropdown" key={item.id}>
          <div
            className="dropdown-header"
            onClick={() =>
              setHidden((prev) =>
                prev.includes(item.id)
                  ? prev.filter((prev) => prev !== item.id)
                  : [...prev, item.id]
              )
            }
          >
            <div className="header-title">
              <ImageLoader figureClassName="title-image" src={item.logo} />
              <h2> {item.name} </h2>
            </div>
            <ImageLoader
              figureClassName="header-icon"
              src={`${
                hidden.includes(item.id)
                  ? "/public/svg/arrow_bottom.svg"
                  : "/public/svg/arrow_top.svg"
              }`}
            />
          </div>
          <div
            className={`dropdown-body ${
              hidden.includes(item.id) ? "hidden" : ""
            }`}
          >
            {item.fixtures.map((fixture) => (
              <div className="dropdown-fixture" key={fixture.id}>
                <div className="fixture-team">
                  <span className="body-text">{fixture?.home?.name}</span>
                  <ImageLoader
                    figureClassName="fixture-logo"
                    src={fixture?.home.logo}
                  />
                </div>
                <div className="fixture-time body-text">
                  {setClock(fixture?.start_time)}
                </div>
                <div className="fixture-team">
                  <ImageLoader
                    figureClassName="fixture-logo"
                    src={fixture?.away.logo}
                  />
                  <span className="body-text">{fixture?.away?.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default memo(CardDropDown);
