import Container from "../../components/shared/Container";
import hero from "../../assets/image/hero.png";
import { motion } from "framer-motion";
import { useState } from "react";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  // const date = new Date().getFullYear()
  // const date = new Date().getFullYear()
  // const date = new getMonth()
  // console.log(date);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full  md:px-5 px-3 bg-[#ffffffa7] md:bg-[#fdfdfd00]"
    >
      <Container>
        <div className="lg:pt-24 pt-12 ">
          <h1 className="lg:text-[64px] md:text-[52px] text-[32px] text-[#323232] font-bold lg:leading-[76px] text-center">
            BIZ Token an Ecosystem <br /> that Scaling Decentralized <br />{" "}
            Applications
          </h1>
        </div>
        <div className="grid grid-cols-12 relative md:pb-[410px] pb-5">
          <div className="col-span-12 lg:col-span-7">
            <p className="lg:max-w-[68ch] mt-[28px] mb-[50px] text-center">
              BIZ Token is a Blockchain based, Decentralized system
              infrastructure that enable the development, hosting, and execution
              of commercial-scale decentralized applications (dApps) on its
              platform.
            </p>
            <div className="flex gap-5 md:justify-start justify-center items-center">
              <motion.button
                className={`${
                  hover == true ? "border border-[#2F76DE] text-[#3E3E3E]" : "bg-[#2F76DE] text-[#fff]"
                }  py-3 px-8  rounded-lg lg:flex md:flex  border border-red`}
                initial={{ scale: 1 }}
                whileHover={{
                  backgroundColor: "#2F76DE",
                  duration: 0.5,
                  scale: 1.04,
                }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
              >
                create wallet
              </motion.button>
              <motion.button
                className="text-[#3E3E3E] py-3 px-8 rounded-lg lg:flex md:flex border border-[#2F76DE]"
                initial={{ scale: 1 }}
                whileHover={{
                  backgroundColor: "#2F76DE",
                  color: "#fff",
                  duration: 0.5,
                  scale: 1.04,
                }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Add Biz Network
              </motion.button>
            </div>
          </div>
          <div className="col-span-5 absolute right-0 lg:bottom-[190px] lg:top-0 -top-44 -z-10">
            <img className="w-full" src={hero} alt="" />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default HeroSection;
