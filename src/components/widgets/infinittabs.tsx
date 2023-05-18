'use client';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const InfintiTabs = () => {
  return (
    <div className='bg-white py-4 pr-4'>
  <Swiper
        spaceBetween={2}
        slidesPerView={5}
      >
        <SwiperSlide >
            <span className="text-gray1 text-xl font-medium hover:text-primary"> دیروز </span>
        </SwiperSlide >
        <SwiperSlide >
            <span className="text-gray1 text-xl font-medium hover:text-primary"> امروز</span>
        </SwiperSlide >
        <SwiperSlide >
            <span className="text-gray1 text-xl font-medium hover:text-primary"> قردا</span>
        </SwiperSlide >
        
        <SwiperSlide >
            <span className="text-gray1 text-xl font-medium hover:text-primary"> جمهع</span>
        </SwiperSlide >
        <SwiperSlide >
            <span className="text-gray1 text-xl font-medium hover:text-primary"> 31 خرداد </span>
        </SwiperSlide >
        <SwiperSlide >
            <span className="text-gray1 text-xl font-medium hover:text-primary"> 31 خرداد </span>
        </SwiperSlide >
    
    

       
      </Swiper>
    </div>
  )
}

export default InfintiTabs