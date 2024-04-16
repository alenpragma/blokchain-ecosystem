import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "../../components/shared/Container";
import { Link } from "react-router-dom";
import Lottie from "react-lottie-player";
import lottieJson from "../../json/loading.json";

const Bloogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const { data, isPending, error } = useQuery({
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="w-full py-10 mt-14">
      <Container>
        <div className="flex justify-center mb-5">
          <h3 className="text-4xl font-semibold text-center border-b-2 border-b-slate-400 w-fit pb-2">
            Blog
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-5 md:mx-0 mx-2">
          {currentItems?.map((dataItem, i) => (
            <Link
              to={`/news/${dataItem._id}`}
              key={i}
              className="md:col-span-4 col-span-6 duration-300"
            >
              <div className="h-full  border border-blue-800 relative">
                <div>
                  <img
                    className="w-full h-[300px] object-cover border-b-4 border-blue-800"
                    src="https://i.ibb.co/wR9DdRZ/hand.png"
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
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            className="mx-1 px-3 py-1 bg-gray-200"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(
            (pageNumber) => (
              <button
                key={pageNumber}
                className="mx-1 px-3 py-1 bg-gray-200"
                onClick={() => paginate(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            )
          )}
          <button
            className="mx-1 px-3 py-1 bg-gray-200"
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Bloogs;
