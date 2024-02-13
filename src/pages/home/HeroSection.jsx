import Container from "../../components/shared/Container";
import hero from "../../assets/image/hero.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-[#e9f0f5] md:px-0 px-5"
    >
      <Container>
        <div className="lg:pt-24 pt-12">
          <h1 className="lg:text-[64px] md:text-[52px] text-[32px] text-[#323232] font-bold lg:leading-[76px]">
            BIZ Token an Ecosystem <br /> that Scaling Decentralized <br />{" "}
            Applications
          </h1>
        </div>
        <div className="grid grid-cols-12 relative pb-[410px]">
          <div className="col-span-12 lg:col-span-7">
            <p className="lg:max-w-[68ch] mt-[28px] mb-[50px]">
              BIZ Token is a Blockchain based, Decentralized system
              infrastructure that enable the development, hosting, and execution
              of commercial-scale decentralized applications (dApps) on its
              platform.
            </p>
            <div className="flex gap-5 ">
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
          <div className="col-span-5 absolute right-0 lg:bottom-[190px] bottom-5">
            <img className="w-full" src={hero} alt="" />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default HeroSection;
