import Lottie from "react-lottie-player";
import { Link, useLocation, useParams } from "react-router-dom";
import lottieJson from "../../json/loading.json";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Container from "../../components/shared/Container";

function Category() {
  let { category } = useParams();
  const location = useLocation();
  const pathname = location.pathname;
  const { data, isPending } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://biz-server-git-main-remontripuras-projects.vercel.app/news"
      ).then((res) => res.json()),
  });
  if (isPending) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 300, height: 300 }}
        />
      </div>
    );
  }

  const datagroup = data.filter((item) => item.category == category);

  category = decodeURIComponent(category);

  return (
    <div className="bg-[#e3f3ff] md:pb-[80px] md:pt-[150px] pt-[100px] pb-5 ">
      <Helmet>
        <title>Biz - Token - Blog</title>
      </Helmet>
      <Container>
        <div className="text-center md:mb-[80px] mb-10">
          <h3 className="md:text-[64px] text-[44px] font-bold text-[#323232]">
            Category
          </h3>
          <p>
            <span className="font-semibole text-[18px] font-bold">Home</span>
            {pathname.replace(/%20/g, "-")}
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5 md:mx-0 mx-2">
          {datagroup?.map((dataItem, i) => (
            <Link
              to={`/news/${dataItem._id}`}
              key={i}
              className="md:col-span-4 col-span-6 duration-300"
            >
              <div className="h-full  border border-blue-800 relative">
                <div>
                  <img
                    className="w-full h-[300px] object-cover border-b-4 border-blue-800"
                    src={dataItem.imageUrl}
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-[18px] font-bold ">
                    {dataItem.title.slice(0, 30) + "..."}
                  </h3>
                  <div
                    className="mb-12"
                    dangerouslySetInnerHTML={{
                      __html: dataItem?.content
                        ? dataItem.content
                            .replace(/(<([^>]+)>)/gi, "")
                            .split(" ")
                            .slice(0, 20)
                            .join(" ")
                        : "",
                    }}
                  ></div>
                  <button className="px-4 py-2 bg-blue-800 rounded text-white mt-3 absolute bottom-2">
                    Read More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Category;
