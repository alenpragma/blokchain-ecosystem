import Container from "../../components/shared/Container";
import { Link, useLoaderData } from "react-router-dom";
import timelogo from "../../assets/icon/time.svg";
import { useQuery } from "@tanstack/react-query";
import facebook from "../../assets/icon/pagesicon/facebook.svg";
import twitter from "../../assets/icon/pagesicon/twitter.svg";
import instagram from "../../assets/icon/pagesicon/instagram.svg";
import reddit from "../../assets/icon/pagesicon/reddit.svg";
import linkedin from "../../assets/icon/pagesicon/linkedin.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect } from "react";

// Swiper.use([Navigation]);

const News = () => {
  const loaderData = useLoaderData();
  const { imageUrl, content, title } = loaderData;
  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);
  const { data, isPending, error } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/news"
      ).then((res) => res.json()),
  });
  if (isPending) {
    return (
      <p className="flex justify-center text-blue-500 text-2xl">
        Loading.........
      </p>
    );
  }
  const scroll = () => {
    window.scrollTo({
      top: 0,
      button: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <div className="grid grid-cols-12 gap-5 mb-10 mt-24">
        <div className="lg:col-span-9 col-span-12 px-3">
          <img
            className="md:h-[500px] h-[300px] object-cover w-full rounded-3xl"
            src={imageUrl}
            alt=""
          />
          <p className="flex items-center gap-5 mt-10 mb-[60px]">
            <img className="size-[30px]" src={timelogo} alt="" />
            <span className="text-[20px] text-[#787878]">
              15 January 2024
            </span>{" "}
            <span className="font-medium text-[20px] text-[#787878] ml-3">
              2.18 PM
            </span>{" "}
          </p>
            <h3 className="font-bold text-[48px] text-[#242424] mb-3">{title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></div>

          <div className="flex justify-end items-center md:gap-8 gap-3 md:my-[66px] my-[30px]">
            <h3 className="md:text-[32px] text-[20px] text-[#494949] font-bold">
              Share
            </h3>
            <img
              src={facebook}
              alt=""
              className="md:size-[50px] size-[24px] cursor-pointer"
            />
            <img
              src={twitter}
              alt=""
              className="md:size-[50px] size-[24px] cursor-pointer"
            />
            <img
              src={instagram}
              alt=""
              className="md:size-[50px] size-[24px] cursor-pointer"
            />
            <img
              src={reddit}
              alt=""
              className="md:size-[50px] size-[24px] cursor-pointer"
            />
            <img
              src={linkedin}
              alt=""
              className="md:size-[50px] size-[24px] cursor-pointer"
            />
          </div>
          <div className="md:mt-[84px] mt-[50px] mb-[100px]">
            <form>
              <div className="w-full space-y-3">
                <input
                  type="text"
                  className="w-full md:px-[34px] px-[5px] md:py-[20px] py-[10px] rounded border border-slate-300  focus:outline focus:outline-slate-400"
                  placeholder="Name"
                />
                <textarea
                  name=""
                  id=""
                  rows=""
                  className="w-full h-[155px] md:px-[34px] px-[5px] md:py-[20px] py-[10px] rounded border border-slate-300  focus:outline focus:outline-slate-400"
                  placeholder="Enter Your Text"
                ></textarea>
                <button className="md:px-[41px] px-[20px] md:py-[16px] py-[8px] rounded-lg bg-[#2F77E0] text-[20px] font-medium text-[#FFFFFF]">
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative col-span-12">
          <h3 className="absolute z-[999] top-[16px] left-3 md:text-[48px] text-[32px] font-bold leading-8">
            Related blog
          </h3>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
            }}
          >
            {data?.map((data) => (
              <SwiperSlide key={data._id} className="w-full ml-3">
                <img
                  className="h-[190px] w-full object-cover"
                  src={data.imageUrl}
                  alt=""
                />
                <Link to={`/news/${data?._id}`} onClick={scroll}>
                  <p className="mt-4 hover:text-blue-600 duration-300">
                    {data.title}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default News;
