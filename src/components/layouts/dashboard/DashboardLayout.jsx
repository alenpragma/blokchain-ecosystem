// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "../../dashboardComponents/dashboard/Header";
// import { useState } from "react";

// const DashboardLayout = () => {
//   const [show, setShow] = useState(false);
//   const toggleMenu = () => {
//     setShow(!show);
//   };
//   return (
//     <div className="max-w-[1440px] mx-auto flex justify-start">
//       <div className=" relative">
//         <div className="w-full lg:block hidden">
//           <Sidebar />
//         </div>
//         <div className="lg:hidden" onClick={toggleMenu}>
//           <div
//             className={`${
//               show == true ? "left-0 top-0" : "-left-[243px] top-0"
//             } w-[243px] h-full bg-[#fff] absolute z-50 duration-150 rounded-r-md`}
//           >
//             <Sidebar show={show} />
//           </div>
//         </div>
//       </div>
//       <div className="w-[1090px]">
//         <Header show={show} setShow={setShow} />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
import Sidebar from "./Sidebar";
import Header from "../../dashboardComponents/dashboard/Header";

const DashboardLayout = () => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {};
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <div className="w-full mx-auto relative">
      <div className="grid grid-cols-12 overflow-hidden">
        <div
          className={`col-span-3 md:block hidden bg-white z-30 sticky overflow-y-auto `}
        >
          <Sidebar setShow={setShow} show={show} />
        </div>
        <div
          className={`col-span-6 ${
            show !== true
              ? " top-0 -left-40 duration-200 transition-all ease-in"
              : "left-0  duration-200 transition-all ease-in w-1/2"
          } bg-[#fff] z-30  ease-in fixed md:hidden `}
        >
          <Sidebar setShow={setShow} show={show} />
        </div>

        <div
          className={`md:col-span-9 col-span-12 md:sticky top-0 left-0 h-[100vh] overflow-y-auto `}
        >
          <div className="w-[1090px]">
            <Header show={show} setShow={setShow} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
