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
    <Link to="/" className="hover:text-slate-300">
      About
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
              create wallet
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
                create wallet
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       <button onClick={toggleMenu} className="bg-blue-500 text-white p-2">
//         Toggle Menu
//       </button>

//       <div
//         className={`${
//           isMenuOpen ? 'transition duration-500 ' : ''
//         } ${
//           isMenuOpen ? 'translate-y-0' : '-translate-y-full'
//         }  top-0 left-0 w-64 h-full bg-gray-800 p-4`}
//       >
//         {/* Your menu content goes here */}
//         <p className="text-white">Menu Content</p>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
