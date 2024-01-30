import React from "react";
import Container from "./shared/Container";
import akuna from "../assets/icon/share/akuna.svg";
import binance from "../assets/icon/share/binance.svg";
import cboe from "../assets/icon/share/cboe.svg";
import jane from "../assets/icon/share/jane.svg";
import okx from "../assets/icon/share/okx.svg";
import optiver from "../assets/icon/share/optiver.svg";
import twosigma from "../assets/icon/share/twosigma.svg";
import wintermute from "../assets/icon/share/wintermute.svg";
import Slider from "react-slick";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BlockChainTrust = () => {
  return (
    <div className="w-full bg-[#F3F3F3] px-5 md:py-24 py-12">
      <Container>
        <div>
          <div className="flex flex-col justify-center items-center text-center">
            <h2>Blockchain You Can Trust</h2>
            <p className="max-w-[70ch] mt-[30px]">
              Major financial institutions—including some of the world’s biggest
              exchanges, market makers, and trading firms—publish their data
              directly to the network.
            </p>
          </div>
          <div className="mt-[124px]">
            <Swiper slidesPerView={5} spaceBetween={30} className="mySwiper">
              <SwiperSlide>
                <img className="w-[160px] col-span-3" src={akuna} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[160px] col-span-3" src={binance} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[160px] col-span-3" src={cboe} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[160px] col-span-3" src={jane} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[160px] col-span-3" src={okx} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[160px] col-span-3" src={optiver} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[160px] col-span-3" src={twosigma} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-[160px] col-span-3" src={wintermute} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* <img className="w-[160px] col-span-3" src={binance} alt="" />
          <img className="w-[160px] col-span-3" src={cboe} alt="" />
          <img className="w-[160px] col-span-3" src={jane} alt="" />
          <img className="w-[160px] col-span-3" src={okx} alt="" />
          <img className="w-[160px] col-span-3" src={optiver} alt="" />
          <img className="w-[160px] col-span-3" src={twosigma} alt="" />
          <img className="w-[160px] col-span-3" src={wintermute} alt="" /> */}
        </div>
        {/* <div className="w-full grid grid-cols-12 gap-10">
          <div className="flex flex-col gap-8  md:col-span-6 col-span-12">
            <h2>Blockchain You <br /> Can Trust</h2>
            <p>
              Major financial institutions—including some of the world’s <br /> biggest
              exchanges, market makers, and trading firms—publish <br /> their data
              directly to the network.
            </p>
          </div>
          <div className=" md:col-span-6 col-span-12 grid grid-cols-12 gap-5">
            <img className="w-[160px] col-span-3" src={akuna} alt="" />
            <img className="w-[160px] col-span-3" src={binance} alt="" />
            <img className="w-[160px] col-span-3" src={cboe} alt="" />
            <img className="w-[160px] col-span-3" src={jane} alt="" />
            <img className="w-[160px] col-span-3" src={okx} alt="" />
            <img className="w-[160px] col-span-3" src={optiver} alt="" />
            <img className="w-[160px] col-span-3" src={twosigma} alt="" />
            <img className="w-[160px] col-span-3" src={wintermute} alt="" />
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default BlockChainTrust;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
//   <Swiper
//   slidesPerView={3}
//   spaceBetween={30}
//   className="mySwiper"
// >
//   <SwiperSlide>Slide 1</SwiperSlide>
// </Swiper>
