import Container from "./shared/Container";
import rightArrow from "../assets/icon/arrow-small-right.svg";
import microsoft from "../assets/icon/microsoft_logo.svg";

const InvolvedName = [
  { title: "Join Our", point: "true" },
  { title: "Apply For", point: "false" },
  { title: "Join Our", point: "true" },
  { title: "Apply For", point: "false" },
];

const Involved = () => {
  return (
    <div className="w-full bg-[#F3F3F3] pt-10 pb-20 lg:px-0 px-5">
      <Container>
        <div className="w-full">
          <div className="pb-10 text-center">
            <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px]">
              Get involved
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            {InvolvedName.map((data, i) => (
              <div
                key={i}
                className="bg-[#fff] py-10 flex justify-center items-center gap-10 flex-col rounded-md"
                style={{
                  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                }}
              >
                <img src={microsoft} alt="" />
                <p className="text-[#434343] font-medium text-[20px]">
                  {data.title}
                  <span className="border-b-4 border-[#2F76DE] ml-1 px-1">
                    {data.point == "true" ? "Wallet" : "Grant"}
                  </span>
                </p>
                <div className="size-10 rounded-full border-2 border-[#2F76DE]">
                  <img className="w-full" src={rightArrow} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Involved;
