import React from "react";
import Container from "./shared/Container";
import tick from "../assets/icon/tick.svg"

const pricing = [
  {
    title: "Personal",
    description: "Personalize your message and hit send.",
    price: 49,
    detail: {
      support: "6 Month Support",
      usedge: "Life Time Usages",
      service: "24/7 Customer Support",
    },
  },
  {
    title: "Business",
    description: "Personalize your message and hit send.",
    price: 49,
    detail: {
      support: "6 Month Support",
      usedge: "Life Time Usages",
      service: "24/7 Customer Support",
    },
  },
];

const Pricing = () => {
  return (
    <div className="w-full bg-[#F3FAFF] px-5 py-20">
      <Container>
        <div className="w-full">
          <h2>
            Flexible Pricing for <br /> Every Need
          </h2>
          <div className="grid grid-cols-2 gap-20 mt-8">
            <div className="px-20 py-16 bg-[#fff] flex flex-col justify-center items-center gap-7 rounded-md shadow-md">
              <h2>Personal</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <h3 className="text-[48px] text-[#444] font-bold">240/ <span className="text-[24px] font-medium">Month</span></h3>
              <button className="w-full py-5 bg-gradient-to-l from-[#a300b2] to-[#265fb3] text-[#fff] text-[20px] font-medium rounded-[10px]">
                Choose Your Plan
              </button>
              <ul className="w-full flex flex-col gap-5">
                <li className="flex justify-start items-center gap-5">
                    <img className="size-5" src={tick} alt="" />
                    <span>6 Month Support</span>
                </li>
                <li className="flex justify-start items-center gap-5">
                    <img className="size-5" src={tick} alt="" />
                    <span>6 Month Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
