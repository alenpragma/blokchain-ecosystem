import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MainFooter from "./MainFooter";
import { useState } from "react";

const MainLayout = () => {
  const [scroll, setScroll] = useState(false);
  return (
    <div>
      <Navbar scroll={scroll} setScroll={setScroll} />
      <div className={`${scroll ? "fixed  right-0 left-0" : ""}`}>
        <Outlet />
        <MainFooter />
      </div>
    </div>
  );
};

export default MainLayout;
