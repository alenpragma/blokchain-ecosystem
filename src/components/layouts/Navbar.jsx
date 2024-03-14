import React, { useState } from "react";
import Container from "../shared/Container";
import icon from "../../assets/icon/logo.png";
import { Link } from "react-router-dom";
import { IoMdMenu, IoIosClose } from "react-icons/io";

const NavItem = (
  <>
    <Link to="/" className="hover:text-slate-300">
      Developers
    </Link>
    <Link to="/ecosystem" className="hover:text-slate-300">
      Ecosystem
    </Link>
    <Link to="/" className="hover:text-slate-300">
      Community
    </Link>
    <Link to="/" className="hover:text-slate-300">
      NewsFeed
    </Link>
    <Link to="/free-biz-home" className="hover:text-slate-300">
      Free-Biz
    </Link>
  </>
);

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleToggleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <div className="w-full bg-[#2F76DE]">
      <Container>
        <div className="w-full flex justify-between items-center py-4 relative px-5">
          <div>
            <Link to="/">
              <img className="w-32" src={icon} alt="" />
            </Link>
          </div>
          <div className="lg:flex md:flex hidden">
            <ul className="flex gap-5 text-[#FFF] text-[16px] hover:text-[#F3FAFF]">
              {NavItem}
            </ul>
          </div>
          <div className="">
            <Link to="/dashboard/dashboard-home">
              <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg md:block hidden">
                Start Building
              </button>
            </Link>
            <button onClick={handleToggleMenu} className="flex md:hidden">
              {menu ? "" : (
                <IoMdMenu className="text-[40px] text-[#fff]" />
              )}
            </button>
          </div>
          <div
            className={`${
              menu
                ? "transition duration-300 ease-in-out transform translate-x-0"
                : "transition duration-300 ease-in-out transform translate-x-full"
            } fixed top-0 right-0 md:hidden w-full h-full p-4 flex flex-col items-center bg-[#2F76DE] z-[999]`}
          >
            <div className="w-full">
              <div className="flex justify-end">
                <button onClick={handleToggleMenu} className="flex md:hidden">
                  {menu ? (
                    <IoIosClose className="text-[40px] text-[#fff]" />
                  ) : (
                    <IoMdMenu className="text-[40px] text-[#fff]" />
                  )}
                </button>
              </div>
              <ul className="flex flex-col gap-5 text-[#FFF] text-[16px] text-center">
                {NavItem}
              </ul>
            </div>
            <div className="my-4">
              <Link to="/dashboard/dashboard-home">
                <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg">
                  Start Building
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
