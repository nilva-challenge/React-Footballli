import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Stack from "../components/Stack/Stack-component.tsx";
import Box from "../components/Box/Box-component.tsx";
import { useCompetitionsData } from "../hooks/useCompetitionsData.ts";
import Matches from "../components/Matches/Matches-component.tsx";
import CompetitionsHeader from "../containers/CompetitionsHeader/CompetitionsHeader-container.tsx";
import Divider from "../components/Divider/Divider-component.tsx";
import { FixedSizeList } from "react-window";
import Loading from "../components/Loading/Loading-component.tsx";
import { getWindowDimensions } from "../helpers/windowSize-helper.ts";
import { normalizeData } from "../helpers/general-helper.ts";
import { filterDataByLeagues } from "../helpers/general-helper.ts";
import { dateRender } from "../helpers/general-helper.ts";

function Competitions() {
  let { height } = getWindowDimensions();
  let today = dayjs().format("YYYY-MM-DD");
  let { retrieveCompetitionsData, data, loading, hasError } =
    useCompetitionsData();
  let [selectedDay, setSelectedDay] = useState<string>(today);
  let normalizedData = normalizeData(data);
  let leaguesData = filterDataByLeagues(normalizedData, selectedDay);

  useEffect(() => {
    retrieveCompetitionsData();
  }, []);

  return (
    <>
      <Helmet>
        <title>مسابقات</title>
      </Helmet>
      <CompetitionsHeader
        timesheets={
          <Stack
            style={{
              overflow: "hidden",
              overflowX: "scroll",
              width: "100%",
            }}
          >
            {!loading && !!normalizedData
              ? normalizedData.map((item, index) => {
                  let formatedDate = dayjs(item.date).format("YYYY-MM-DD");
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedDay(formatedDate);
                      }}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#fff",
                        border: "none",
                        marginLeft: 30,
                        position: "relative",
                        color:
                          selectedDay === formatedDate ? "#000000" : "#ccc",
                        padding: "10px 0",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <p>{dateRender(item.date)}</p>
                      <Box
                        style={{
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          width: "100%",
                          height: selectedDay === formatedDate ? 3 : 0,
                          borderTopRightRadius: 20,
                          borderTopLeftRadius: 20,
                          backgroundColor: "green",
                        }}
                      />
                    </button>
                  );
                })
              : null}
          </Stack>
        }
      />
      <Divider size={16} />
      {loading ? (
        <Stack distribution="center">
          <Divider size={24} />
          <Loading />
        </Stack>
      ) : null}
      {!loading && hasError ? (
        <Stack distribution="center">
          <Divider size={24} />
          <p>مشکلی در سرور گیش آمده است.</p>
        </Stack>
      ) : null}
      {!loading && !!leaguesData && leaguesData.length === 0 ? (
        <Stack distribution="center">
          <Divider size={24} />
          <p>نتیجه ای وجود ندارد.</p>
        </Stack>
      ) : null}
      {!loading && !hasError && !!leaguesData ? (
        <Stack direction="column" style={{ padding: "0 16px" }}>
          <FixedSizeList
            height={height - 280}
            width="100%"
            itemSize={leaguesData.length}
            itemCount={1}
          >
            {({ style }) => {
              return (
                <div style={style}>
                  {!!leaguesData
                    ? leaguesData.map((i) => {
                        return (
                          <>
                            <Matches
                              leagueTitle={i.league}
                              logo={i.logo}
                              data={i.data}
                              selectedDay={selectedDay}
                            />
                            <Divider size={16} />
                          </>
                        );
                      })
                    : null}
                </div>
              );
            }}
          </FixedSizeList>
        </Stack>
      ) : null}
    </>
  );
}

export default Competitions;
