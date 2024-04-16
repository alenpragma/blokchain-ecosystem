import { NavLink, useLocation } from "react-router-dom";
// import vector from "../../../assets/icon/dashboard-icon/vector0.svg";
import vector0 from "../../../assets/icon/dashboard-icon/vector0.svg";
import vector1 from "../../../assets/icon/dashboard-icon/vector1.svg";
import chart0 from "../../../assets/icon/dashboard-icon/chart0.svg";
import chart1 from "../../../assets/icon/dashboard-icon/chart1.svg";
import shuffle1 from "../../../assets/icon/dashboard-icon/shuffle1.svg";
import logo from "../../../assets/icon/logo2.svg";
import { useEffect } from "react";

const menuItem = [
  {
    img0: chart0,
    img1: chart1,
    title: "All blog",
    pathname: "all-blog",
  },
  {
    img0: vector0,
    img1: vector1,
    title: "Add-Blog",
    pathname: "blog-post",
  },
  {
    img0: vector0,
    img1: vector1,
    title: "Add-Category",
    pathname: "add-category",
  },
];

const Sidebar = ({ toggle, setToggle }) => {
  const location = useLocation();

  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    setToggle(false);
  }, [location.pathname]);
  return (
    <aside className=" bg-light-gray h-screen col-span-3 md:sticky md:top-0 left-0 overflow-auto w-[243px] border-r-4">
      <div
        className="flex justify-end pr-5 py-2 md:hidden"
        onClick={handleToggle}
      >
        {toggle == true ? (
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
          ""
        )}
      </div>
      <nav className="flex flex-col gap-3 ">
        <h3 className="py-8 text-center text-[24px] font-bold text-blue-800 border-b-2">
          Biz <br /> <span className="text-black">Token</span>
        </h3>
        {menuItem.map((item, i) => (
          <NavLink
            key={i}
            to={`/blog/blog-post/${item.pathname}`}
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
