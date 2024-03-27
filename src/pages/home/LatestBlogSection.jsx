import Container from "../../components/shared/Container";
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
    <div className="w-full bg-[#fff] pt-10 pb-28 md:px-5 px-3">
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
          {data?.slice(0, 3).map((item) => (
            <div key={item._id} className="md:col-span-4 col-span-12 h-[411px] relative md:mt-0 mt-10">
              <Link to={`news/${item?._id}`}>
                <img
                  className="w-full h-[354px] rounded-lg"
                  src={item.img}
                  alt=""
                />
                <div className="p-[33px] w-[90%] absolute bg-[#FFFFFF] right-0 left-0 mx-auto -bottom-5 rounded-lg shadow-lg">
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
