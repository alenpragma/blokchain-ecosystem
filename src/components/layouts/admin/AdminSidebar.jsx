import { NavLink, useLocation } from "react-router-dom";
// import vector from "../../../assets/icon/dashboard-icon/vector0.svg";
import vector0 from "../../../assets/icon/dashboard-icon/vector0.svg";
import vector1 from "../../../assets/icon/dashboard-icon/vector1.svg";
import minus from "../../../assets/icon/dashboard-icon/minus-circle0.svg";
import minus1 from "../../../assets/icon/dashboard-icon/minus-circle1.svg";
import add0 from "../../../assets/icon/dashboard-icon/add0.svg";
import add1 from "../../../assets/icon/dashboard-icon/add1.svg";
import chart0 from "../../../assets/icon/dashboard-icon/chart0.svg";
import chart1 from "../../../assets/icon/dashboard-icon/chart1.svg";
import fileimport from "../../../assets/icon/dashboard-icon/file-import0.svg";
import fileimport1 from "../../../assets/icon/dashboard-icon/file-import1.svg";
import handHoldingMedical from "../../../assets/icon/dashboard-icon/hand-holding-medical0.svg";
import handHoldingMedical1 from "../../../assets/icon/dashboard-icon/hand-holding-medical1.svg";
import paperPlane from "../../../assets/icon/dashboard-icon/paper-plane0.svg";
import paperPlane1 from "../../../assets/icon/dashboard-icon/paper-plane1.svg";
import refresh from "../../../assets/icon/dashboard-icon/refresh0.svg";
import refresh1 from "../../../assets/icon/dashboard-icon/refresh1.svg";
import shuffle from "../../../assets/icon/dashboard-icon/shuffle0.svg";
import shuffle1 from "../../../assets/icon/dashboard-icon/shuffle1.svg";
import logo from "../../../assets/icon/logo2.svg";

const menuItem = [
  {
    img0: vector0,
    img1: vector1,
    title: "Add-Blog",
    pathname: "blog-post",
  },
  {
    img0: chart0,
    img1: chart1,
    title: "All blog",
    pathname: "all-blog",
  },
];

const Sidebar = ({ show }) => {
  const location = useLocation();

  return (
    <aside className="bg-light-gray h-screen col-span-3 md:sticky md:top-0 left-0 overflow-auto w-[243px]">
      <div className="flex justify-end pr-5 pt-3 lg:hidden ">
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
      <nav className="flex flex-col gap-3 border-r-2">
        {menuItem.map((item, i) => (
          <NavLink
            key={i}
            to={`/blog/${item.pathname}`}
            className={({ isActive }) =>
              `w-full py-3 rounded pl-6 transition-all ${
                isActive ? "bg-blue-800 text-[#FFFFFF]" : ""
              }`
            }
          >
            <span className="flex gap-3 items-center">{item.title}</span>
          </NavLink>
        ))}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-full py-3 rounded pl-6 transition-all ${
              isActive ? "bg-blue-800 text-[#FFFFFF]" : ""
            }`
          }
        >
          <span className="flex gap-3 items-center">Home</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
