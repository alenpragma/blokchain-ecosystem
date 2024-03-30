import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../components/shared/Container";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const LatestBlogSection = () => {
  const [active, setActive] = useState(0);
  const { data, isPending, error } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/news"
      ).then((res) => res.json()),
  });
  const reversedData = data && Array.isArray(data) ? [...data].reverse() : [];
  if (isPending) {
    return (
      <p className="flex justify-center text-blue-500 text-2xl">
        Loading.........
      </p>
    );
  }

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className="absolute bottom-2 z-10 right-[40%]" onClick={onClick}>
        {active ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#453F78"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#453F78"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#CC001E"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#CC001E"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        )}
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className="absolute bottom-2 z-10 left-[40%]" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#453F78"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#453F78"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
      </div>
    );
  };
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
    afterChange: (currentSlide) => {
      setActive(currentSlide);
    },
  };
  return (
    <div className="w-full">
      <Container className=" bg-[#FFFFFF]">
        <div className="pb-14 text-center">
          <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px] mb-4">
            Our Latest Blog
          </h2>
          <p className="text-style2">
            We work to develop attractive featuers for furure facilities of BIZ
            <br /> Community
          </p>
        </div>
        <Slider {...settings} className="pb-8">
          {reversedData.map((item) => (
            <div key={item._id} className={`h-[411px] relative md:mt-0 mt-10`}>
              <Link to={`news/${item?._id}`}>
                <img
                  className="w-full h-[354px] rounded-lg"
                  src={item.imageUrl}
                  alt=""
                />
                <div className="p-[33px] w-[90%] absolute bg-[#FFFFFF] right-0 left-0 mx-auto -bottom-10 rounded-lg shadow-lg">
                  <h3 className="text-[20px] font-medium">{item.title}</h3>
                  <p className="text-[16px] text-[#6A6A6A]">20 January 2024</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default LatestBlogSection;
