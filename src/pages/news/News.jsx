import Container from "../../components/shared/Container";
import { useLoaderData } from "react-router-dom";
import timelogo from "../../assets/icon/time.svg";
import { useQuery } from "@tanstack/react-query";
import facebook from "../../assets/icon/pagesicon/facebook.svg";
import twitter from "../../assets/icon/pagesicon/twitter.svg";
import instagram from "../../assets/icon/pagesicon/instagram.svg";
import reddit from "../../assets/icon/pagesicon/reddit.svg";
import linkedin from "../../assets/icon/pagesicon/linkedin.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// Swiper.use([Navigation]);

const News = () => {
  const loaderData = useLoaderData();
  const { img, title, news } = loaderData;
  const { data, isPending, error } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json()),
  });
  if (isPending) {
    return (
      <p className="flex justify-center text-blue-500 text-2xl">
        Loading.........
      </p>
    );
  }

  return (
    <Container>
      <div className="grid grid-cols-12 mt-5 gap-5 mb-10">
        <div className="lg:col-span-9 col-span-12 px-3">
          <img
            className="md:h-[500px] h-[300px] object-cover w-full rounded-3xl"
            src={img}
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
          <h3 className="font-semibold text-4 text-3xl my-3">{title}</h3>
          <p>{news}</p>
          <div className="flex justify-end items-center gap-8 my-[66px]">
            <h3 className="text-[32px] text-[#494949] font-bold">Share</h3>
            <img src={facebook} alt="" className="size-[50px" />
            <img src={twitter} alt="" className="size-[50px" />
            <img src={instagram} alt="" className="size-[50px" />
            <img src={reddit} alt="" className="size-[50px" />
            <img src={linkedin} alt="" className="size-[50px" />
          </div>
          <div className="mt-[84px] mb-[100px]">
            <form>
              <div className="w-full space-y-3">
                <input
                  type="text"
                  className="w-full px-[34px] py-[20px] rounded border border-slate-300  focus:outline focus:outline-slate-400"
                  placeholder="Name"
                />
                <textarea
                  name=""
                  id=""
                  rows=""
                  className="w-full h-[155px] px-[34px] py-[20px] rounded border border-slate-300  focus:outline focus:outline-slate-400"
                  placeholder="Enter Your Text"
                ></textarea>
                <button className="px-[41px] py-[16px] rounded-lg bg-[#2F77E0] text-[20px] font-medium text-[#FFFFFF]">
                  Comment
                </button>
              </div>
            </form>
          </div>

          {/* <SwiperSlide className="w-full">Slide 2</SwiperSlide> */}

          {/* <div className="grid grid-cols-12 gap-3">
            </div> */}
          <div className="relative">
           <h3 className="absolute z-[999] top-5 text-[48px] font-bold leading-8">Related blog</h3>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
            >
              {data?.map((data) => (
                <SwiperSlide key={data._id} className="col-span-3 mr-">
                  <img
                    className="h-[190px] w-[90%] object-cover"
                    src={data.img}
                    alt=""
                  />
                  <p>{data.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default News;
