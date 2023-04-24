import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Box } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const Carousel = () => {
  return (
    <Box>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        style={{ width: "60vw", height: "40vh", backgroundColor: "aqua" }}
      >
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/livestream.jpeg?alt=media&token=b263dcff-208c-48a7-bd48-edc549e5899b"
            alt="pine"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/_next/static/media/Stream.png"
            alt="st"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/_next/static/media/Live.png"
            alt="st"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Carousel;
