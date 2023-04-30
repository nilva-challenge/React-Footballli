import { TextField } from "@mui/material";
import LiveScoreTitle from "./Components/Index/LiveScoreTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  const currentDate = new Date();
  let explicitMonthCoercion = currentDate.getMonth() + 1;
  explicitMonthCoercion = "0" + explicitMonthCoercion;
  console.log("english Date", explicitMonthCoercion);
  console.log(
    "Persian Date",
    currentDate.toLocaleDateString("fa-IR", {
      month: "long",
      day: "numeric",
    })
  );
  console.log(
    "englishsdsd Date",
    currentDate.toLocaleDateString("en-US", {
      month: "long",
    })
  );
  return (
    <>
      <div>
        <LiveScoreTitle />
        <div style={{ padding: "1rem" }}>
          <TextField label="جستجو" style={{ width: "100%" }} />
        </div>
        <Swiper
          slidesPerView={6}
          modules={[Pagination]}
          className="mySwiper"
          style={{ padding: "1rem" }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default App;
