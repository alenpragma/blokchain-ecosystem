import BlockChainTrustSection from "./BlockChainTrustSection";
import HeroSection from "./HeroSection";
import FreedomSection from "./FreedomSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import FacilitiesSection from "./FacilitiesSection";
import BuildBizSection from "./BuildBizSection";
import LatestBlogSection from "./LatestBlogSection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300">
      <HeroSection />
      <BlockChainTrustSection />
      <FreedomSection />
      {/* <InvolvedSection /> */}
      <WhyChooseUsSection />
      <FacilitiesSection />
      <BuildBizSection />
      <LatestBlogSection />
      <ContactSection />
    </div>
  );
};

export default Home;
