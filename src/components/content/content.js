import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentItem from "./contentItem";
import UseHttp from "../hooks/use-http";
import style from "./content.module.css";
import SelectDropDown from "../ui/select/selectDropDown";

const Content = () => {
  const params = useParams();
  let date = params.ContentId;
  date = date.split(":")[1];

  const { isLoading, error, RequestHttp: GetMatchTbl } = UseHttp();
  const [match, setMatch] = useState([]);
  const [leagueId, setleagueId] = useState(0);

  useEffect(() => {
    const TransformData = ({ data }) => {
      let dataArray = [];
      for (const key in data) {
        for (let index = 0; index < 100; index++) {
          dataArray.push({
            Id: index + 1,
            leagueName: data.response[index].league.name,
            leaguelogo: data.response[index].league.logo,
            leagueid: data.response[index].league.id,
            scoreAway: data.response[index].score.fulltime.away,
            scorehome: data.response[index].score.fulltime.home,
            teamshomename: data.response[index].teams.home.name,
            teamshomelogo: data.response[index].teams.home.logo,
            teamsawayname: data.response[index].teams.away.name,
            teamsawaylogo: data.response[index].teams.away.logo,
          });
        }
      }

      function getUniqueListBy(arr, key) {
        return [...new Map(arr.map((item) => [item[key], item])).values()];
      }

      const arr1 = getUniqueListBy(dataArray, "leagueid");
      setMatch(arr1);
    };

    GetMatchTbl(
      {
        method: "GET",
        url: "https://api-football-beta.p.rapidapi.com/fixtures",
        params: { date: `${date}` },
        headers: {
          "X-RapidAPI-Key":
            "07cd879023msh42df73d065a34e5p189751jsn724dd3e409ab",
          "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
        },
      },
      TransformData
    );
  }, [GetMatchTbl, date]);

  const ChangeHandler = (value) => {
    setleagueId(value);
  };

  const FilterLeagues = match.filter((item) => item.leagueid === leagueId);

  return (
    <>
      {!isLoading && match.length > 0 && !error && (
        <div className={`${style["card"]} ${style["card-custom"]}`}>
          <div className={style["card-header"]}>
            <div className={style["card-title"]}>
              <SelectDropDown match={match} onChange={ChangeHandler} />
            </div>
          </div>
          {FilterLeagues.map((item, index) => (
            // <li key={item.id}>{item.name}</li>
            <ContentItem
              key={index}
              leagueName={item.leagueName}
              leagueLogo={item.leaguelogo}
              teamsawayname={item.teamsawayname}
              teamsawaylogo={item.teamsawaylogo}
              teamshomename={item.teamshomename}
              teamshomelogo={item.teamshomelogo}
              scoreAway={item.scoreAway}
              scorehome={item.scorehome}
            />
          ))}
        </div>
      )}
      {!isLoading && error && (
        <>
          <p className={style.ErrorHttp}>{error}</p>
        </>
      )}
      {isLoading && (
        <>
          <p className={style.Loading}>Loading...</p>
        </>
      )}
    </>
  );
};

export default Content;
