import Container from "./shared/Container";
import featureImage from "../assets/image/feature.png";
import email from "../assets/icon/email.png";
import template from "../assets/icon/template.png";
import analysis from "../assets/icon/analysis.png";

const Features = () => {
  return (
    <div className="w-full bg-[#FFF] my-20 px-5">
      <Container>
        <div className="lg:flex md:flex justify-center items-center gap-20">
          <div className="flex-1 flex flex-col justify-between gap-10">
            <div className="3">
              <h2 className="text-[#242424] font-bold lg:text-[48px] md:text-[32px] text-[28px]">
                Features Designed to Maximize Your Outreach
              </h2>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="flex justify-start items-start gap-5">
                <img className="w-[45px] h-[45px]" src={email} alt="" />
                <div>
                  <h4>Automated Email Campaigns</h4>
                  <p>Save time with our auto-scheduler.</p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-5">
                <img className="w-[45px] h-[45px]" src={template} alt="" />
                <div>
                  <h4>Customizable Templates</h4>
                  <p>Tailor your messages for maximum impact.</p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-5">
                <img className="w-[45px] h-[45px]" src={analysis} alt="" />
                <div>
                  <h4>Detailed Analytics</h4>
                  <p>Track your campaign's success in real-time.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:mt-0 md:mt-0 mt-5">
            <div className="lg:w-[576px] lg:h-[460px] w-full h-full">
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

export default Features;
