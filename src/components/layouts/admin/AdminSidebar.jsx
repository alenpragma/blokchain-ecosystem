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
    <aside className="bg-light-gray h-screen col-span-3 sticky top-0 left-0 overflow-auto">
      <div className="text-center font-semibold text-[20px] my-12">
        <h3>Biz Token</h3>
      </div>
      <nav className="flex flex-col px-3">
        {menuItem.map((item, i) => (
          <NavLink
            key={i}
            to={item.pathname}
            className={({ isActive }) =>
              `w-full py-3 pl-2 transition-all border-t-2  ${
                isActive ? " text-[#4f4cf4] font-semibold" : ""
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
