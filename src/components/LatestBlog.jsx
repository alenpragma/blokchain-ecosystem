import Container from "./shared/Container";
import bitcoin from "../assets/image/bitcoin.png";
import hand from "../assets/image/hand.png";
import cardano from "../assets/image/cardano.png";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const LatestBlog = () => {
  return (
    <div className="w-full bg-[#fff] pt-10 pb-20 lg:px-0 px-5">
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
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div
              className="p-10 h-[480px] relative rounded-3xl"
              style={{
                backgroundImage: `url(${bitcoin})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-full flex flex-col py-[30px] justify-end  bg-gradient-to-t from-[#3e3e3e] via-[#3e3e3e65] to-[#fff0] rounded-3xl">
                <div className="px-[19px]">
                  <h3 className="text-[18px] text-[#fff] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                  <button className="my-5 text-[18px] text-[#fff] flex items-center gap-3 font-semibold">
                    <span>Read More</span> <FaArrowRightLong />
                  </button>
                </div>
                <hr />
                <div className="flex gap-5 items-center px-[19px] mt-5 text-[#fff]">
                  <FaCalendarAlt />
                  <p>20 January 2024</p>
                </div>
              </div>
            </div>
            <div
              className="p-10 h-[480px] relative rounded-3xl"
              style={{
                backgroundImage: `url(${hand})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-full flex flex-col py-[30px] justify-end  bg-gradient-to-t from-[#3e3e3e] via-[#3e3e3e65] to-[#fff0] rounded-3xl">
                <div className="px-[19px]">
                  <h3 className="text-[18px] text-[#fff] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                  <button className="my-5 text-[18px] text-[#fff] flex items-center gap-3 font-semibold">
                    <span>Read More</span> <FaArrowRightLong />
                  </button>
                </div>
                <hr />
                <div className="flex gap-5 items-center px-[19px] mt-5 text-[#fff]">
                  <FaCalendarAlt />
                  <p>20 January 2024</p>
                </div>
              </div>
            </div>
            <div
              className="p-10 h-[480px] relative rounded-3xl"
              style={{
                backgroundImage: `url(${cardano})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-full flex flex-col py-[30px] justify-end  bg-gradient-to-t from-[#3e3e3e] via-[#3e3e3e65] to-[#fff0] rounded-3xl">
                <div className="px-[19px]">
                  <h3 className="text-[18px] text-[#fff] font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h3>
                  <button className="my-5 text-[18px] text-[#fff] flex items-center gap-3 font-semibold">
                    <span>Read More</span> <FaArrowRightLong />
                  </button>
                </div>
                <hr />
                <div className="flex gap-5 items-center px-[19px] mt-5 text-[#fff]">
                  <FaCalendarAlt />
                  <p>20 January 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestBlog;
