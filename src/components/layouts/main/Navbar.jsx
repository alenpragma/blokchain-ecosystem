import React, { useEffect, useRef, useState } from "react";
import Container from "../../shared/Container";
import icon from "../../../assets/icon/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMdMenu, IoIosClose } from "react-icons/io";

const NavItem1 = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } `
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/Developers"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        }  btn`
      }
    >
      Developers
    </NavLink>
    <NavLink
      to="/ecosystem"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } btn`
      }
    >
      Ecosystem
    </NavLink>
    <NavLink
      to="/commiunity"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } btn`
      }
    >
      Community
    </NavLink>
    <NavLink
      to="/blog"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } btn`
      }
    >
      Blog
    </NavLink>
    <NavLink
      to="/free-biz-home"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } btn`
      }
    >
      Free-Biz
    </NavLink>
  </>
);
const NavItem2 = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } `
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/Developers"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        } `
      }
    >
      Developers
    </NavLink>
    <NavLink
      to="/ecosystem"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        }`
      }
    >
      Ecosystem
    </NavLink>
    <NavLink
      to="/commiunity"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        }`
      }
    >
      Community
    </NavLink>
    <NavLink
      to="/blog"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        }`
      }
    >
      Blog
    </NavLink>
    <NavLink
      to="/free-biz-home"
      className={({ isActive }) =>
        `${
          isActive
            ? "text-[#FFFFFF] font-medium hover:text-[#FFFFFF] "
            : "text-[#DDDDDD] hover:text-[#fff]"
        }`
      }
    >
      Free-Biz
    </NavLink>
  </>
);

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [menu]);
  const handleToggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return window.addEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
    className={`${
      isScroll == true
        ? "bg-[#2F76DE] duration-500 "
        : "transition-all duration-500 py-[5px] bg-[#2F76DE]"
    } w-full fixed top-0 left-0 z-10`}
    >
      <Container>
        <nav className="w-full flex justify-between items-center py-4 relative px-5">
          <div>
            <Link to="/">
              <img className="w-32" src={icon} alt="" />
            </Link>
          </div>
          <div className="lg:flex md:flex hidden">
            <div className="flex gap-5 text-[16px]">{NavItem1}</div>
          </div>
          <div className="">
            <Link to="/dashboard/dashboard-home">
              <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg md:block hidden">
                Start Building
              </button>
            </Link>
            <button onClick={handleToggleMenu} className="flex md:hidden">
              {menu ? "" : <IoMdMenu className="text-[40px] text-[#fff]" />}
            </button>
          </div>
          <div
            className={`${
              menu
                ? "transition duration-300 ease-in-out transform translate-x-0  md:hidden"
                : "transition duration-300 ease-in-out transform translate-x-full w-full overflow-auto"
            } fixed top-0 right-0 w-full h-full flex flex-col items-end  z-[999]`}
          >
            <div className="w-1/2 bg-[#a2a5b9]  h-[100vh]">
              <div className="flex justify-end mr-5">
                <button onClick={handleToggleMenu} className="flex md:hidden">
                  {menu ? (
                    <IoIosClose className="text-[50px] text-[#fff]" />
                  ) : (
                    ""
                  )}
                </button>
              </div>
              <nav className="flex flex-col gap-5 text-[#FFF] text-[16px] text-center">
                {NavItem2}
              </nav>
              <div className="my-4 flex justify-center">
                <Link to="/dashboard/dashboard-home">
                  <button className="text-[#303030] py-3 px-8 bg-[#F3FAFF] rounded-lg">
                    Start Building
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
