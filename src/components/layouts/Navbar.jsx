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
    <Link to="/" className="hover:text-slate-300">
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
            <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg lg:flex md:flex hidden">
            Start Building
            </button>
            <button
              onClick={handleToggleMenu}
              className="lg:hidden md:hidden flex"
            >
              {menu ? (
                <IoIosClose className="text-[40px]" />
              ) : (
                <IoMdMenu className="text-[40px]" />
              )}
            </button>
          </div>
          <div
            className={`${
              menu
                ? "transition duration-300 ease-in-out transform translate-x-0"
                : "transition duration-300 ease-in-out transform translate-x-full"
            } fixed top-16 right-0 w-full h-full p-4 flex flex-col items-center bg-[#2F76DE] z-[999]`}
          >
            <div>
              <ul className="flex flex-col gap-5 text-[#FFF] text-[16px] text-center">
                {NavItem}
              </ul>
            </div>
            <div className="my-4">
              <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg">
                Start Building
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
