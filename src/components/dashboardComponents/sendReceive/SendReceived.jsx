import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SendReceived = () => {
  const [show, setShow] = useState("1");
  return (
    <div className="max-w-[654px] mx-auto p-3 mt-12 mb-10 bg-[#E7F5FF] rounded-xl">
      <div>
        <ul className="flex gap-2 items-center bg-[#fff] w-fit px-1 py-1 rounded-full">
          <li
            onClick={() => setShow("1")}
            className={`cursor-pointer px-[26px] py-[11px] rounded-full font-semibole text-[16px] ${
              show == 1 ? "bg-[#3077DF] text-[#fff]" : ""
            }`}
          >
            Send
          </li>
          <li
            onClick={() => setShow("2")}
            className={`cursor-pointer px-[26px] py-[11px] rounded-full font-semibole text-[16px] ${
              show == 2 ? "bg-[#3077DF] text-[#fff]" : ""
            }`}
          >
            Receive
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center mt-[76px]">
        <div className=" md:w-[563px] w-full space-y-2">
          <label
            htmlFor="wallet"
            className="text-[18px] text-[#343434] font-semibold"
          >
            Send from
          </label>
          <div className="relative">
            <select className="block appearance-none bg-white border border-[#2F76DE] px-4 py-4 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline rounded-md w-full text-[18px] font-semibold">
              <option hidden className="text-red-400">
                User Wallet Address
              </option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
              <IoIosArrowDown className="fill-current size-6 text-[#343434]" />
            </div>
          </div>
        </div>
        <div className=" md:w-[563px] w-full space-y-2">
          <label
            htmlFor="wallet"
            className="text-[18px] text-[#343434] font-semibold"
          >
            Send to
          </label>
          <div className="relative">
            <select className="block appearance-none bg-white border border-[#2F76DE] px-4 py-4 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline rounded-md w-full text-[18px] font-semibold">
              <option hidden className="text-red-400">
                User Wallet Address
              </option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
              <IoIosArrowDown className="fill-current size-6 text-[#343434]" />
            </div>
          </div>
        </div>
        <div className=" md:w-[563px] w-full space-y-2">
          <label
            htmlFor="wallet"
            className="text-[18px] text-[#343434] font-semibold"
          >
            Assets
          </label>
          <div className="relative">
            <select className="block appearance-none bg-white border border-[#2F76DE] px-4 py-4 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline rounded-md w-full text-[18px] font-semibold">
              <option hidden className="text-red-400">
                User Wallet Address
              </option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
              <IoIosArrowDown className="fill-current size-6 text-[#343434]" />
            </div>
          </div>
        </div>
        <div className=" md:w-[563px] w-full space-y-2">
          <label
            htmlFor="wallet"
            className="text-[18px] text-[#343434] font-semibold"
          >
            Amount
          </label>
          <div className="relative">
            <input
              type="text"
              className="block appearance-none bg-white border border-[#2F76DE] px-4 py-4 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline rounded-md w-full text-[18px] font-semibold"
              placeholder="00"
            />
          </div>
        </div>
        <div className=" md:w-[563px] w-full">
          <button
            type="submit"
            className="w-full text-[18px] font-bold text-[#fff] py-3 rounded-xl bg-[#2F76DE] mt-3"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendReceived;
