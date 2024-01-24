import Container from "./shared/Container";
import image from "../assets/image/cryptocall.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full lg:h-[1300px] bg-[#F3FAFFF5] flex flex-col px-5">
      <div className="bg-[#F3FAFFF5] flex-[4] h-full">
        <Container>
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="lg:text-[64px] md:text-[52px] text-[32px]  text-[#323232] font-bold text-center mt-20">
              BIZ Token an Ecosystem that <br /> Scaling Decentralized <br />{" "}
              Applications
            </h1>
            <p className="text-center">
              BIZ Token is a Blockchain based, Decentralized system
              infrastructure that enable the <br /> development, hosting, and
              execution of commercial-scale decentralized <br /> applications
              (dApps) on its platform.
            </p>
            <div className="flex justify-center gap-5 ">
              <motion.button
                className="text-[#fff] py-3 px-8 bg-[#2F76DE] rounded-lg lg:flex md:flex hidden border border-red"
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
                className="text-[#3E3E3E] py-3 px-8 rounded-lg lg:flex md:flex hidden border border-[#2F76DE]"
                initial={{ scale: 1 }}
                whileHover={{
                  backgroundColor: "#2F76DE",
                  color: "#fff",
                  duration: 0.5,
                  scale: 1.04,
                }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
              >
                create wallet
              </motion.button>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#fff] flex-[2] h-full">
        <div className="flex items-center justify-center relative">
          <img
            className="w-[900px] lg:absolute -top-[300px]"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
