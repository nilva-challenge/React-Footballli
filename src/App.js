import { useState } from "react";
import { TextField, CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LiveScoreTitle from "./Components/Index/LiveScoreTitle";
import TimeDisplay from "./Components/Index/TimeDisplay";
import Leagues from "./Components/Index/Leagues";

function App() {
  const [leaguesData, setLeaguesData] = useState({});
  const now = new Date();
  const later = new Date(2023, 4, 30);
  const daysOfYear = [];
  for (now; now <= later; now.setDate(now.getDate() + 1)) {
    daysOfYear.push(new Date(now));
  }

  return (
    <>
      <div>
        <LiveScoreTitle />
        <div style={{ padding: "1rem" }}>
          <TextField label="جستجو" style={{ width: "100%" }} />
        </div>
        <Swiper
          slidesPerView={6}
          className="mySwiper"
          style={{ padding: "1rem" }}
        >
          {daysOfYear?.map((dateTime, key) => (
            <SwiperSlide key={key}>
              <TimeDisplay
                dateTime={dateTime}
                setLeaguesData={setLeaguesData}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {Object.keys(leaguesData).length === 0 ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          {leaguesData?.all.map((items) => (
            <Leagues data={items} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
