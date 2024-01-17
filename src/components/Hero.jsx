import Container from "./shared/Container";
import image from "../assets/image/cryptocall.png"

const Hero = () => {
  return (
    <div className="w-full py-10 bg-[#F3FAFFF5]">
      <Container>
        <div className="w-full px-20 pb-72 text-center relative">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-[64px] text-[#323232] font-bold text-center">
              BIZ Token an Ecosystem that <br /> Scaling Decentralized <br />{" "}
              Applications
            </h1>
            <p>
              BIZ Token is a Blockchain based, Decentralized system
              infrastructure that enable the <br /> development, hosting, and
              execution of commercial-scale decentralized <br /> applications
              (dApps) on its platform.
            </p>
            <div className="flex gap-5 ">
              <button className="text-[#303030] py-3 px-8 bg-[#2F76DE] text-white rounded-lg lg:flex md:flex hidden border border-red">
                create wallet
              </button>
              <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg lg:flex md:flex hidden border border-red">
                create wallet
              </button>
            </div>
            <div className="absolute -bottom-[50%]">
                <img className="w-[900px]" src={image} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
