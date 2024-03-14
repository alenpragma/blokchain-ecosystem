import Container from "../../components/shared/Container";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const LatestBlogSection = () => {

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

  return (
    <div className="w-full bg-[#fff] pt-10 pb-20 lg:px-0 px-3">
      <Container>
        <div>
          <div className="pb-14 text-center">
            <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px] mb-4">
              Our Latest Blog
            </h2>
            <p className="text-style2">
              We work to develop attractive featuers for furure facilities of
              BIZ Community
            </p>
          </div>
          <div className="grid grid-cols-12 gap-5">
            {data?.slice(0, 1).map((data) => (
              <div
                key={data._id}
                className="h-[480px] rounded-3xl md:col-span-4 col-span-12 flex flex-col"
              >
                <div className="flex-1 m-0 w-full h-full">
                  <img
                    className="w-full h-full rounded-t-3xl duration-300"
                    src={data.img}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-[#D5D5D5] flex flex-col justify-end pb-[30px] rounded-b-3xl">
                  <div className="px-[19px]">
                    <h3 className="text-[18px] font-semibold">{data.title}</h3>
                    <button className=" text-[18px] flex items-center gap-3 font-semibold my-5 text-blue-900 hover:text-blue-500 duration-300">
                      <Link to={`news/${data._id}`} className="">
                        Read More
                      </Link>{" "}
                      <FaArrowRightLong />
                    </button>
                  </div>
                  <div className="border border-black"></div>
                  <div className="flex gap-5 items-center px-[19px] mt-5 text-[#242424]">
                    <FaCalendarAlt />
                    <p>20 January 2024</p>
                  </div>
                </div>
              </div>
            ))}
            {data?.slice(1, 2).map((data) => (
              <div
                key={data._id}
                className="h-[480px] relative rounded-3xl md:col-span-4 col-span-12 overflow-hidden"
              >
                {" "}
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${data.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-full flex flex-col py-[30px] justify-end  bg-gradient-to-t from-[#3e3e3e] via-[#3e3e3e65] to-[#fff0] rounded-3xl">
                    <div className="px-[19px]">
                      <h3 className="text-[18px] text-[#fff] font-semibold mb-5 hover:text-slate-300 cursor-pointer ">
                        <Link to={`news/${data._id}`}>{data.title}</Link>
                      </h3>
                    </div>
                    <div className="border border-[#fff]"></div>
                    <div className="flex gap-5 items-center px-[19px] mt-5 text-[#fff]">
                      <FaCalendarAlt />
                      <p>20 January 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {data?.slice(2, 3).map((data) => (
              <div
                key={data._id}
                className="p-10 h-[480px] relative rounded-3xl md:col-span-4 col-span-12"
                style={{
                  backgroundImage: `url(${data.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-full flex flex-col py-[30px] justify-end  bg-gradient-to-t from-[#3e3e3e] via-[#3e3e3e65] to-[#fff0] rounded-3xl">
                  <div className="px-[19px]">
                    <h3 className="text-[18px] text-[#fff] font-semibold mb-5 hover:text-slate-300 cursor-pointer ">
                      <Link to={`news/${data._id}`}>{data.title}</Link>
                    </h3>
                  </div>
                  <div className="border border-[#fff]"></div>
                  <div className="flex gap-5 items-center px-[19px] mt-5 text-[#fff]">
                    <FaCalendarAlt />
                    <p>20 January 2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestBlogSection;
