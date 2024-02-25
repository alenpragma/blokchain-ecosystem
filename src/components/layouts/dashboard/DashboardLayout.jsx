import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-start">
      <div className="col-span-4 w-[243px]">
      <Sidebar />
      </div>
      <div className="col-span-8">
      <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
