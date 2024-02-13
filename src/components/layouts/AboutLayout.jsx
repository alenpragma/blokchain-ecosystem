import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import AboutFooter from "./AboutFooter";

const AboutLayout = () => {
  return (
    <div>
    <Navbar />
    <Outlet />
    <AboutFooter />
    </div>
  );
};

export default AboutLayout;