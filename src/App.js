import { TextField } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LiveScoreTitle from "./Components/Index/LiveScoreTitle";
import TimeDisplay from "./Components/Index/TimeDisplay";

function App() {
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
              <TimeDisplay dateTime={dateTime} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default App;
