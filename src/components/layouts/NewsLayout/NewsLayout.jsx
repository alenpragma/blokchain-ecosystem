import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const NewsLayout = () => {
  return (
    <div>
     <Navbar />
     <Outlet />
    </div>
  );
};

export default NewsLayout;