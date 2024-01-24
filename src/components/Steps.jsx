import Container from "./shared/Container";
import featureImage from "../assets/image/steps.png";

const Steps = () => {
  return (
    <div className="w-full bg-[#F3FAFF] my-20 px-5 py-20">
      <Container>
        <div className="lg:flex md:flex justify-center items-center gap-20">
          <div className="flex-1 flex flex-col justify-between gap-10">
            <div className="3">
              <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px]">
                Features Designed to Maximize Your Outreach
              </h2>
            </div>
            <div className="my-6 relative">
              <div className="border-l-2 border-dotted border-black absolute left-5 z-10 h-full"></div>
              <div className="flex flex-col justify-between gap-6">
                <div className="flex justify-start items-start gap-5 z-20 mt-5">
                  <div className="size-8 bg-[#2F77E0] rounded-full flex justify-center items-center p-5">
                    <span className="text-3xl text-[#fff] rounded-full">1</span>
                  </div>
                  <div>
                    <h4>Increase Efficiency</h4>
                    <p>Select your template and target audience.</p>
                  </div>
                </div>
                <div className="flex justify-start items-start gap-5 z-20">
                  <div className="size-8 bg-[#A1C2F1] rounded-full flex justify-center items-center p-5">
                    <span className="text-3xl text-[#fff] rounded-full">2</span>
                  </div>
                  <div>
                    <h4>Customize & Launch</h4>
                    <p>Personalize your message and hit send.</p>
                  </div>
                </div>
                <div className="flex justify-start items-start gap-5 z-20">
                  <div className="size-8 bg-[#A1C2F1] rounded-full flex justify-center items-center p-5">
                    <span className="text-3xl text-[#fff] rounded-full">3</span>
                  </div>
                  <div>
                    <h4>Analyze & Optimize</h4>
                    <p>Review campaign performance and adjust as needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:mt-0 md:mt-0 mt-5">
            <div className="lg:w-[576px] w-full h-full">
              <img
                className="w-full h-full rounded"
                src={featureImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Steps;
