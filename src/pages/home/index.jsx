import BlockChainTrustSection from "./BlockChainTrustSection";
import HeroSection from "./HeroSection";
import FreedomSection from "./FreedomSection";
import InvolvedSection from "./InvolvedSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import FacilitiesSection from "./FacilitiesSection";
import BuildBizSection from "./BuildBizSection";
import LatestBlogSection from "./LatestBlogSection";
import ContactSection from "./ContactSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <BlockChainTrustSection />
      <FreedomSection />
      {/* <InvolvedSection /> */}
      <WhyChooseUsSection />
      <FacilitiesSection />
      <BuildBizSection />
      <LatestBlogSection />
      <ContactSection />
    </>
  );
};

export default Home;
