import Container from "./shared/Container";

import email from "../assets/icon/email.svg";
import facebook from "../assets/icon/facebook.svg";
import twitter from "../assets/icon/twitter.svg";
import linkedin from "../assets/icon/linkedin.svg";
import youtube from "../assets/icon/youtube.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full bg-[#F3F3F3] px-5 py-20">
      <Container>
        <div className="grid grid-cols-12 gap-5">
          <div className="bg-[#F3FAFF] rounded-md lg:col-span-6 col-span-12 flex flex-col justify-center items-center py-6 lg:px-24 px-5">
            <img className="size-24" src={email} alt="" />
            <div className="my-6 text-center">
              <h3 className="text-[28px] text-[#242424] font-semibold">
                Subscribe To Our Newslatter
              </h3>
              <p className="text-style3 my-3">
                Enter Your E-mail To Recive Your Daily Update
              </p>
            </div>
            <form className="w-full">
              <div className="flex gap-5 items-center">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-[#2F76DE] outline-none ring-1 ring-[#2F76DE] transition-all rounded-2xl"
                />
                <button className="bg-[#2F76DE] rounded-2xl px-5 py-3 ">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="bg-[#F3FAFF] rounded-md col-span-12 lg:col-span-6 flex flex-col justify-center items-center py-6 lg:px-24 px-5">
            <h3 className="text-[28px] text-[#242424] font-semibold">
              Join Our Social Media
            </h3>
            <div className="flex gap-5 mt-8">
              <Link to="/" className="p-3 bg-[#D6E7FF] rounded-full">
                <img className="size-10" src={facebook} alt="" />
              </Link>
              <Link to="/" className="p-3 bg-[#D6E7FF] rounded-full">
                <img className="size-10" src={twitter} alt="" />
              </Link>
              <Link to="/" className="p-3 bg-[#D6E7FF] rounded-full">
                <img className="size-10" src={linkedin} alt="" />
              </Link>
              <Link to="/" className="p-3 bg-[#D6E7FF] rounded-full">
                <img className="size-10" src={youtube} alt="" />
              </Link>
              <Link to="/" className="p-3 bg-[#D6E7FF] rounded-full">
                <img className="size-10" src={facebook} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
