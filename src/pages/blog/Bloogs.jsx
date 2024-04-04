import { useQuery } from "@tanstack/react-query";
import Container from "../../components/shared/Container";
import { Link } from "react-router-dom";

const Bloogs = () => {
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
    <div className="w-full py-10 mt-14 mx-3">
      <Container>
        <div className="flex justify-center mb-5">
          <h3 className="text-4xl font-semibold text-center border-b-2 border-b-slate-400 w-fit pb-2">
            Blog
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-3">
          {data.map((data, i) => (
            <Link
              to={`/news/${data?._id}`}
              key={i}
              className="md:col-span-3 col-span-6 duration-300"
            >
              <div className="  border border-blue-800">
                <div>
                  <img
                    className="w-full h-[200px] object-cover border-b-4 border-blue-800"
                    src="https://i.ibb.co/wR9DdRZ/hand.png"
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-[18px] font-bold ">
                    What is blockchain Ecosystem?
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.content
                        ? data.content
                            .replace(/(<([^>]+)>)/gi, "")
                            .split(" ")
                            .slice(0, 10)
                            .join(" ")
                        : "",
                    }}
                  ></div>
                  <button className="px-4 py-2 bg-blue-800 rounded text-white mt-3">
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
};

export default Bloogs;
