import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import Container from "../../shared/Container";
import { useState } from "react";

const AdminLayout = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <div className="">
        <div onClick={handleToggle} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className=" grid grid-cols-12 gap-3 relative">
          <div
            className={`h-screen overflow-y-auto md:sticky absolute z-20 -top-12 md:block ${
              toggle ? "col-span-3 bg-[#fff] shadow-lg" : "col-span-3 hidden"
            }`}
          >
            <AdminSidebar setToggle={setToggle} toggle={toggle} />
          </div>
          <div className="md:col-span-9 col-span-12">
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminLayout;
