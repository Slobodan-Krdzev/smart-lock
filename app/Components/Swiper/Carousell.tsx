"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import lock1 from "../../../public/images/lock1.png";
import lock2 from "../../../public/images/lock2.png";
import lock3 from "../../../public/images/lock3.png";
import lock4 from "../../../public/images/lock4.png";
import lock5 from "../../../public/images/lock5.png";
import lock6 from "../../../public/images/lock6.png";
import lock7 from "../../../public/images/lock7.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
};

const caroItems = [lock1, lock2, lock3, lock4, lock5, lock6, lock7];

const Carousell = () => {
  return (
    <>
      <Swiper className="mySwiper" {...swiperParams}>
        {caroItems.map((lock, idx) => (
          <SwiperSlide key={idx} className="bodyBG flex justify-center items-center" style={{
            height: 500
          }}>
            <Image src={lock} alt={`Lock ${idx + 1}`} width={200} height={200} className="ml-26 h-full bodyBG"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousell;
