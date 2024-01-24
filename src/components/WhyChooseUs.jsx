import Container from "./shared/Container";
import asset from "../assets/image/asset.jpg";
import community from "../assets/image/community.jpg";
import insigts from "../assets/image/insights.jpg";

const WhyChooseUsData = [
  {
    img: asset,
    heading: "Secured Asset",
    title:
      "Buy BIZ Token to Stake or Store in Decentralize Apps and It's gives you Asset Security.",
  },
  {
    img: community,
    heading: "Big Community",
    title:
      "We develop a Big Community to Increase Token Price and you can gain quickly with this Token.",
  },
  {
    img: insigts,
    heading: "HFT Insights",
    title:
      "BIZ Token is a High-Frequency Trading Industry that's allow you buy-sell and Trade Instantly.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-[#F3F3F3] py-20 px-5">
      <Container>
        <div className="w-full">
          <div className="py-10 lg:w-[50%] md:w-full w-full">
            <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px]">
              Why Choose BIZ Token?
            </h2>
            <p>
              BIZ Token develop under Binance Smart Chain that a Strong Network
              in the Crypto World and makes it Easily usable P2P System.
            </p>
          </div>
          <div className="grid lg:grid-col-3 md:grid-cols-3 grid-cols-1 gap-5">
            {WhyChooseUsData.map((data, i) => (
              <div
                key={i}
                className="bg-[#F3FAFF] rounded-2xl"
                style={{
                  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                }}
              >
                <img
                  className="w-full h-[400px] rounded-t-2xl"
                  src={data.img}
                  alt=""
                />
                <div className="mx-8 mt-6 flex flex-col gap-6">
                  <h3 className="text-[#000] text-[28px] font-medium">
                    {data.heading}
                  </h3>
                  <p>{data.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
