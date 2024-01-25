import Container from "./shared/Container";
import efficacy from "../assets/icon/efficacy.svg";
import rightArrow from "../assets/icon/arrow-up-right.svg";

const FreedomData = [
  {
    title: "Increase Efficiency",
    description: "Cut down on manual tasks and focus on what matters.",
  },
  {
    title: "Increase Efficiency",
    description: "Cut down on manual tasks and focus on what matters.",
  },
  {
    title: "Increase Efficiency",
    description: "Cut down on manual tasks and focus on what matters.",
  },
];

const Freedom = () => {
  return (
    <div className="w-full bg-[#F3FAFF] pt-10 pb-20 lg:px-0 px-5">
      <Container>
        <div className="w-full">
          <div className="pt-[80px] pb-10">
            <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px]">
              Unlocking freedom with
              <br /> Decentralized Finance
            </h2>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {FreedomData.map((data, i) => (
              <div
                key={i}
                className="flex justify-start bg-[#FFFFFF] p-7 gap-3 rounded-md"
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                }}
              >
                <div className=" flex-[1]">
                  <div className="w-[40px] h-[40px] bg-[#DBF0FF] p-2 rounded-full mt-1">
                    <img className="" src={efficacy} alt="" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 flex-[8]">
                  <h4>{data.title}</h4>
                  <p className="text-style1">{data.description}</p>
                  <div className="size-10 bg-[#2F76DE] p-3 rounded-full">
                    <img className="w-full" src={rightArrow} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Freedom;
