import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const AboutFooter = () => {
  return (
    <div className="w-full bg-[#3F3F3F] py-[125px]">
      <div className="max-w-[537px] mx-auto flex flex-col justify-center items-center">
        <h3 className="text-[#FFFFFF] text-center text-[28px] font-semibold">
          Join Out Social media
        </h3>
        <div className="flex items-center gap-10 mt-10">
          <div>
            <div className="bg-[#D6E7FF] p-2 rounded-full w-fit">
              <FaFacebook className="text-5xl text-[#2F76DE]" />
            </div>
            <h3 className="text-[16px] mt-[15px] text-[#FFFFFF]">Facebook</h3>
          </div>
          <div>
            <div className="bg-[#D6E7FF] p-2 rounded-full w-fit">
              <FaTwitter className="text-5xl text-[#2F76DE]" />
            </div>
            <h3 className="text-[16px] mt-[15px] text-[#FFFFFF]">Facebook</h3>
          </div>
          <div>
            <div className="bg-[#D6E7FF] p-2 rounded-full w-fit">
              <FaLinkedin className="text-5xl text-[#2F76DE]" />
            </div>
            <h3 className="text-[16px] mt-[15px] text-[#FFFFFF]">Facebook</h3>
          </div>
          <div>
            <div className="bg-[#D6E7FF] p-2 rounded-full w-fit">
              <FaYoutube className="text-5xl text-[#2F76DE]" />
            </div>
            <h3 className="text-[16px] mt-[15px] text-[#FFFFFF]">Facebook</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFooter;
