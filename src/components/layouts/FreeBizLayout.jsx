import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FreeBizFooter from "./FreeBizFooter";

const FreeBizLayout = () => {
  return (
    <div>
    <Navbar />
    <Outlet />
    <FreeBizFooter />
    </div>
  );
};

export default FreeBizLayout;