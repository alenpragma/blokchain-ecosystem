import React, { useRef } from "react";
import Container from "../../components/shared/Container";
import akuna from "../../assets/icon/share/akuna.svg";
import binance from "../../assets/icon/share/binance.svg";
import cboe from "../../assets/icon/share/cboe.svg";
import jane from "../../assets/icon/share/jane.svg";
import okx from "../../assets/icon/share/okx.svg";
import optiver from "../../assets/icon/share/optiver.svg";
import twosigma from "../../assets/icon/share/twosigma.svg";
import wintermute from "../../assets/icon/share/wintermute.svg";
import { motion, useScroll, useTransform } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BlockChainTrustSection = () => {
  const componentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1 8.5"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const xValue = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <motion.div
      style={{ scale: scaleValue }}
      className="w-full bg-[#F3F3F3] px-5 md:py-24 py-12"
    >
      <Container>
        <motion.div>
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
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default BlockChainTrustSection;
