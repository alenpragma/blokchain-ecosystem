import Container from "../../components/shared/Container";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

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
    <div className="w-full bg-[#fff] pt-10 pb-32 lg:px-0 px-3">
      <Container>
        <div className="pb-14 text-center">
          <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px] mb-4">
            Our Latest Blog
          </h2>
          <p className="text-style2">
            We work to develop attractive featuers for furure facilities of BIZ
            Community
          </p>
        </div>
        <div className="grid grid-cols-12 gap-3">
          {data?.map((item) => (
            <div key={item._id} className="col-span-4 h-[354px] relative">
              <Link to={`news/${item?._id}`}>
                <img className="w-full h-full rounded-lg" src={item.img} alt="" />
                <div className="p-[33px] w-[374px] absolute bg-[#FFFFFF] right-0 left-0 mx-auto -bottom-[25%] rounded-lg shadow-lg">
                  <h3 className="text-[20px] font-medium">
                    Basic Rules Of Thumb In Retro Fashion.
                  </h3>
                  <p className="text-[16px] text-[#6A6A6A]">20 January 2024</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LatestBlogSection;
