import { useState } from "react";
import Container from "../../components/shared/Container";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "What is JavaScript?",
    answer:
      "Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level",
  },
  {
    question: "What is JavaScript?",
    answer:
      "Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level",
  },
  {
    question: "What is JavaScript?",
    answer:
      "Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level",
  },
  {
    question: "What is JavaScript?",
    answer:
      "Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level",
  },
  {
    question: "What is JavaScript?",
    answer:
      "Welcome to the MDN beginner's JavaScript course! In this article we will look at JavaScript from a high level",
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [toggle, setToggle] = useState(null);
  console.log(isOpen);
  const handeFaq = (i) => {
    setIsOpen((prev) => (prev === i ? null : i));
    setToggle((prev) => (prev === i ? null : i));
  };
  return (
    <div className="bg-[#e3f3ff] md:py-[132px] py-10">
      <Container className="">
        <div className="text-center md:mb-[80px] mb-10">
          <h3 className="md:text-[64px] text-[44px] font-bold text-[#323232] uppercase">
            Free <span className="text-[#2f76de]">Biz</span> Faucet
          </h3>
          <p className="text-[#323232]">
            Get BIZ Testnet tokens every 24 hours for test deployment.
          </p>
        </div>
        <div className="bg-[#ffff] md:py-[137px] py-[50px] pl-[60px] pr-[28px] rounded-lg">
          <form>
            <div className="flex flex-col">
              <label
                htmlFor="waller-address"
                className="font-semibole text-[20px] mb-[18px]"
              >
                Wallet Address
              </label>
              <div className="flex md:flex-row flex-col gap-7">
                <input
                  className="w-full bg-[#F3F3F3] rounded-2xl border border-[#747474] outline-[#2f76de] md:px-[47px] px-5 md:py-[35px] py-[10px] md:text-[20px] text-[16px]"
                  type="text"
                  id=""
                  placeholder="Enter your BNB Smart Chain Testnet address"
                />
                <button className="px-[152px] md:py-[27px] py-3 bg-[#2f76de] rounded font-semibold md:text-[32px] text-[18px] text-white md:w-fit w-full">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="md:mt-[184px] mt-10">
          <h2 className="font-bold text[48px] text-center mb-[71px]">FAQ</h2>
          <div className="space-y-5 w-[90%] mx-auto">
            {faqData.map((data, i) => (
              <div key={i} className=" p-3 bg-[#fff] rounded">
                <div
                  className="flex items-center justify-between mr-5"
                  onClick={() => handeFaq(i)}
                >
                  <div className="flex gap-7 items-center">
                    <span className="text-[#2f76de] text-[48px] font-semibold">
                      0{i + 1}
                    </span>
                    <h3 className="cursor-pointer font-semibold text-[24px]">
                      {data.question}
                    </h3>
                  </div>
                  {toggle == i ? <FaMinus /> : <FaPlus />}
                </div>
                {isOpen == i && <p className="mt-10">{data.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
